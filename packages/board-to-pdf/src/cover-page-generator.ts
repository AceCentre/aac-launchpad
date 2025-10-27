import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import sharp from "sharp";

// Function to use original image without any processing
async function processImage(
  imagePath: string,
  maxWidth: number = 1200,
  maxHeight: number = 1000
): Promise<Buffer> {
  try {
    console.log(`Using original image: ${imagePath}`);
    console.log(`Original file size: ${fs.statSync(imagePath).size} bytes`);

    // Just return the original image without any processing
    const originalBuffer = fs.readFileSync(imagePath);
    console.log(`Using original image without processing`);

    return originalBuffer;
  } catch (error) {
    console.error("Error reading image:", error);
    console.log("Falling back to original image");
    // Fallback to original image if reading fails
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

  // Title - Include user's name
  const title = `${userName || "USER"} SWITCH ACTIVITY BOOK`;
  const titleFontSize = 24;
  const titleWidth = font.widthOfTextAtSize(title, titleFontSize);
  page1.drawText(title, {
    x: (width - titleWidth) / 2,
    y: height - 100,
    size: titleFontSize,
    font: boldFont,
    color: rgb(0, 0, 0),
  });

  // Add FUNctional Switching logo image first
  let currentY = height - 200;

  // Add FUNctional Switching logo image
  try {
    const logoPath = "public/activity-book/functional-switching-logo.png";
    console.log("Checking for FUNctional Switching logo at:", logoPath);
    console.log("File exists:", fs.existsSync(logoPath));
    if (fs.existsSync(logoPath)) {
      const processedLogoBuffer = await processImage(logoPath, 500, 300);

      let logoImage;
      try {
        logoImage = await pdfDoc.embedPng(processedLogoBuffer);
      } catch (pngError) {
        // Try as JPG if PNG fails
        logoImage = await pdfDoc.embedJpg(processedLogoBuffer);
      }

      const logoDims = getImageDimensions(logoImage, 1.0, 500, 300);
      const logoX = (width - logoDims.width) / 2; // Center the logo

      page1.drawImage(logoImage, {
        x: logoX,
        y: currentY - logoDims.height,
        width: logoDims.width,
        height: logoDims.height,
      });

      currentY -= logoDims.height + 20;
    }
  } catch (error) {
    console.error("Error embedding FUNctional Switching logo:", error);
  }

  // Add "a collaboration between" text
  const collaborationText = "a collaboration between";
  const collaborationFontSize = 14;
  const collaborationWidth = font.widthOfTextAtSize(
    collaborationText,
    collaborationFontSize
  );
  page1.drawText(collaborationText, {
    x: (width - collaborationWidth) / 2,
    y: currentY,
    size: collaborationFontSize,
    font: font,
    color: rgb(0, 0, 0),
  });

  currentY -= 10; // No spacing after "a collaboration between" text to move logo even higher

  // Add AceCentre and CENMAC logo
  try {
    const aceCenmacLogoPath = "public/activity-book/Ace&Cenmac-logo.png";
    console.log("Checking for AceCentre/CENMAC logo at:", aceCenmacLogoPath);
    console.log("File exists:", fs.existsSync(aceCenmacLogoPath));
    if (fs.existsSync(aceCenmacLogoPath)) {
      const processedAceCenmacLogoBuffer = await processImage(
        aceCenmacLogoPath,
        400,
        200
      );

      let aceCenmacLogoImage;
      try {
        aceCenmacLogoImage = await pdfDoc.embedPng(
          processedAceCenmacLogoBuffer
        );
      } catch (pngError) {
        // Try as JPG if PNG fails
        aceCenmacLogoImage = await pdfDoc.embedJpg(
          processedAceCenmacLogoBuffer
        );
      }

      const aceCenmacLogoDims = getImageDimensions(
        aceCenmacLogoImage,
        1.0,
        200,
        100
      );
      const aceCenmacLogoX = (width - aceCenmacLogoDims.width) / 2; // Center the logo

      page1.drawImage(aceCenmacLogoImage, {
        x: aceCenmacLogoX,
        y: currentY - aceCenmacLogoDims.height,
        width: aceCenmacLogoDims.width,
        height: aceCenmacLogoDims.height,
      });

      currentY -= aceCenmacLogoDims.height + 50; // Increased spacing after logo to push description text down
    }
  } catch (error) {
    console.error("Error embedding AceCentre/CENMAC logo:", error);
    // Fallback to text if logo fails
    page1.drawText("AceCentre", {
      x: width / 2 - 100,
      y: currentY,
      size: 12,
      font: font,
      color: rgb(0, 0, 0),
    });

    page1.drawText("CENMAC", {
      x: width / 2 + 50,
      y: currentY,
      size: 12,
      font: font,
      color: rgb(0, 0, 0),
    });
  }

  // Add description text at the bottom of the page
  const descriptionText =
    "This book contains ideas of how to introduce switches, learn how they work and what they can do by using fun and motivating activities. The activities use and build different skills that the switch user can reapply to other FUNctional activities such as controlling a communication device, accessing the school curriculum, accessing a computer and so much more!";

  // Split text manually for pdf-lib
  const words = descriptionText.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    const testLine = currentLine + (currentLine ? " " : "") + word;
    const testWidth = font.widthOfTextAtSize(testLine, 10);
    if (testWidth > width - 100) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) {
    lines.push(currentLine);
  }

  // Calculate starting Y position to place text at bottom of page
  const totalTextHeight = lines.length * 15;
  const startY = 100 + totalTextHeight; // 100px from bottom

  lines.forEach((line, index) => {
    const lineWidth = font.widthOfTextAtSize(line, 10);
    const centerX = (width - lineWidth) / 2; // Center the line

    page1.drawText(line, {
      x: centerX,
      y: startY - index * 15,
      size: 10,
      font: font,
      color: rgb(0, 0, 0),
    });
  });

  // Footer on page 1
  page1.drawText("Generated by  - acecentre.org.uk", {
    x: 50,
    y: 50,
    size: 10,
    font: font,
    color: rgb(0.5, 0.5, 0.5),
  });

  // Page 2: Information sheet with switch setup sections
  const page2 = pdfDoc.addPage([595, 842]); // A4 size

  // Page 2 Title
  page2.drawText("PAGE 2: INFORMATION SHEET", {
    x: 50,
    y: height - 50,
    size: 18,
    font: boldFont,
    color: rgb(0, 0, 0),
  });

  // Add horizontal line under title
  page2.drawLine({
    start: { x: 50, y: height - 60 },
    end: { x: width - 50, y: height - 60 },
    thickness: 1,
    color: rgb(0, 0, 0),
  });

  // Add informational text
  let infoY = height - 100;

  const infoText1 =
    "The activities in this book fall under different ‘Gears’. In Gear 1 activities, you only need one switch, Gear 2 looks at finding a second movement/body part to activate a switch and all other Gears require 2 switches to be used at the same time.";
  const infoText2 =
    "Please insert images of how the person that this book belongs to uses one switch (for Gear 1 activities) and how they use two switches (for activities in Gears 3-5).";
  const infoText3 =
    "If a second body part/movement has not been found yet, leave the 2 switch set up blank until you have explored Gear 1 and 2 activities. For more information check out FUNctionalswitching.com";

  // Split and draw text lines
  const splitText = (text: string, maxWidth: number) => {
    const words = text.split(" ");
    const lines: string[] = [];
    let currentLine = "";

    for (const word of words) {
      const testLine = currentLine + (currentLine ? " " : "") + word;
      const testWidth = font.widthOfTextAtSize(testLine, 10);
      if (testWidth > maxWidth) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) {
      lines.push(currentLine);
    }
    return lines;
  };

  const lines1 = splitText(infoText1, width - 100);
  const lines2 = splitText(infoText2, width - 100);
  const lines3 = splitText(infoText3, width - 100);

  [...lines1, ...lines2, ...lines3].forEach((line, index) => {
    page2.drawText(line, {
      x: 50,
      y: infoY - index * 15,
      size: 10,
      font: font,
      color: rgb(0, 0, 0),
    });
  });

  infoY -= (lines1.length + lines2.length + lines3.length) * 15 + 30;

  // Add 1 SWITCH SET UP section
  const switch1Text = "1 SWITCH SET UP:";
  const switch1Width = font.widthOfTextAtSize(switch1Text, 14);
  page2.drawText(switch1Text, {
    x: (width - switch1Width) / 2,
    y: infoY,
    size: 14,
    font: boldFont,
    color: rgb(0, 0, 0),
  });

  infoY -= 30;

  // Draw yellow border for 1 switch setup (increased height by 45%)
  page2.drawRectangle({
    x: 50,
    y: infoY - 217, // 150 * 1.45 = 217.5, rounded to 217
    width: width - 100,
    height: 217, // 150 * 1.45 = 217.5, rounded to 217
    borderColor: rgb(1, 1, 0), // Yellow border
    borderWidth: 2,
  });

  // Add user photo to 1 switch setup section
  if (userPhotoPath && fs.existsSync(userPhotoPath)) {
    try {
      const processedImageBuffer = await processImage(
        userPhotoPath,
        1200,
        1000
      );

      let image;
      if (userPhotoPath.toLowerCase().endsWith(".png")) {
        image = await pdfDoc.embedPng(processedImageBuffer);
      } else {
        image = await pdfDoc.embedJpg(processedImageBuffer);
      }

      const imageDims = getImageDimensions(image, 1.0, width - 120, 203); // 140 * 1.45 = 203

      const imageX = (width - imageDims.width) / 2; // Center the image horizontally
      const imageY = infoY - 203; // 140 * 1.45 = 203

      page2.drawImage(image, {
        x: imageX,
        y: imageY,
        width: imageDims.width,
        height: imageDims.height,
      });
    } catch (error) {
      const errorText = "[Photo could not be embedded]";
      const errorWidth = font.widthOfTextAtSize(errorText, 12);
      page2.drawText(errorText, {
        x: (width - errorWidth) / 2,
        y: infoY - 108, // Centered vertically in the larger area
        size: 12,
        font: font,
        color: rgb(0.5, 0.5, 0.5),
      });
    }
  } else {
    const placeholder1Text = "[INSERT 1 SWITCH SET UP HERE]";
    const placeholder1Width = font.widthOfTextAtSize(placeholder1Text, 12);
    page2.drawText(placeholder1Text, {
      x: (width - placeholder1Width) / 2,
      y: infoY - 108, // Centered vertically in the larger area
      size: 12,
      font: font,
      color: rgb(0.5, 0.5, 0.5),
    });
  }

  infoY -= 247; // 180 + 67 (additional height from 45% increase)

  // Add 2 SWITCH SET UP section
  const switch2Text = "2 SWITCH SET UP:";
  const switch2Width = font.widthOfTextAtSize(switch2Text, 14);
  page2.drawText(switch2Text, {
    x: (width - switch2Width) / 2,
    y: infoY,
    size: 14,
    font: boldFont,
    color: rgb(0, 0, 0),
  });

  infoY -= 30;

  // Draw yellow border for 2 switch setup (increased height by 45%)
  page2.drawRectangle({
    x: 50,
    y: infoY - 217, // 150 * 1.45 = 217.5, rounded to 217
    width: width - 100,
    height: 217, // 150 * 1.45 = 217.5, rounded to 217
    borderColor: rgb(1, 1, 0), // Yellow border
    borderWidth: 2,
  });

  // Add device photo to 2 switch setup section
  if (devicePhotoPath && fs.existsSync(devicePhotoPath)) {
    try {
      const processedImageBuffer = await processImage(
        devicePhotoPath,
        1200,
        1000
      );

      let image;
      if (devicePhotoPath.toLowerCase().endsWith(".png")) {
        image = await pdfDoc.embedPng(processedImageBuffer);
      } else {
        image = await pdfDoc.embedJpg(processedImageBuffer);
      }

      const imageDims = getImageDimensions(image, 1.0, width - 120, 203); // 140 * 1.45 = 203

      const imageX = (width - imageDims.width) / 2; // Center the image horizontally
      const imageY = infoY - 203; // 140 * 1.45 = 203

      page2.drawImage(image, {
        x: imageX,
        y: imageY,
        width: imageDims.width,
        height: imageDims.height,
      });
    } catch (error) {
      const errorText = "[Photo could not be embedded]";
      const errorWidth = font.widthOfTextAtSize(errorText, 12);
      page2.drawText(errorText, {
        x: (width - errorWidth) / 2,
        y: infoY - 108, // Centered vertically in the larger area
        size: 12,
        font: font,
        color: rgb(0.5, 0.5, 0.5),
      });
    }
  } else {
    const placeholder2Text = "[INSERT 2 SWITCH SET UP HERE]";
    const placeholder2Width = font.widthOfTextAtSize(placeholder2Text, 12);
    page2.drawText(placeholder2Text, {
      x: (width - placeholder2Width) / 2,
      y: infoY - 108, // Centered vertically in the larger area
      size: 12,
      font: font,
      color: rgb(0.5, 0.5, 0.5),
    });
  }

  // Add combined logo at bottom of page 2
  try {
    const combinedLogoPath = "public/activity-book/Ace&Cenmac-logo.png";
    console.log(
      "Checking for combined logo at bottom of page 2:",
      combinedLogoPath
    );
    console.log("File exists:", fs.existsSync(combinedLogoPath));
    if (fs.existsSync(combinedLogoPath)) {
      const processedCombinedLogoBuffer = await processImage(
        combinedLogoPath,
        350,
        180
      );

      let combinedLogoImage;
      try {
        combinedLogoImage = await pdfDoc.embedPng(processedCombinedLogoBuffer);
      } catch (pngError) {
        // Try as JPG if PNG fails
        combinedLogoImage = await pdfDoc.embedJpg(processedCombinedLogoBuffer);
      }

      const combinedLogoDims = getImageDimensions(
        combinedLogoImage,
        1.0,
        100,
        50
      );
      const combinedLogoX = width - combinedLogoDims.width - 50; // Position on the right with 50px margin

      page2.drawImage(combinedLogoImage, {
        x: combinedLogoX,
        y: 0, // Even lower - positioned below the page edge
        width: combinedLogoDims.width,
        height: combinedLogoDims.height,
      });
    }
  } catch (error) {
    console.error("Error embedding combined logo:", error);
    // Fallback to text if logo fails
    page2.drawText("AceCentre", {
      x: 50,
      y: 50,
      size: 12,
      font: font,
      color: rgb(0, 0, 0),
    });

    page2.drawText("CENMAC", {
      x: width - 150,
      y: 50,
      size: 12,
      font: font,
      color: rgb(0, 0, 0),
    });
  }

  // Save the PDF
  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}
