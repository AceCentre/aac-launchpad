import { jsPDF } from "jspdf";
import { PDFDocument } from "pdf-lib";
import { GuideTemplate, GuideSection } from "types";
import fs from "fs";
import path from "path";
import sharp from "sharp";

/** Longest edge in pixels for embedded bitmaps (~2× needed print size at table cell scale). */
const PDF_IMG_MAX_TABLE_CELL = 320;
/** Title / hero image on guide (drawn ~80mm tall). */
const PDF_IMG_MAX_MAIN = 640;
/** Full-page action card (~170×250mm drawable). */
const PDF_IMG_MAX_ACTION_CARD = 1400;
/** Footer logo (drawn ~48mm wide). */
const PDF_IMG_MAX_LOGO = 200;

type EmbeddedImage = { dataUri: string; format: "PNG" | "JPEG" };

// Sanitise text so it only contains characters in jsPDF's WinAnsi charset.
function sanitiseText(text: string): string {
  return text
    .replace(/\u2011/g, "-") // non-breaking hyphen → hyphen
    .replace(/\u2013/g, "-") // en-dash → hyphen
    .replace(/\u2014/g, "-") // em-dash → hyphen
    .replace(/\u2018/g, "'") // left single quote → apostrophe
    .replace(/\u2019/g, "'") // right single quote → apostrophe
    .replace(/\u201C/g, '"') // left double quote → straight quote
    .replace(/\u201D/g, '"'); // right double quote → straight quote
}

/**
 * Load and downscale an image for PDF embedding so we don't store multi‑megapixel
 * PNGs at thumbnail size (major file size win for merged activity-book PDFs).
 */
async function getImageForPdf(
  imgPath: string,
  rootToImages: string,
  maxEdgePx: number,
): Promise<EmbeddedImage | undefined> {
  try {
    const absPath = path.isAbsolute(imgPath)
      ? imgPath
      : path.join(rootToImages, imgPath);
    console.log("Trying to load image:", absPath);
    if (!fs.existsSync(absPath)) {
      console.warn(`Warning: Could not load image at ${imgPath}`);
      return undefined;
    }

    const input = fs.readFileSync(absPath);
    const meta = await sharp(input).metadata();

    const pipeline = sharp(input).rotate().resize({
      width: maxEdgePx,
      height: maxEdgePx,
      fit: "inside",
      withoutEnlargement: true,
    });

    let buffer: Buffer;
    let format: "PNG" | "JPEG";
    if (meta.hasAlpha) {
      buffer = await pipeline.png({ compressionLevel: 9 }).toBuffer();
      format = "PNG";
    } else {
      buffer = await pipeline.jpeg({ quality: 88, mozjpeg: true }).toBuffer();
      format = "JPEG";
    }

    const mime = format === "PNG" ? "image/png" : "image/jpeg";
    return {
      dataUri: `data:${mime};base64,${buffer.toString("base64")}`,
      format,
    };
  } catch (e) {
    console.warn(`Warning: Could not load image at ${imgPath}`);
    return undefined;
  }
}

// Table layout for "WHAT YOU'LL NEED TO PLAY" section
// Used for all guides; certain text content is currently only defined

async function renderWhatYouNeedTable(params: {
  doc: jsPDF;
  template: GuideTemplate;
  section: GuideSection;
  startY: number;
  rootToImages: string;
}): Promise<number> {
  const { doc, template, section, startY, rootToImages } = params;
  const pageWidth = doc.internal.pageSize.width;

  const marginX = 10;
  const tableWidth = pageWidth - marginX * 2;

  // 3 columns – image / text / badge or image
  const col1Width = tableWidth * 0.25;
  const col2Width = tableWidth * 0.5;
  const col3Width = tableWidth * 0.25;

  const headerHeight = 10;
  const rowHeight = 45;
  const tableHeight = headerHeight + rowHeight * 2;

  const topY = startY;

  const tableLineGrey = [219, 219, 219] as const;
  doc.setDrawColor(...tableLineGrey);
  doc.setLineWidth(0.5);

  // Outer border
  doc.rect(marginX, topY, tableWidth, tableHeight);

  // Horizontal lines (header + between rows)
  const headerBottomY = topY + headerHeight;
  const row1BottomY = headerBottomY + rowHeight;
  doc.line(marginX, headerBottomY, marginX + tableWidth, headerBottomY);
  doc.line(marginX, row1BottomY, marginX + tableWidth, row1BottomY);

  // Vertical lines (between columns) – start *below* header so header looks like one merged cell
  const col1RightX = marginX + col1Width;
  const col2RightX = marginX + col1Width + col2Width;
  doc.line(col1RightX, headerBottomY, col1RightX, topY + tableHeight);
  doc.line(col2RightX, headerBottomY, col2RightX, topY + tableHeight);

  doc.setDrawColor(0, 0, 0);

  // Header text centered
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  const headerText = "WHAT YOU'LL NEED TO PLAY:";
  doc.text(headerText, pageWidth / 2, topY + headerHeight - 4, {
    align: "center",
  });

  // Common values for cells
  const cellPadding = 3;

  // -------- Row 1: switches + optional text + badge --------
  const row1TopY = headerBottomY;

  // Left image cell (main switch image)
  const leftImagePath =
    section.image && section.image.trim().length > 0
      ? section.image
      : "activity-book/switches/BIGmack.png";
  if (leftImagePath) {
    const embedded = await getImageForPdf(
      leftImagePath,
      rootToImages,
      PDF_IMG_MAX_TABLE_CELL,
    );
    if (embedded) {
      const imgProps = doc.getImageProperties(embedded.dataUri);
      const maxWidth = col1Width - cellPadding * 2;
      const maxHeight = rowHeight - cellPadding * 2;
      let drawWidth = maxWidth;
      let drawHeight = (imgProps.height / imgProps.width) * drawWidth;
      if (drawHeight > maxHeight) {
        drawHeight = maxHeight;
        drawWidth = (imgProps.width / imgProps.height) * drawHeight;
      }
      const imgX = marginX + (col1Width - drawWidth) / 2;
      const imgY = row1TopY + (rowHeight - drawHeight) / 2;
      doc.addImage(
        embedded.dataUri,
        embedded.format,
        imgX,
        imgY,
        drawWidth,
        drawHeight,
      );
    }
  }

  // Middle text cell – switches description (driven by middleText1 when present)
  if (section.middleText1) {
    const row1TextX = marginX + col1Width + cellPadding;
    const row1TextMaxWidth = col2Width - cellPadding * 2;
    let currentY = row1TopY + 8;

    let mt1Text = sanitiseText(section.middleText1);

    const isBoldLine = (lower: string) =>
      lower.includes("two switches") ||
      lower.startsWith("a switch") ||
      lower.startsWith("record") ||
      lower.includes("appliance controller") ||
      lower.includes("a single or multi-message switch") ||
      lower.includes("two single or multi-message switches");

    /** e.g. "<b>a\\nb</b>\\nc" → bold a,b then normal c (not whole block bold). */
    const trailingBoldThenNormal = mt1Text.match(
      /^<b>([\s\S]*?)<\/b>\s*([\s\S]*)$/,
    );

    const emitMiddleLines = (
      lines: string[],
      fixedBold: boolean | undefined,
    ) => {
      const trimmed = lines.map((l) => l.trimEnd());
      const hasPattern =
        fixedBold === undefined &&
        trimmed.some((l) => l && isBoldLine(l.toLowerCase()));
      for (const line of trimmed) {
        if (!line) continue;
        const lower = line.toLowerCase();
        const shouldBold =
          fixedBold === true
            ? true
            : fixedBold === false
              ? isBoldLine(lower)
              : isBoldLine(lower) || !hasPattern;
        doc.setFontSize(12);
        doc.setFont("helvetica", shouldBold ? "bold" : "normal");
        const wrapped = doc.splitTextToSize(line, row1TextMaxWidth);
        doc.text(wrapped, row1TextX, currentY);
        currentY += wrapped.length * 5.5;
      }
    };

    if (trailingBoldThenNormal) {
      emitMiddleLines(trailingBoldThenNormal[1].split("\n"), true);
      emitMiddleLines(trailingBoldThenNormal[2].split("\n"), false);
    } else {
      let working = mt1Text;
      const forceAllBold = working.includes("<b>");
      if (forceAllBold) {
        working = working.replace(/<\/?b>/g, "");
      }
      const rawLines = working.split("\n").map((l) => l.trimEnd());
      const hasPattern = rawLines.some(
        (line) => line && isBoldLine(line.toLowerCase()),
      );
      for (const line of rawLines) {
        if (!line) continue;
        const lower = line.toLowerCase();
        const shouldBold = forceAllBold || isBoldLine(lower) || !hasPattern;
        doc.setFontSize(12);
        doc.setFont("helvetica", shouldBold ? "bold" : "normal");
        const wrapped = doc.splitTextToSize(line, row1TextMaxWidth);
        doc.text(wrapped, row1TextX, currentY);
        currentY += wrapped.length * 5.5;
      }
    }

    doc.setFont("helvetica", "normal");
  }

  // Right badge cell – gear-specific circle + text
  const badgeCenterX = marginX + col1Width + col2Width + col3Width / 2;
  const badgeCenterY = row1TopY + rowHeight / 2;
  const badgeRadius = 20;

  const hexToRgb = (hex: string): [number, number, number] => {
    const normalized = hex.trim().replace(/^#/, "");
    const r = parseInt(normalized.slice(0, 2), 16);
    const g = parseInt(normalized.slice(2, 4), 16);
    const b = parseInt(normalized.slice(4, 6), 16);
    return [r, g, b];
  };

  const gear = template.gear ?? 0;
  const badgeConfig =
    gear === 1
      ? {
          text: "Look at page 2 for my ONE switch set-up.",
          color: "#74a976",
        }
      : gear === 2
      ? {
          text: "move the switch to different body parts.",
          color: "#f1c867",
        }
      : gear >= 3 && gear <= 5
      ? {
          text: "Look at page 2 for my two switch set-up.",
          color: "#87a3c7",
        }
      : {
          text: "Look at page 2 for my two switch set-up.",
          color: "#87a3c7",
        };

  const [badgeR, badgeG, badgeB] = hexToRgb(badgeConfig.color);
  doc.setFillColor(badgeR, badgeG, badgeB);
  doc.circle(badgeCenterX, badgeCenterY, badgeRadius, "F");

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");

  const badgeLines = doc.splitTextToSize(
    sanitiseText(badgeConfig.text),
    badgeRadius * 1.7,
  );
  const lineHeight = 5;
  const badgeStartY =
    badgeCenterY - ((badgeLines.length - 1) * lineHeight) / 2 + lineHeight / 2;
  badgeLines.forEach((line: string, index: number) => {
    doc.text(line, badgeCenterX, badgeStartY + index * lineHeight, {
      align: "center",
    });
  });

  // -------- Row 2: controller/ingredients (where defined) --------
  const row2TopY = row1BottomY;

  // Left image cell – third image if available
  if (template.thirdImage) {
    const embedded = await getImageForPdf(
      template.thirdImage,
      rootToImages,
      PDF_IMG_MAX_TABLE_CELL,
    );
    if (embedded) {
      const thirdProps = doc.getImageProperties(embedded.dataUri);
      const maxWidth = col1Width - cellPadding * 2;
      const maxHeight = rowHeight - cellPadding * 2;
      let drawWidth = maxWidth;
      let drawHeight = (thirdProps.height / thirdProps.width) * drawWidth;
      if (drawHeight > maxHeight) {
        drawHeight = maxHeight;
        drawWidth = (thirdProps.width / thirdProps.height) * drawHeight;
      }
      const imgX = marginX + (col1Width - drawWidth) / 2;
      const imgY = row2TopY + (rowHeight - drawHeight) / 2;
      doc.addImage(
        embedded.dataUri,
        embedded.format,
        imgX,
        imgY,
        drawWidth,
        drawHeight,
      );
    }
  }

  // Middle text cell – list of equipment (driven by middleText2 when present)
  if (section.middleText2) {
    const row2TextX = marginX + col1Width + cellPadding;
    const row2MaxWidth = col2Width - cellPadding * 2;

    // Strip <b> tags and check if the text was wrapped in them
    let row2Text = sanitiseText(section.middleText2);
    const forceBold = row2Text.includes("<b>");
    if (forceBold) {
      row2Text = row2Text.replace(/<\/?b>/g, "");
    }

    doc.setFontSize(12);
    doc.setFont("helvetica", forceBold ? "bold" : "normal");
    const row2Lines = doc.splitTextToSize(row2Text, row2MaxWidth);
    const row2TextY = row2TopY + 8;
    doc.text(row2Lines, row2TextX, row2TextY);
    doc.setFont("helvetica", "normal");
  }

  // Right image cell – fourth image if available
  if (template.fourthImage) {
    const embedded = await getImageForPdf(
      template.fourthImage,
      rootToImages,
      PDF_IMG_MAX_TABLE_CELL,
    );
    if (embedded) {
      const fourthProps = doc.getImageProperties(embedded.dataUri);
      const maxWidth = col3Width - cellPadding * 2;
      const maxHeight = rowHeight - cellPadding * 2;
      let drawWidth = maxWidth;
      let drawHeight = (fourthProps.height / fourthProps.width) * drawWidth;
      if (drawHeight > maxHeight) {
        drawHeight = maxHeight;
        drawWidth = (fourthProps.width / fourthProps.height) * drawHeight;
      }
      const imgX = col2RightX + (col3Width - drawWidth) / 2;
      const imgY = row2TopY + (rowHeight - drawHeight) / 2;
      doc.addImage(
        embedded.dataUri,
        embedded.format,
        imgX,
        imgY,
        drawWidth,
        drawHeight,
      );
    }
  }

  // Leave some space below the table before the next content
  return topY + tableHeight + 10;
}

export async function guideToPdf(
  template: GuideTemplate,
  options: { rootToImages?: string } = {},
): Promise<Buffer> {
  const rootToImages =
    options.rootToImages ||
    path.resolve(__dirname, "../../../apps/backend/public");
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;

  // Function to add logo to current page
  const addLogoToPage = async () => {
    try {
      const logoPath = path.join(
        rootToImages,
        "activity-book",
        "activity-book-logo.png",
      );

      const logoWidth = 48;
      const logoX = 10; // Left aligned
      const logoY = 280; // Near bottom of page

      let logoHeight = 0;
      let textX = logoX + logoWidth + 9;
      let textY = logoY + logoHeight / 2 + 2;

      if (fs.existsSync(logoPath)) {
        const embedded = await getImageForPdf(
          path.join("activity-book", "activity-book-logo.png"),
          rootToImages,
          PDF_IMG_MAX_LOGO,
        );
        if (embedded) {
          const logoProps = doc.getImageProperties(embedded.dataUri);
          logoHeight = (logoWidth * logoProps.height) / logoProps.width;
          doc.addImage(
            embedded.dataUri,
            embedded.format,
            logoX,
            logoY,
            logoWidth,
            logoHeight,
          );
        }

        // Add accompanying text to the right of the logo
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(120, 120, 120);
        // Center vertically with the image
        textY = logoY + logoHeight / 2 + 2;
        doc.text(
          "For more information visit functionalswitching.com",
          textX,
          textY,
        );

        // Reset text color
        doc.setTextColor(0, 0, 0);
      }

      // Always add the footer text even if the logo image is missing
      if (!fs.existsSync(logoPath)) {
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(120, 120, 120);
        doc.text(
          "For more information visit functionalswitching.com",
          10,
          280 + 5,
        );
        doc.setTextColor(0, 0, 0);
      }
    } catch (error) {
      console.warn("Could not add logo to page:", error);
    }
  };

  // Gear text at very top, left aligned
  const gearY = 8;
  if (template.gear) {
    let gearText: string;
    switch (template.gear) {
      case 1:
        gearText = "First Gear: Existing movements";
        break;
      case 2:
        gearText = "Second Gear: New Movements";
        break;
      case 3:
        gearText = "Third Gear: Two Switches";
        break;
      case 4:
        gearText = "Fourth Gear: Build or Scan Failure Free";
        break;
      case 5:
        gearText = "Fifth Gear: Scanning with Purpose";
        break;
      default:
        gearText = `Gear ${template.gear}`;
    }

    const gearFontSize = 11;
    doc.setFontSize(gearFontSize);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(0, 0, 0);
    doc.text(gearText, 10, gearY, {
      align: "left",
    });
    // Reset to default font and color
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);
  }

  // Title - centered, placed below gear text
  const titleY = 20;
  doc.setFontSize(28);
  doc.text(template.title, pageWidth / 2, titleY, {
    align: "center",
  });

  // Add logo to first page
  await addLogoToPage();

  // (Old horizontal layout helper removed – "WHAT YOU'LL NEED TO PLAY" now
  // uses the table layout defined in renderWhatYouNeedTable for all guides.)

  // Main image
  let y = 75; // default if no main image
  if (template.mainImage && typeof template.mainImage === "string") {
    const embedded = await getImageForPdf(
      template.mainImage,
      rootToImages,
      PDF_IMG_MAX_MAIN,
    );
    if (embedded) {
      const imgProps = doc.getImageProperties(embedded.dataUri);
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
      doc.addImage(
        embedded.dataUri,
        embedded.format,
        imgX,
        23,
        desiredWidth,
        desiredHeight,
      );
      y = Math.max(y, 25 + desiredHeight + 10); // set y below the image, with 10 units padding
    }
  }

  for (let i = 0; i < template.sections.length; i++) {
    const section = template.sections[i];

    // Table layout for any "WHAT YOU'LL NEED TO PLAY" section
    const trimmedHeading = (section.heading || "").trim();
    if (
      trimmedHeading === "WHAT YOU'LL NEED TO PLAY" ||
      trimmedHeading === "WHAT YOU'LL NEED TO PLAY THIS GAME"
    ) {
      y = await renderWhatYouNeedTable({
        doc,
        template,
        section,
        startY: y,
        rootToImages,
      });
      continue;
    }

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
      if (section.heading === "WHAT YOU'LL NEED TO PLAY") {
        // Center text for "WHAT YOU'LL NEED TO PLAY" in non-custom layouts
        doc.text(
          doc.splitTextToSize(sanitiseText(section.body), 120),
          pageWidth / 2,
          y,
          { align: "center" },
        );
        y += 15;
      } else if (section.heading === "HOW TO PLAY") {
        // Render HOW TO PLAY using the numbering already present in the text
        const lines = sanitiseText(section.body)
          .split("\n")
          .filter((l) => l.trim() !== "");
        const maxWidth = 180;
        let currentY = y;
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");

        lines.forEach((raw) => {
          const cleaned = raw.replace(/^•\s*/, "").trimEnd();
          if (!cleaned) return;
          const wrapped = doc.splitTextToSize(cleaned, maxWidth);
          doc.text(wrapped, 20, currentY, {
            align: "left",
          });
          currentY += wrapped.length * 6 + 2;
        });

        y = currentY + 5;
      } else {
        // Default: left-aligned paragraph text
        const textWidth = 120;
        doc.text(
          doc.splitTextToSize(sanitiseText(section.body), textWidth),
          20,
          y,
          { align: "left" },
        );
        y += 15;
      }
    } else {
      y += 15;
    }

    // (Previous horizontal layout for "WHAT YOU'LL NEED TO PLAY" has been
    // replaced by the table layout above for all guides.)

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
      await addLogoToPage();
    }
  }

  // Add action card pages if they exist (skipped when actionCardPdf supplies a combined PDF)
  if (
    template.actionCardImages &&
    template.actionCardImages.length > 0 &&
    !template.actionCardPdf
  ) {
    for (const actionCardImage of template.actionCardImages) {
      doc.addPage();

      // Add logo to action card page
      await addLogoToPage();

      // Load and add the action card image to fill the entire page
      const actionEmbedded = await getImageForPdf(
        actionCardImage,
        rootToImages,
        PDF_IMG_MAX_ACTION_CARD,
      );
      if (actionEmbedded) {
        const actionCardProps = doc.getImageProperties(actionEmbedded.dataUri);
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
          actionEmbedded.dataUri,
          actionEmbedded.format,
          imageX,
          imageY,
          imageWidth,
          imageHeight,
        );
      }
    }
  }

  // Add text-based extra pages if they exist
  if (template.extraPages && template.extraPages.length > 0) {
    for (const extraPage of template.extraPages) {
      doc.addPage();

      // Add logo to extra page
      await addLogoToPage();

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
      const lineHeight = template.extraPagesLineHeight ?? 8;
      const itemGap = template.extraPagesItemGap ?? 3;
      const bulletX = margin + 5;
      const textX = margin + 12;

      for (const item of extraPage.items) {
        // Check if we need a new page
        if (currentY > 260) {
          doc.addPage();
          await addLogoToPage();
          currentY = 30;
        }

        // Add bullet point
        doc.circle(bulletX, currentY - 2, 1.5, "F");
        // Add text (split if too long)
        const maxWidth = pageWidth - textX - margin;
        const lines = doc.splitTextToSize(item, maxWidth);
        doc.text(lines, textX, currentY);
        currentY += lines.length * lineHeight + itemGap;
      }
    }
  }

  let buffer = Buffer.from(doc.output("arraybuffer"));

  if (template.actionCardPdf) {
    const pdfPath = path.isAbsolute(template.actionCardPdf)
      ? template.actionCardPdf
      : path.join(rootToImages, template.actionCardPdf);
    if (fs.existsSync(pdfPath)) {
      const mainPdf = await PDFDocument.load(new Uint8Array(buffer));
      const actionPdf = await PDFDocument.load(
        new Uint8Array(fs.readFileSync(pdfPath)),
      );
      const copied = await mainPdf.copyPages(
        actionPdf,
        actionPdf.getPageIndices(),
      );
      copied.forEach((page) => mainPdf.addPage(page));
      buffer = Buffer.from(await mainPdf.save());
    } else {
      console.warn(`Warning: actionCardPdf not found at ${pdfPath}`);
    }
  }

  return buffer;
}
