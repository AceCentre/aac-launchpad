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
    "./packages/board-to-pdf/src/tests/screenshots"
  );
  const boardsFolder = path.join(
    process.cwd(),
    "./packages/board-to-pdf/src/tests/boards"
  );
  const imagesFolder = path.join(
    process.cwd(),
    "./packages/board-to-pdf/src/tests/images"
  );
  const pdfsFolder = path.join(
    process.cwd(),
    "./packages/board-to-pdf/src/tests/pdfs"
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

    const { pdf, numberOfPages } = await boardToPdf(rawBoard, {
      rootToImages: imagesFolder,
      rootToPdfs: pdfsFolder,
    });

    const output = Buffer.from(pdf);

    const landscapePrep = fromBuffer(output, {
      density: 500,
      saveFilename: rawBoard.id,
      savePath: screenshotFolder,
      format: "png",
      width: 3508,
      height: 2480,
    });

    const portraitPrep = fromBuffer(output, {
      density: 500,
      saveFilename: rawBoard.id,
      savePath: screenshotFolder,
      format: "png",
      height: 3508,
      width: 2480,
    });

    if (landscapePrep.bulk === undefined || portraitPrep.bulk === undefined) {
      throw new Error(`Failed to get screenshot for: ${rawBoard.id}`);
    }

    const numberOfGeneratedPages = numberOfPages;
    const numberOfDefinedPages = rawBoard.pages.length;
    const numberOfPrependedPages =
      numberOfGeneratedPages - numberOfDefinedPages;

    let landscapePages = [];
    let portraitPages = [];
    for (let i = 1; i <= numberOfGeneratedPages; i++) {
      const currentArrayPageNo = i - 1 - numberOfPrependedPages;

      if (i <= numberOfPrependedPages) {
        landscapePages.push(i);
        continue;
      }

      let currentPage = rawBoard.pages[currentArrayPageNo];

      if (currentPage.orientation === "portrait") {
        portraitPages.push(i);
        continue;
      }

      landscapePages.push(i);
    }

    if (landscapePages.length > 0) {
      await landscapePrep.bulk(landscapePages, false);
    }

    if (portraitPages.length > 0) {
      await portraitPrep.bulk(portraitPages, false);
    }

    console.log(`3.${count} Saved screenshots for ${rawBoard.id}`);
  }

  console.log("4. Finished");
  console.log();
};
