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
  const rootToImages = path.resolve(__dirname, "../../../apps/backend/public");
  const doc = new jsPDF();

  // Title
  doc.setFontSize(28);
  doc.text(template.title, 15, 25);

  // Badge
  if (template.badgeText) {
    doc.setFillColor(0, 102, 204);
    doc.circle(180, 20, 15, "F");
    doc.setTextColor(255, 255, 0);
    doc.setFontSize(16);
    doc.text(
      template.badgeText,
      180, // x center of circle
      20, // y center of circle
      { align: "center", baseline: "middle" }
    );
    doc.setTextColor(0, 0, 0);
  }

  // Main image
  let y = 80; // default if no main image
  if (template.mainImage && typeof template.mainImage === "string") {
    const imgData = await getImageBase64(template.mainImage, rootToImages);
    if (imgData) {
      const imgProps = doc.getImageProperties(imgData);
      const desiredHeight = 80;
      const aspectRatio = imgProps.width / imgProps.height;
      const desiredWidth = desiredHeight * aspectRatio;
      doc.addImage(imgData, "PNG", 60, 30, desiredWidth, desiredHeight);
      y = Math.max(y, 30 + desiredHeight + 10); // set y below the image, with 10 units padding
    }
  }

  for (const section of template.sections) {
    if (section.heading) {
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text(section.heading, 15, y);
      y += 8;
    }
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(doc.splitTextToSize(section.body, 120), 15, y);
    y += 15;

    if (section.image && typeof section.image === "string") {
      const imgData = await getImageBase64(section.image, rootToImages);
      if (imgData) {
        doc.addImage(imgData, "PNG", 15, y, 40, 30);
        y += 25;
      }
    }
    y += 5;
    if (y > 260) {
      doc.addPage();
      y = 20;
    }
  }

  // Return a buffer, just like boardToPdf
  return Buffer.from(doc.output("arraybuffer"));
}
