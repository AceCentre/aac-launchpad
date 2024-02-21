import { writeFileSync } from "fs";
import templateToBoard from "template-to-board";
import { WEB_TEMPLATES } from "templates";
import { Result } from "types";

export const generateSymbolCountCsv = async () => {
  console.log("Generating symbol count");
  console.log(`${WEB_TEMPLATES.length} charts`);

  let imageCount: any = {};

  for (let template of WEB_TEMPLATES) {
    const results: Array<Result> = template.templateVariables
      .sort((a, b) => {
        if (a.type === "preset" && b.type !== "preset") {
          return 1;
        }
        if (a.type !== "preset" && b.type === "preset") {
          return -1;
        }
        return 0;
      })
      .map((currentVariable) => {
        // Otherwise use the default value
        return {
          id: currentVariable.id,
          value: currentVariable.defaultValue,
        };
      });

    const board = templateToBoard(template, results);

    for (let image of board.images) {
      let imagePath = image.url.split("/").slice(-1)[0];

      imageCount[imagePath] = imageCount[imagePath]
        ? imageCount[imagePath] + 1
        : 1;
    }
  }

  let csvContent = "Symbol Name,Count\n";

  for (let [key, value] of Object.entries(imageCount)) {
    csvContent += `${key},${value}\n`;
  }

  writeFileSync("symbol-count.csv", csvContent);
};
