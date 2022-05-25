import boardToPdf from "board-to-pdf";
import { mkdirSync, readdirSync, readFileSync, rmSync } from "fs";
import path from "path";
import { Board } from "types";
import { fromBuffer } from "pdf2pic";

export const generateTestScreenshots = async () => {
  console.log();
  console.log("Beginning test screenshot generation...");

  const currentDir = process.cwd().split("/").pop();

  if (currentDir !== "aac-launchpad") {
    console.log();
    console.log(
      "⛔️ You must be in the aac-launchpad directory to run this command ⛔️"
    );
    console.log();
    return;
  }

  const screenshotFolder = path.join(
    process.cwd(),
    "./packages/board-to-pdf/tests/screenshots"
  );
  const boardsFolder = path.join(
    process.cwd(),
    "./packages/board-to-pdf/tests/boards"
  );
  const imagesFolder = path.join(
    process.cwd(),
    "./packages/board-to-pdf/tests/images"
  );

  try {
    rmSync(screenshotFolder, { recursive: true });
    console.log();

    console.log("1. Removing old screenshots");
  } catch (error: any) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }

  mkdirSync(screenshotFolder);
  console.log("2. Creating new screenshots folder");

  const boards = readdirSync(boardsFolder);
  console.log("3. Generating screenshots for boards");

  let count = 0;
  for (const boardName of boards) {
    count++;
    const rawBoard: Board = JSON.parse(
      readFileSync(path.join(boardsFolder, boardName)).toString()
    );

    const pdf = await boardToPdf(rawBoard, { rootToImages: imagesFolder });

    const output = Buffer.from(pdf.output("arraybuffer"));

    const prep = fromBuffer(output, {
      density: 500,
      saveFilename: rawBoard.id,
      savePath: screenshotFolder,
      format: "png",
      width: 3508,
      height: 2480,
    });

    if (prep.bulk === undefined) {
      throw new Error(`Failed to get screenshot for: ${rawBoard.id}`);
    }

    let pages = [];
    let noOfPages = pdf.getNumberOfPages();
    for (let i = 1; i <= noOfPages; i++) {
      pages.push(i);
    }

    await prep.bulk(pages, false);

    console.log(`3.${count} Saved screenshots for ${rawBoard.id}`);
  }

  console.log("4. Finished");
  console.log();
};
