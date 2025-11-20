import { jsPDF } from "jspdf";
import { GuideTemplate } from "types";
import fs from "fs";
import path from "path";

// Helper to load images as base64 (for local files)
async function getImageBase64(
  imgPath: string,
  rootToImages: string
): Promise<string | undefined> {
  try {
    const absPath = path.isAbsolute(imgPath)
      ? imgPath
      : path.join(rootToImages, imgPath);
    console.log("Trying to load image:", absPath);
    const data = fs.readFileSync(absPath);
    return "data:image/png;base64," + data.toString("base64");
  } catch (e) {
    console.warn(`Warning: Could not load image at ${imgPath}`);
    return undefined;
  }
}

export async function guideToPdf(
  template: GuideTemplate,
  options: { rootToImages?: string } = {}
): Promise<Buffer> {
  const rootToImages =
    options.rootToImages ||
    path.resolve(__dirname, "../../../apps/backend/public");
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;

  // Function to add logo to current page
  const addLogoToPage = () => {
    try {
      const logoPath = path.join(
        rootToImages,
        "activity-book/Ace&Cenmac-logo.png"
      );
      if (fs.existsSync(logoPath)) {
        const logoData = fs.readFileSync(logoPath);
        const logoBase64 =
          "data:image/png;base64," + logoData.toString("base64");
        const logoProps = doc.getImageProperties(logoBase64);
        const logoWidth = 32;
        const logoHeight = (logoWidth * logoProps.height) / logoProps.width;
        const logoX = pageWidth - logoWidth - 13; // 50px from right edge (same as page 2)
        const logoY = +280; // Bottom of page (same as page 2)
        doc.addImage(logoBase64, "PNG", logoX, logoY, logoWidth, logoHeight);
      }
    } catch (error) {
      console.warn("Could not add logo to page:", error);
    }
  };

  // Title - centered, with gear text on the right
  const titleY = 20;
  doc.setFontSize(28);
  doc.text(template.title, pageWidth / 2, titleY, {
    align: "center",
  });

  // Add gear text
  if (template.gear) {
    const gearText = `Gear ${template.gear}`;
    const gearFontSize = 15;
    doc.setFontSize(gearFontSize);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(255, 0, 0); // Red color
    doc.text(gearText, pageWidth - 10, titleY, {
      align: "right",
    });
    // Reset to default font and color
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0); // Black
  }

  // Add logo to first page
  addLogoToPage();

  // Function to create horizontal layout: coral badge + "AND" + switch image
  // For second row: thirdImage + "AND" + fourthImage
  const createHorizontalLayout = async (
    y: number,
    switchImagePath?: string,
    numberOfSwitches?: number,
    fourthImagePath?: string,
    gear?: number
  ) => {
    const pageWidth = doc.internal.pageSize.width;
    const centerY = y;

    if (fourthImagePath) {
      // Second row: thirdImage + "AND" + fourthImage
      const imageSize = 40; // Same size as original thirdImage

      // Third image (left side)
      if (switchImagePath) {
        const thirdImgData = await getImageBase64(
          switchImagePath,
          rootToImages
        );
        if (thirdImgData) {
          const thirdImgProps = doc.getImageProperties(thirdImgData);
          const aspectRatio = thirdImgProps.width / thirdImgProps.height;
          const thirdImgWidth = imageSize * aspectRatio;
          const thirdImgX = pageWidth / 2 - 60; // Same position as badge
          const thirdImgY = centerY - imageSize / 2;

          doc.addImage(
            thirdImgData,
            "PNG",
            thirdImgX,
            thirdImgY,
            thirdImgWidth,
            imageSize
          );
        }
      }

      // "and" text in the center
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("and", pageWidth / 2, centerY, {
        align: "center",
        baseline: "middle",
      });

      // Fourth image (right side)
      const fourthImgData = await getImageBase64(fourthImagePath, rootToImages);
      if (fourthImgData) {
        const fourthImgProps = doc.getImageProperties(fourthImgData);
        const aspectRatio = fourthImgProps.width / fourthImgProps.height;
        const fourthImgWidth = imageSize * aspectRatio;
        const fourthImgX = pageWidth / 2 + 15; // Same position as switch
        const fourthImgY = centerY - imageSize / 2;

        doc.addImage(
          fourthImgData,
          "PNG",
          fourthImgX,
          fourthImgY,
          fourthImgWidth,
          imageSize
        );
      }
    } else {
      // First row: Coral badge + "AND" + switch image
      const badgeRadius = 20;
      const badgeX = pageWidth / 2 - 60; // Position badge to the left of center
      doc.setFillColor(255, 127, 80); // Coral color
      doc.circle(badgeX, centerY, badgeRadius, "F");
      doc.setTextColor(0, 0, 0); // Black text
      doc.setFontSize(14);
      doc.setFont("helvetica", "normal");

      // Determine badge text based on gear value
      let line1: string, line2: string, line3: string;
      let line4: string | undefined;

      if (gear === 1) {
        // gear = 1: "see page 2 for my one switch setup"
        line1 = "See Page 2";
        line2 = "for my one";
        line3 = "switch setup";
      } else if (gear === 2) {
        // gear = 2: "move the switch to different body parts"
        line1 = "move the ";
        line2 = "switch to ";
        line3 = "different";
        line4 = "body parts";
      } else if (gear && gear > 2) {
        // gear > 2: "see page 2 for my two switch setup"
        line1 = "See Page 2";
        line2 = "for my two";
        line3 = "switch setup";
      } else {
        // Default fallback (if gear is not set)
        line1 = "See Page 2";
        line2 = "for my one";
        line3 = "switch setup";
      }

      // Position each line within the circle with slight rotation
      const lineHeight = 5;
      // Adjust startY based on number of lines (3 or 4)
      const numLines = line4 ? 4 : 3;
      const startY = centerY - (lineHeight * (numLines - 1)) / 2;

      // Rotate text to follow the curve of the circle
      doc.text(line1, badgeX, startY, {
        align: "center",
        baseline: "middle",
        angle: 10,
      });
      doc.text(line2, badgeX, startY + lineHeight, {
        align: "center",
        baseline: "middle",
        angle: 10,
      });
      doc.text(line3, badgeX, startY + lineHeight * 2, {
        align: "center",
        baseline: "middle",
        angle: 10,
      });
      // Add 4th line if it exists (for gear = 2)
      if (line4) {
        doc.text(line4, badgeX, startY + lineHeight * 3, {
          align: "center",
          baseline: "middle",
          angle: 10,
        });
      }

      // "and" text in the center
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("and", pageWidth / 2, centerY, {
        align: "center",
        baseline: "middle",
      });

      // Switch image to the right of center
      // Check if this is a set-switch image (all-turn-it, it-click-on) - use smaller dimensions
      const isSetSwitch =
        switchImagePath && switchImagePath.includes("set-switches");
      // Move set switch image further to the right
      const switchImageX = isSetSwitch
        ? pageWidth / 2 + 35
        : pageWidth / 2 + 12;
      const switchImageWidth = isSetSwitch ? 45 : 90; // Smaller width for set switches
      const switchImageHeight = isSetSwitch ? 40 : 110; // Smaller height for set switches
      const switchImageY = centerY - switchImageHeight / 2; // Center vertically based on actual height

      // Add switch image if available
      if (switchImagePath) {
        const imgData = await getImageBase64(switchImagePath, rootToImages);
        if (imgData) {
          doc.addImage(
            imgData,
            "PNG",
            switchImageX,
            switchImageY,
            switchImageWidth,
            switchImageHeight
          );

          // Add switch count text below the image if numberOfSwitches is specified
          if (numberOfSwitches && numberOfSwitches >= 1) {
            doc.setFontSize(16);
            doc.setFont("helvetica", "bold");
            doc.setTextColor(0, 0, 0); // Black text

            const countText = `x${numberOfSwitches}`;
            // Position text at the same absolute position regardless of image type
            // Use the regular switch image dimensions (90x110) as the reference point
            const regularSwitchX = pageWidth / 2 + 15;
            const regularSwitchWidth = 90;
            const regularSwitchHeight = 110;
            const regularSwitchY = centerY - regularSwitchHeight / 2;

            const countTextX = regularSwitchX + regularSwitchWidth - 15; // Fixed X position
            const countTextY = regularSwitchY + regularSwitchHeight - 55; // Fixed Y position

            doc.text(countText, countTextX, countTextY, {
              align: "center",
              baseline: "middle",
            });
          }
        }
      }
    }
  };

  // Main image
  let y = 80; // default if no main image
  if (template.mainImage && typeof template.mainImage === "string") {
    const imgData = await getImageBase64(template.mainImage, rootToImages);
    if (imgData) {
      const imgProps = doc.getImageProperties(imgData);
      const desiredHeight = 80;
      const aspectRatio = imgProps.width / imgProps.height;
      let desiredWidth = desiredHeight * aspectRatio;

      // Ensure image fits within page width (with margins)
      const maxWidth = pageWidth - 40; // 20px margin on each side
      if (desiredWidth > maxWidth) {
        desiredWidth = maxWidth;
      }

      // Center the image horizontally
      const imgX = (pageWidth - desiredWidth) / 2;
      doc.addImage(imgData, "PNG", imgX, 25, desiredWidth, desiredHeight);
      y = Math.max(y, 30 + desiredHeight + 10); // set y below the image, with 10 units padding
    }
  }

  for (let i = 0; i < template.sections.length; i++) {
    const section = template.sections[i];
    if (section.heading) {
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text(section.heading, pageWidth / 2, y, {
        align: "center",
      });
      y += 8;
    }
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    // Only render body text if it exists
    if (section.body) {
      // Center text for "WHAT YOU'LL NEED TO PLAY" section, left-align for others
      if (section.heading === "WHAT YOU'LL NEED TO PLAY") {
        doc.text(doc.splitTextToSize(section.body, 120), pageWidth / 2, y, {
          align: "center",
        });
      } else {
        // Use wider text width for "HOW TO PLAY" section to utilize more page width
        const textWidth = section.heading === "HOW TO PLAY" ? 180 : 120;
        doc.text(doc.splitTextToSize(section.body, textWidth), 20, y, {
          align: "left",
        });
      }
    }
    y += 15;

    // Add horizontal layout after "WHAT YOU'LL NEED TO PLAY" section
    if (
      section.heading === "WHAT YOU'LL NEED TO PLAY" ||
      section.heading === "WHAT YOU'LL NEED TO PLAY THIS GAME"
    ) {
      y += 1; // Add some spacing
      await createHorizontalLayout(
        y,
        section.image,
        template.numberOfSwitches,
        undefined,
        template.gear
      );
      y += 35; // Move down after the horizontal layout

      // Add second row if fourthImage exists, otherwise add thirdImage if it exists
      if (template.fourthImage) {
        // Create second row with thirdImage + "AND" + fourthImage
        y += 8; // Add some spacing before the second row
        await createHorizontalLayout(
          y,
          template.thirdImage,
          template.numberOfSwitches,
          template.fourthImage,
          template.gear
        );
        y += 40; // Move down after the second horizontal layout
      } else if (template.thirdImage) {
        // Original thirdImage logic for guides without fourthImage
        y += -20; // Add some spacing before the third image
        const thirdImgData = await getImageBase64(
          template.thirdImage,
          rootToImages
        );
        if (thirdImgData) {
          const thirdImgProps = doc.getImageProperties(thirdImgData);
          const thirdImgSize = 40; // Small size for the third image
          const aspectRatio = thirdImgProps.width / thirdImgProps.height;
          const thirdImgWidth = thirdImgSize * aspectRatio;
          const thirdImgX = pageWidth / 2 - thirdImgWidth / 2; // Center horizontally
          doc.addImage(
            thirdImgData,
            "PNG",
            thirdImgX,
            y,
            thirdImgWidth,
            thirdImgSize
          );
          y += thirdImgSize + 15; // Adjust this value to change padding between thirdImage and "HOW TO PLAY"
        }
      }
    }

    // Add links if they exist
    if (section.links && section.links.length > 0) {
      for (const link of section.links) {
        // Set link styling (blue and underlined)
        doc.setTextColor(0, 0, 255); // Blue text
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);

        // Add the link text on a new line with better positioning
        const linkText = link.text;
        doc.text(linkText, 15, y);

        // Add underline for the link with better positioning
        const linkWidth = doc.getTextWidth(linkText);
        doc.setDrawColor(0, 0, 255); // Blue line
        doc.line(15, y + 1, 15 + linkWidth, y + 1);

        // Add clickable annotation (PDF link) with better positioning
        // For "your-device" links, point to page 2 (which is the device page in the merged PDF)
        // Try using a different format that might work better with PDF viewers
        const linkUrl =
          link.target === "your-device" ? "#page=2" : `#${link.target}`;
        doc.link(15, y - 2, linkWidth, 4, {
          url: linkUrl,
          color: [0, 0, 255],
        });

        y += 8; // Add a bit more spacing after the link
      }

      // Reset text color to black
      doc.setTextColor(0, 0, 0);
    }

    // Skip rendering section images since they're now in the header
    // if (section.image && typeof section.image === "string") {
    //   const imgData = await getImageBase64(section.image, rootToImages);
    //   if (imgData) {
    //     doc.addImage(imgData, "PNG", 15, y, 40, 30);
    //     y += 25;
    //   }
    // }
    y += 5;

    // Only add a new page if there are more sections to process and we need the space
    if (y > 260 && i < template.sections.length - 1) {
      doc.addPage();
      y = 0;
      // Add logo to new page
      addLogoToPage();
    }
  }

  // Add action card pages if they exist
  if (template.actionCardImages && template.actionCardImages.length > 0) {
    for (const actionCardImage of template.actionCardImages) {
      doc.addPage();

      // Add logo to action card page
      addLogoToPage();

      // Load and add the action card image to fill the entire page
      const actionCardData = await getImageBase64(
        actionCardImage,
        rootToImages
      );
      if (actionCardData) {
        const actionCardProps = doc.getImageProperties(actionCardData);
        const pageWidth = doc.internal.pageSize.width;
        const pageHeight = doc.internal.pageSize.height;

        // Calculate dimensions to fit the image on the page with margins
        const margin = 20;
        const maxWidth = pageWidth - margin * 2;
        const maxHeight = pageHeight - margin * 2;

        const aspectRatio = actionCardProps.width / actionCardProps.height;
        let imageWidth = maxWidth;
        let imageHeight = maxWidth / aspectRatio;

        // If height exceeds max height, scale down by height instead
        if (imageHeight > maxHeight) {
          imageHeight = maxHeight;
          imageWidth = maxHeight * aspectRatio;
        }

        // Center the image on the page
        const imageX = (pageWidth - imageWidth) / 2;
        const imageY = (pageHeight - imageHeight) / 2;

        doc.addImage(
          actionCardData,
          "PNG",
          imageX,
          imageY,
          imageWidth,
          imageHeight
        );
      }
    }
  }

  // Add text-based extra pages if they exist
  if (template.extraPages && template.extraPages.length > 0) {
    for (const extraPage of template.extraPages) {
      doc.addPage();

      // Add logo to extra page
      addLogoToPage();

      const pageWidth = doc.internal.pageSize.width;
      const margin = 20;
      let currentY = 30;

      // Add main title
      doc.setFontSize(20);
      doc.setFont("helvetica", "bold");
      doc.text(extraPage.title, margin, currentY);
      currentY += 10;

      // Add underline for title
      doc.setLineWidth(0.5);
      doc.line(margin, currentY, pageWidth - margin, currentY);
      currentY += 15;

      // Add subtitle if it exists
      if (extraPage.subtitle) {
        doc.setFontSize(16);
        doc.setFont("helvetica", "bold");
        doc.text(extraPage.subtitle, margin, currentY);
        currentY += 12;
      }

      // Add items as bulleted list
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      const lineHeight = 8;
      const bulletX = margin + 5;
      const textX = margin + 12;

      for (const item of extraPage.items) {
        // Check if we need a new page
        if (currentY > 260) {
          doc.addPage();
          addLogoToPage();
          currentY = 30;
        }

        // Add bullet point
        doc.circle(bulletX, currentY - 2, 1.5, "F");
        // Add text (split if too long)
        const maxWidth = pageWidth - textX - margin;
        const lines = doc.splitTextToSize(item, maxWidth);
        doc.text(lines, textX, currentY);
        currentY += lines.length * lineHeight + 3;
      }
    }
  }

  // Return a buffer, just like boardToPdf
  return Buffer.from(doc.output("arraybuffer"));
}
