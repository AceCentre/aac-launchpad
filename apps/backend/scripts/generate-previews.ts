/**
 * Script to generate PDF preview images for all activity book guides
 *
 * Run this script whenever guides are updated:
 * npm run generate-previews
 *
 * Or: ts-node scripts/generate-previews.ts
 */

import { GUIDE_TEMPLATES } from "templates";
import { guideToPdf } from "board-to-pdf";
import path from "path";
import fs from "fs";
import { execSync } from "child_process";

// You'll need to install pdf2pic: npm install pdf2pic
// And GraphicsMagick: brew install graphicsmagick (macOS) or apt-get install graphicsmagick (Linux)
const pdf2pic = require("pdf2pic");

// Check if GraphicsMagick is installed
function checkGraphicsMagick() {
  try {
    execSync("gm version", { stdio: "ignore" });
    return true;
  } catch (error) {
    console.error(
      "\n❌ GraphicsMagick not found! Please install it:\n" +
        "   macOS: brew install graphicsmagick\n" +
        "   Linux: sudo apt-get install graphicsmagick\n"
    );
    return false;
  }
}

// Check if Ghostscript is installed (required for PDF reading)
function checkGhostscript() {
  try {
    execSync("gs --version", { stdio: "ignore" });
    return true;
  } catch (error) {
    console.error(
      "\n❌ Ghostscript not found! GraphicsMagick needs Ghostscript to read PDF files.\n" +
        "   Please install it:\n" +
        "   macOS: brew install ghostscript\n" +
        "   Linux: sudo apt-get install ghostscript\n"
    );
    return false;
  }
}

const PREVIEWS_DIR = path.join(__dirname, "../public/activity-book/previews");
const BOARDS_DIR = path.join(__dirname, "../public/boards");

// Ensure previews directory exists
if (!fs.existsSync(PREVIEWS_DIR)) {
  fs.mkdirSync(PREVIEWS_DIR, { recursive: true });
}

async function generatePreview(guide: any, index: number, total: number) {
  try {
    console.log(
      `[${index + 1}/${total}] Generating preview for: ${guide.title} (${
        guide.templateId
      })`
    );

    // Generate PDF
    const pdfBuffer = await guideToPdf(guide, {
      rootToImages: path.join(__dirname, "../public"),
    });

    // Ensure boards directory exists
    if (!fs.existsSync(BOARDS_DIR)) {
      fs.mkdirSync(BOARDS_DIR, { recursive: true });
    }

    // Save PDF temporarily
    const tempPdfPath = path.join(BOARDS_DIR, `temp-${guide.templateId}.pdf`);
    fs.writeFileSync(tempPdfPath, pdfBuffer as any);

    // Verify PDF was created
    if (!fs.existsSync(tempPdfPath)) {
      throw new Error("PDF file was not created");
    }

    const pdfStats = fs.statSync(tempPdfPath);
    if (pdfStats.size === 0) {
      throw new Error("PDF file is empty");
    }
    console.log(`  📄 PDF generated: ${(pdfStats.size / 1024).toFixed(2)} KB`);

    // Convert first page to image
    const convert = pdf2pic.fromPath(tempPdfPath, {
      density: 150, // DPI for good quality
      saveFilename: guide.templateId,
      savePath: PREVIEWS_DIR,
      format: "png",
      width: 600, // Width in pixels
      height: 800, // Height in pixels
    });

    console.log(`  🔄 Converting PDF to image...`);

    const imagePath = path.join(PREVIEWS_DIR, `${guide.templateId}.png`);
    let success = false;
    let result: any = null;

    try {
      // Try pdf2pic with buffer response type
      result = await convert(1, { responseType: "buffer" });

      // Save the image buffer to file
      if (result && result.buffer) {
        const buffer = Buffer.isBuffer(result.buffer)
          ? result.buffer
          : Buffer.from(result.buffer as any);
        fs.writeFileSync(imagePath, buffer as any);
        if (fs.existsSync(imagePath)) {
          success = true;
        }
      }

      // Fallback: Check if file was saved automatically by pdf2pic
      if (!success) {
        const autoSavedPath = path.join(
          PREVIEWS_DIR,
          `${guide.templateId}.1.png`
        );
        if (fs.existsSync(autoSavedPath)) {
          // Rename to remove the .1 suffix
          fs.renameSync(autoSavedPath, imagePath);
          success = true;
        }
      }

      // Check if result has a path property
      if (!success && result?.path && fs.existsSync(result.path)) {
        // Copy to our expected location
        fs.copyFileSync(result.path, imagePath);
        success = true;
      }
    } catch (pdf2picError) {
      // pdf2pic failed, will try GraphicsMagick directly
      console.log(`  ⚠️  pdf2pic failed, trying GraphicsMagick directly...`);
    }

    // Last resort: Use GraphicsMagick directly via command line
    if (!success) {
      try {
        // Use gm convert directly: gm convert -density 150 -resize 600x800 input.pdf[0] output.png
        execSync(
          `gm convert -density 150 -resize 600x800 "${tempPdfPath}[0]" "${imagePath}"`,
          { stdio: "ignore" }
        );

        if (fs.existsSync(imagePath)) {
          success = true;
        }
      } catch (gmError) {
        // GraphicsMagick direct conversion also failed
        const errorMsg =
          gmError instanceof Error ? gmError.message : String(gmError);
        console.log(
          `  ⚠️  GraphicsMagick direct conversion failed: ${errorMsg}`
        );
        // Try to capture stderr for more details
        try {
          execSync(
            `gm convert -density 150 -resize 600x800 "${tempPdfPath}[0]" "${imagePath}" 2>&1`,
            { encoding: "utf8" }
          );
        } catch (detailedError: any) {
          if (detailedError.stderr) {
            console.log(
              `  📋 GraphicsMagick error details: ${detailedError.stderr}`
            );
          }
        }
      }
    }

    // Clean up temp PDF
    if (fs.existsSync(tempPdfPath)) {
      fs.unlinkSync(tempPdfPath);
    }

    if (success && fs.existsSync(imagePath)) {
      const imageStats = fs.statSync(imagePath);
      console.log(
        `  ✓ Preview saved: ${path.basename(imagePath)} (${(
          imageStats.size / 1024
        ).toFixed(2)} KB)`
      );
      return true;
    }

    console.error(`  ✗ Preview conversion failed. Result:`, {
      hasBuffer: !!result?.buffer,
      hasPath: !!result?.path,
      hasName: !!result?.name,
      size: result?.size,
      keys: result ? Object.keys(result) : [],
    });
    return false;
  } catch (error) {
    console.error(
      `  ✗ Error: ${error instanceof Error ? error.message : String(error)}`
    );
    if (error instanceof Error && error.stack) {
      console.error(
        `  📍 Stack trace:`,
        error.stack.split("\n").slice(0, 3).join("\n")
      );
    }
    return false;
  }
}

async function generateAllPreviews() {
  // Check GraphicsMagick and Ghostscript first
  if (!checkGraphicsMagick()) {
    process.exit(1);
  }
  if (!checkGhostscript()) {
    process.exit(1);
  }

  const total = GUIDE_TEMPLATES.length;
  console.log(`\n🚀 Generating previews for ${total} guides...\n`);
  console.log(`📁 Output directory: ${PREVIEWS_DIR}\n`);

  let successCount = 0;
  let failCount = 0;
  const failed: string[] = [];

  for (let i = 0; i < GUIDE_TEMPLATES.length; i++) {
    const guide = GUIDE_TEMPLATES[i];
    const success = await generatePreview(guide, i, total);
    if (success) {
      successCount++;
    } else {
      failCount++;
      failed.push(guide.templateId);
    }
  }

  console.log(`\n${"=".repeat(50)}`);
  console.log(`✅ Completed: ${successCount} successful, ${failCount} failed`);
  if (failed.length > 0) {
    console.log(`\n❌ Failed guides:`);
    failed.forEach((id) => console.log(`   - ${id}`));
  }
  console.log(`\n📁 Preview images saved to: ${PREVIEWS_DIR}`);
  console.log(`${"=".repeat(50)}\n`);
}

// Run the script
generateAllPreviews().catch((error) => {
  console.error("\n❌ Fatal error:", error);
  process.exit(1);
});
