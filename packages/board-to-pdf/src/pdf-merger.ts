import { PDFDocument } from "pdf-lib";
import fs from "fs";
import path from "path";

export async function mergePDFs(
  coverPageBuffer: Buffer,
  activityBookBuffer: Buffer
): Promise<Buffer> {
  try {
    // Create a new PDF document
    const mergedPdf = await PDFDocument.create();

    // Load the cover page PDF
    const coverPdf = await PDFDocument.load(coverPageBuffer);

    // Load the activity book PDF
    const activityPdf = await PDFDocument.load(activityBookBuffer);

    // Copy all pages from the cover page
    const coverPages = await mergedPdf.copyPages(
      coverPdf,
      coverPdf.getPageIndices()
    );

    // Copy all pages from the activity book
    const activityPages = await mergedPdf.copyPages(
      activityPdf,
      activityPdf.getPageIndices()
    );

    // Add cover pages first
    coverPages.forEach((page) => mergedPdf.addPage(page));

    // Add activity book pages
    activityPages.forEach((page) => mergedPdf.addPage(page));

    // Save the merged PDF
    const mergedPdfBytes = await mergedPdf.save();
    return Buffer.from(mergedPdfBytes);
  } catch (error) {
    console.error("Error merging PDFs:", error);
    throw new Error(
      `Failed to merge PDFs: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

export async function convertDocxToPdf(docxBuffer: Buffer): Promise<Buffer> {
  // For now, we'll use a simple approach: save the docx and let the user convert it
  // In a production environment, you might want to use:
  // - libreoffice-convert (requires LibreOffice installation)
  // - pandoc (requires pandoc installation)
  // - A cloud service like Google Docs API or Microsoft Graph API

  // For this implementation, we'll return the docx buffer
  // and handle the conversion in the main function
  return docxBuffer;
}
