import { guideToPdf } from "board-to-pdf/src/guide-to-pdf";
import { danceSelectorGuide } from "./dance-selector";
import fs from "fs";

async function main() {
  const pdfBuffer = await guideToPdf(danceSelectorGuide);
  fs.writeFileSync("dance-selector-guide.pdf", pdfBuffer);
}

main();
