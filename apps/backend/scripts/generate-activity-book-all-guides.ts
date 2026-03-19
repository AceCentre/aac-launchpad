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
import crypto from "crypto";

const BOARDS_DIR = path.join(__dirname, "../public/boards");
const SWITCHES_DIR = path.join(__dirname, "../public/activity-book/switches");
const rootToImages = path.join(__dirname, "../public");

const DEFAULT_SWITCH = "BIGmack"; // Default PDF already uses this; skip generating a duplicate

function computeAllGuidesCacheVersion(): string {
  try {
    const hash = crypto.createHash("sha256");
    hash.update(JSON.stringify(GUIDE_TEMPLATES));

    // Match backend cache-busting: include renderer package version + entrypoint bytes
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const boardToPdfPkg = require("board-to-pdf/package.json");
    hash.update(String(boardToPdfPkg?.version ?? ""));

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const entryPath = require.resolve("board-to-pdf");
    if (entryPath && fs.existsSync(entryPath)) {
      hash.update(fs.readFileSync(entryPath) as unknown as Uint8Array);
    }

    return hash.digest("hex").slice(0, 10);
  } catch (e) {
    console.warn("Failed to compute all-guides cache version:", e);
    return "fallback";
  }
}

function getSwitchPaths(): Array<{ path: string; name: string }> {
  const files = fs.readdirSync(SWITCHES_DIR);
  return files
    .filter(
      (f) =>
        (f.toLowerCase().endsWith(".png") ||
          f.toLowerCase().endsWith(".jpg") ||
          f.toLowerCase().endsWith(".jpeg")) &&
        path.basename(f, path.extname(f)) !== DEFAULT_SWITCH,
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
    const guidePdf = await PDFDocument.load(pdfBuffer as unknown as Uint8Array);
    const guidePages = await finalPdf.copyPages(
      guidePdf,
      guidePdf.getPageIndices(),
    );
    guidePages.forEach((page) => finalPdf.addPage(page));
  }

  return Buffer.from(await finalPdf.save());
}

async function main() {
  if (!fs.existsSync(BOARDS_DIR)) {
    fs.mkdirSync(BOARDS_DIR, { recursive: true });
  }

  const cacheVersion = computeAllGuidesCacheVersion();
  console.log(`Cache version: ${cacheVersion}\n`);

  const switches = getSwitchPaths();
  console.log(`Found ${switches.length} switch images\n`);

  // 1. Default (no switch)
  console.log("Generating default (no switch)...");
  const defaultBuffer = await generateAllGuidesPdf();
  const defaultPath = path.join(
    BOARDS_DIR,
    `activity-book-all-guides-${cacheVersion}.pdf`,
  );
  fs.writeFileSync(defaultPath, defaultBuffer as unknown as Uint8Array);
  console.log(
    `  ✓ activity-book-all-guides-${cacheVersion}.pdf (${(
      defaultBuffer.length /
      1024 /
      1024
    ).toFixed(2)} MB)\n`,
  );

  // 2. One per switch
  for (const sw of switches) {
    console.log(`Generating with switch: ${sw.name}...`);
    const buffer = await generateAllGuidesPdf(sw.path);
    const outPath = path.join(
      BOARDS_DIR,
      `activity-book-all-guides-${cacheVersion}-switch-${sw.name}.pdf`,
    );
    fs.writeFileSync(outPath, buffer as unknown as Uint8Array);
    console.log(
      `  ✓ activity-book-all-guides-${cacheVersion}-switch-${sw.name}.pdf (${(
        buffer.length /
        1024 /
        1024
      ).toFixed(2)} MB)\n`,
    );
  }

  console.log(`Done. Generated ${1 + switches.length} PDFs.`);
}

main().catch((err) => {
  console.error("Error generating all-guides PDFs:", err);
  process.exit(1);
});
