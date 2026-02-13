/**
 * Script to generate pre-stored "all guides" PDFs for activity book bulk download.
 * Generates:
 *   - activity-book-all-guides.pdf (default, no switch)
 *   - activity-book-all-guides-switch-{name}.pdf (one per switch image)
 *
 * Run whenever guides or switches are added/updated:
 *   yarn --cwd apps/backend generate-all-guides
 *
 * Output: public/boards/activity-book-all-guides*.pdf
 */

import { GUIDE_TEMPLATES } from "templates";
import { guideToPdf } from "board-to-pdf";
import path from "path";
import fs from "fs";
import { PDFDocument } from "pdf-lib";

const BOARDS_DIR = path.join(__dirname, "../public/boards");
const SWITCHES_DIR = path.join(__dirname, "../public/activity-book/switches");
const rootToImages = path.join(__dirname, "../public");

const DEFAULT_SWITCH = "BIGmack"; // Default PDF already uses this; skip generating a duplicate

function getSwitchPaths(): Array<{ path: string; name: string }> {
  const files = fs.readdirSync(SWITCHES_DIR);
  return files
    .filter(
      (f) =>
        (f.toLowerCase().endsWith(".png") ||
          f.toLowerCase().endsWith(".jpg") ||
          f.toLowerCase().endsWith(".jpeg")) &&
        path.basename(f, path.extname(f)) !== DEFAULT_SWITCH
    )
    .map((file) => ({
      path: `activity-book/switches/${file}`,
      name: path.basename(file, path.extname(file)),
    }));
}

async function generateAllGuidesPdf(switchPath?: string): Promise<Buffer> {
  const finalPdf = await PDFDocument.create();

  for (let i = 0; i < GUIDE_TEMPLATES.length; i++) {
    const guide = GUIDE_TEMPLATES[i];
    const modifiedGuide = switchPath
      ? {
          ...guide,
          sections: guide.sections.map((section) => ({
            ...section,
            image:
              section.image && section.image.includes("set-switches")
                ? section.image
                : section.image
                ? switchPath
                : section.image,
          })),
        }
      : guide;

    const pdfBuffer = await guideToPdf(modifiedGuide, { rootToImages });
    const guidePdf = await PDFDocument.load(pdfBuffer);
    const guidePages = await finalPdf.copyPages(
      guidePdf,
      guidePdf.getPageIndices()
    );
    guidePages.forEach((page) => finalPdf.addPage(page));
  }

  return Buffer.from(await finalPdf.save());
}

async function main() {
  if (!fs.existsSync(BOARDS_DIR)) {
    fs.mkdirSync(BOARDS_DIR, { recursive: true });
  }

  const switches = getSwitchPaths();
  console.log(`Found ${switches.length} switch images\n`);

  // 1. Default (no switch)
  console.log("Generating default (no switch)...");
  const defaultBuffer = await generateAllGuidesPdf();
  const defaultPath = path.join(BOARDS_DIR, "activity-book-all-guides.pdf");
  fs.writeFileSync(defaultPath, defaultBuffer);
  console.log(
    `  ✓ activity-book-all-guides.pdf (${(defaultBuffer.length / 1024 / 1024).toFixed(2)} MB)\n`
  );

  // 2. One per switch
  for (const sw of switches) {
    console.log(`Generating with switch: ${sw.name}...`);
    const buffer = await generateAllGuidesPdf(sw.path);
    const outPath = path.join(
      BOARDS_DIR,
      `activity-book-all-guides-switch-${sw.name}.pdf`
    );
    fs.writeFileSync(outPath, buffer);
    console.log(
      `  ✓ activity-book-all-guides-switch-${sw.name}.pdf (${(buffer.length / 1024 / 1024).toFixed(2)} MB)\n`
    );
  }

  console.log(`Done. Generated ${1 + switches.length} PDFs.`);
}

main().catch((err) => {
  console.error("Error generating all-guides PDFs:", err);
  process.exit(1);
});
