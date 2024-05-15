import { writeFileSync } from "fs";
import templateToBoard from "template-to-board";
import { WEB_TEMPLATES } from "templates";
import { Image, PresetVariable, Result } from "types";
import { getResults } from "./get-results";

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

export const generateSymbolCountCsv = async () => {
  console.log("Generating symbol count");

  const templates = WEB_TEMPLATES.filter(
    (x) =>
      ![
        "alphabet-chart-launchpad",
        "turn-taking-launchpad",
        "keyguard-launchpad",
        "listener-mediated-launchpad",
      ].includes(x.templateId)
  );

  console.log(`${templates.length} charts`);

  let allSymbols: { [key: string]: { count: number; charts: Array<string> } } =
    {};

  for (let currentTemplate of templates) {
    let layouts = currentTemplate.templateVariables.find(
      (x) => x.id === "grid"
    ) as PresetVariable;

    let symbolsForCurrentLayout: { [key: string]: boolean } = {};

    for (const layout of layouts.presets) {
      let presetOverrides: { [key: string]: string } = {
        grid: layout.value,
      };

      for (const layoutVals of layout.variableValues) {
        presetOverrides[layoutVals.id] = layoutVals.value;
      }

      const results = getResults(currentTemplate, {}, presetOverrides);

      const board = templateToBoard(currentTemplate, results);

      console.log(board.name, layout.description);

      if (board.pages.length !== 1) {
        throw new Error(
          `Wrong number of pages for ${board.name} - ${layout.description}`
        );
      }

      const page = board.pages[0];

      const images = page.grid.order
        .flat()
        .map((x) => {
          let foundButton = board.buttons.find((button) => {
            return button.id === x;
          });

          if (!foundButton) {
            return null;
          }

          if (!foundButton.image_id) {
            return null;
          }

          let imageId = foundButton.image_id;

          let foundImage = board.images.find((image) => {
            return image.id === imageId;
          });

          if (!foundImage) {
            throw new Error(
              `Could not find image ${board.name} - ${layout.description} - ${x}`
            );
          }

          return foundImage;
        })
        .filter(notEmpty);

      for (const image of images) {
        const finalId = image.id.replace("-non-core", "").replace("-core", "");
        symbolsForCurrentLayout[finalId] = true;
      }
    }

    for (const symbol of Object.keys(symbolsForCurrentLayout)) {
      let currentSymbol = allSymbols[symbol];

      if (currentSymbol) {
        allSymbols[symbol] = {
          count: currentSymbol.count + 1,
          charts: [
            ...currentSymbol.charts,
            currentTemplate.templateId.replace("-launchpad", ""),
          ],
        };
      } else {
        allSymbols[symbol] = {
          count: 1,
          charts: [currentTemplate.templateId],
        };
      }
    }

    // let imageCount: any = {};

    // for (let template of WEB_TEMPLATES) {
    //   const results: Array<Result> = template.templateVariables
    //     .sort((a, b) => {
    //       if (a.type === "preset" && b.type !== "preset") {
    //         return 1;
    //       }
    //       if (a.type !== "preset" && b.type === "preset") {
    //         return -1;
    //       }
    //       return 0;
    //     })
    //     .map((currentVariable) => {
    //       // Otherwise use the default value
    //       return {
    //         id: currentVariable.id,
    //         value: currentVariable.defaultValue,
    //       };
    //     });

    //   const board = templateToBoard(template, results);

    //   for (let image of board.images) {
    //     let imagePath = image.url.split("/").slice(-1)[0];

    //     imageCount[imagePath] = imageCount[imagePath]
    //       ? imageCount[imagePath] + 1
    //       : 1;
    //   }
  }

  console.log(JSON.stringify(allSymbols));

  let csvContent = "Symbol Name,Count,Charts\n";

  for (let [key, value] of Object.entries(allSymbols)) {
    csvContent += `${key},${value.count},${value.charts.join(" - ")}\n`;
  }

  writeFileSync("symbol-count.csv", csvContent);
};
