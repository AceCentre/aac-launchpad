import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import sharp from "sharp";

// Function to compress and resize image before embedding
async function compressAndResizeImage(
  imagePath: string,
  maxWidth: number = 1200,
  maxHeight: number = 1000
): Promise<Buffer> {
  try {
    console.log(`Starting compression for: ${imagePath}`);
    console.log(`Original file size: ${fs.statSync(imagePath).size} bytes`);

    const image = sharp(imagePath);
    const metadata = await image.metadata();

    console.log(`Original dimensions: ${metadata.width}x${metadata.height}`);

    // Calculate new dimensions while maintaining aspect ratio
    let { width, height } = metadata;

    if (width && height) {
      if (width > maxWidth || height > maxHeight) {
        const aspectRatio = width / height;

        if (width > height) {
          width = maxWidth;
          height = Math.round(width / aspectRatio);
        } else {
          height = maxHeight;
          width = Math.round(height * aspectRatio);
        }

        console.log(`Resizing to: ${width}x${height}`);
      } else {
        console.log(`Image already within size limits, no resizing needed`);
      }
    }

    // Resize and compress the image, with orientation correction
    const compressedBuffer = await image
      .rotate() // This automatically corrects orientation based on EXIF data
      .resize(width, height)
      .jpeg({ quality: 80, progressive: true })
      .toBuffer();

    console.log(
      `Compressed image from ${fs.statSync(imagePath).size} bytes to ${
        compressedBuffer.length
      } bytes`
    );
    console.log(
      `Compression ratio: ${(
        (1 - compressedBuffer.length / fs.statSync(imagePath).size) *
        100
      ).toFixed(1)}%`
    );

    return compressedBuffer;
  } catch (error) {
    console.error("Error compressing image:", error);
    console.log("Falling back to original image");
    // Fallback to original image if compression fails
    return fs.readFileSync(imagePath);
  }
}

// Function to get image dimensions and handle rotation
function getImageDimensions(
  image: any,
  scale: number,
  maxWidth: number,
  maxHeight: number
) {
  const dims = image.scale(scale);

  let finalWidth = dims.width;
  let finalHeight = dims.height;

  // Calculate aspect ratio
  const aspectRatio = dims.height / dims.width;

  // Simple scaling: fit the image within the max dimensions while preserving aspect ratio
  // This prevents cropping by ensuring the entire image fits
  if (finalWidth > maxWidth || finalHeight > maxHeight) {
    const scaleX = maxWidth / finalWidth;
    const scaleY = maxHeight / finalHeight;
    const scaleFactor = Math.min(scaleX, scaleY); // Use the smaller scale to fit entirely

    finalWidth *= scaleFactor;
    finalHeight *= scaleFactor;
  }

  return {
    width: finalWidth,
    height: finalHeight,
    x: 0,
    y: 0,
  };
}

export interface CoverPageOptions {
  userName?: string;
  activityBookTitle: string;
  activityBookLevel?: string;
  activityBookCategory?: string;
  userPhotoPath?: string;
  devicePhotoPath?: string;
}

export async function generateCoverPagePdf(
  options: CoverPageOptions
): Promise<Buffer> {
  const { userName, activityBookTitle, userPhotoPath, devicePhotoPath } =
    options;

  // Create a new PDF document
  const pdfDoc = await PDFDocument.create();

  // Get the first page
  const page1 = pdfDoc.addPage([595, 842]); // A4 size
  const { width, height } = page1.getSize();

  // Embed fonts
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Title
  const title = `${userName || "My"} ${activityBookTitle}`;
  const titleFontSize = 24;
  const titleWidth = font.widthOfTextAtSize(title, titleFontSize);
  page1.drawText(title, {
    x: (width - titleWidth) / 2,
    y: height - 100,
    size: titleFontSize,
    font: boldFont,
    color: rgb(0, 0, 0),
  });

  // User Photo Section
  let currentY = height - 200;

  page1.drawText("Your Photo:", {
    x: 50,
    y: currentY,
    size: 16,
    font: boldFont,
    color: rgb(0, 0, 0),
  });

  currentY -= 30;

  if (userPhotoPath && fs.existsSync(userPhotoPath)) {
    console.log("Processing user photo at path:", userPhotoPath);
    console.log("File size:", fs.statSync(userPhotoPath).size, "bytes");
    try {
      // Compress and resize the image first
      const compressedImageBuffer = await compressAndResizeImage(
        userPhotoPath,
        1200,
        1000
      );

      let image;

      // Try to determine image type and embed accordingly
      if (userPhotoPath.toLowerCase().endsWith(".png")) {
        console.log("Embedding user photo as PNG");
        image = await pdfDoc.embedPng(compressedImageBuffer);
      } else if (
        userPhotoPath.toLowerCase().endsWith(".jpg") ||
        userPhotoPath.toLowerCase().endsWith(".jpeg")
      ) {
        console.log("Embedding user photo as JPG");
        image = await pdfDoc.embedJpg(compressedImageBuffer);
      } else {
        // Try PNG first, then JPG as fallback
        console.log("Trying PNG first, then JPG as fallback for user photo");
        try {
          image = await pdfDoc.embedPng(compressedImageBuffer);
          console.log("Successfully embedded user photo as PNG");
        } catch (pngError) {
          console.log("PNG failed for user photo, trying JPG:", pngError);
          image = await pdfDoc.embedJpg(compressedImageBuffer);
          console.log("Successfully embedded user photo as JPG");
        }
      }

      console.log("Original image dimensions:", image.width, "x", image.height);

      const imageDims = getImageDimensions(
        image,
        1.0,
        width * 1.0,
        height * 1.2
      );

      console.log(
        "Final image dimensions:",
        imageDims.width,
        "x",
        imageDims.height
      );

      console.log("Using compressed image for PDF embedding");

      // Calculate position to center the image
      const imageX = (width - imageDims.width) / 2;
      const imageY = currentY - imageDims.height;

      page1.drawImage(image, {
        x: imageX,
        y: imageY,
        width: imageDims.width,
        height: imageDims.height,
      });

      currentY -= imageDims.height + 50;
    } catch (error) {
      console.error("Error embedding user photo:", error);
      page1.drawText(
        "[Photo could not be embedded - " + (error as Error).message + "]",
        {
          x: 50,
          y: currentY,
          size: 12,
          font: font,
          color: rgb(0.5, 0.5, 0.5),
        }
      );
      currentY -= 30;
    }
  } else {
    page1.drawText("[Insert your photo here]", {
      x: 50,
      y: currentY,
      size: 12,
      font: font,
      color: rgb(0.5, 0.5, 0.5),
    });
    currentY -= 30;
  }

  // Footer on page 1
  page1.drawText("Generated by AAC Launchpad - acecentre.org.uk", {
    x: 50,
    y: 50,
    size: 10,
    font: font,
    color: rgb(0.5, 0.5, 0.5),
  });

  // Page 2: Device photo page
  const page2 = pdfDoc.addPage([595, 842]); // A4 size

  // Device Photo Section
  page2.drawText("Your Device:", {
    x: 50,
    y: height - 100,
    size: 20,
    font: boldFont,
    color: rgb(0, 0, 0),
  });

  let deviceY = height - 150;

  if (devicePhotoPath && fs.existsSync(devicePhotoPath)) {
    console.log("Processing device photo at path:", devicePhotoPath);
    console.log("File size:", fs.statSync(devicePhotoPath).size, "bytes");
    try {
      // Compress and resize the image first
      const compressedImageBuffer = await compressAndResizeImage(
        devicePhotoPath,
        1200,
        1000
      );

      let image;

      // Try to determine image type and embed accordingly
      if (devicePhotoPath.toLowerCase().endsWith(".png")) {
        console.log("Embedding device photo as PNG");
        image = await pdfDoc.embedPng(compressedImageBuffer);
      } else if (
        devicePhotoPath.toLowerCase().endsWith(".jpg") ||
        devicePhotoPath.toLowerCase().endsWith(".jpeg")
      ) {
        console.log("Embedding device photo as JPG");
        image = await pdfDoc.embedJpg(compressedImageBuffer);
      } else {
        // Try PNG first, then JPG as fallback
        console.log("Trying PNG first, then JPG as fallback for device photo");
        try {
          image = await pdfDoc.embedPng(compressedImageBuffer);
          console.log("Successfully embedded device photo as PNG");
        } catch (pngError) {
          console.log("PNG failed for device photo, trying JPG:", pngError);
          image = await pdfDoc.embedJpg(compressedImageBuffer);
          console.log("Successfully embedded device photo as JPG");
        }
      }

      console.log(
        "Original device image dimensions:",
        image.width,
        "x",
        image.height
      );

      const imageDims = getImageDimensions(
        image,
        1.0,
        width * 1.0,
        height * 1.2
      );

      console.log(
        "Final device image dimensions:",
        imageDims.width,
        "x",
        imageDims.height
      );

      console.log("Using compressed device image for PDF embedding");

      // Calculate position to center the image
      const imageX = (width - imageDims.width) / 2;
      const imageY = deviceY - imageDims.height;

      page2.drawImage(image, {
        x: imageX,
        y: imageY,
        width: imageDims.width,
        height: imageDims.height,
      });

      deviceY -= imageDims.height + 50;
    } catch (error) {
      console.error("Error embedding device photo:", error);
      page2.drawText(
        "[Photo could not be embedded - " + (error as Error).message + "]",
        {
          x: 50,
          y: deviceY,
          size: 12,
          font: font,
          color: rgb(0.5, 0.5, 0.5),
        }
      );
      deviceY -= 30;
    }
  } else {
    page2.drawText("[Insert your device photo here]", {
      x: 50,
      y: deviceY,
      size: 12,
      font: font,
      color: rgb(0.5, 0.5, 0.5),
    });
    deviceY -= 30;
  }

  // Footer on page 2
  page2.drawText("Generated by AAC Launchpad - acecentre.org.uk", {
    x: 50,
    y: 50,
    size: 10,
    font: font,
    color: rgb(0.5, 0.5, 0.5),
  });

  // Save the PDF
  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}
