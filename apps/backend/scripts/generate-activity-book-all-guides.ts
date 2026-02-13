/**
 * Script to generate the pre-stored "all guides" PDF for activity book bulk download.
 * This PDF contains all guides in GUIDE_TEMPLATES order, with no customization.
 *
 * Run whenever guides are added or updated:
 *   yarn --cwd apps/backend generate-all-guides
 *
 * Output: public/boards/activity-book-all-guides.pdf
 */

import { GUIDE_TEMPLATES } from "templates";
import { guideToPdf } from "board-to-pdf";
import path from "path";
import fs from "fs";
import { PDFDocument } from "pdf-lib";

const BOARDS_DIR = path.join(__dirname, "../public/boards");
const OUTPUT_FILE = "activity-book-all-guides.pdf";
const OUTPUT_PATH = path.join(BOARDS_DIR, OUTPUT_FILE);

async function main() {
  console.log(`Generating pre-stored PDF with ${GUIDE_TEMPLATES.length} guides...`);

  if (!fs.existsSync(BOARDS_DIR)) {
    fs.mkdirSync(BOARDS_DIR, { recursive: true });
  }

  const rootToImages = path.join(__dirname, "../public");
  const finalPdf = await PDFDocument.create();

  for (let i = 0; i < GUIDE_TEMPLATES.length; i++) {
    const guide = GUIDE_TEMPLATES[i];
    console.log(`  [${i + 1}/${GUIDE_TEMPLATES.length}] ${guide.title}`);

    const pdfBuffer = await guideToPdf(guide, { rootToImages });
    const guidePdf = await PDFDocument.load(pdfBuffer);
    const guidePages = await finalPdf.copyPages(
      guidePdf,
      guidePdf.getPageIndices()
    );
    guidePages.forEach((page) => finalPdf.addPage(page));
  }

  const finalPdfBytes = await finalPdf.save();
  fs.writeFileSync(OUTPUT_PATH, Buffer.from(finalPdfBytes));

  console.log(`\n✓ Saved ${OUTPUT_FILE} (${(finalPdfBytes.length / 1024 / 1024).toFixed(2)} MB)`);
}

main().catch((err) => {
  console.error("Error generating all-guides PDF:", err);
  process.exit(1);
});
