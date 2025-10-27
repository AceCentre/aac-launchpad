#! /usr/bin/env node

import boardToPdf from "board-to-pdf";
import templateToBoard from "template-to-board";
import path from "path";
import {
  PresetVariable,
  PresetVariableValues,
  Result,
  Template,
  AllTemplateVariable,
} from "types";
import { ALL_TEMPLATES, WEB_TEMPLATES, GUIDE_TEMPLATES } from "templates";
import crypto from "crypto";

import inquirer from "inquirer";
import { writeFileSync, statSync } from "fs";
import { generateTestScreenshots } from "./generate-test-screenshots";
import { generateSymbolCountCsv } from "./generate-symbol-count-csv";
import { getResults } from "./get-results";
import { guideToPdf } from "board-to-pdf";
import fs from "fs";

inquirer.registerPrompt("search-list", require("inquirer-search-list"));

const convertBytes = function (bytes: number) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  if (bytes === 0) {
    return "n/a";
  }

  const i = Math.floor(Math.log(bytes) / Math.log(1024));

  if (i === 0) {
    return bytes + " " + sizes[i];
  }

  return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
};

async function main() {
  const { mode } = await inquirer.prompt([
    {
      type: "list",
      name: "mode",
      message: "What do you want to generate?",
      choices: [
        { name: "Board (AAC grid)", value: "board" },
        { name: "Guide (Instructional PDF)", value: "guide" },
      ],
    },
  ]);

  if (mode === "board") {
    if (process.argv.includes("--generate-test-screenshots")) {
      await generateTestScreenshots();
      return;
    }

    if (process.argv.includes("--generate-symbol-count-csv")) {
      await generateSymbolCountCsv();
      return;
    }

    if (process.argv.includes("--create-cache")) {
      await generateAllChartsForCache();
      return;
    }

    const templateAnswer: { template: string } = await inquirer.prompt([
      {
        type: "search-list",
        name: "template",
        message: "Choose a template",
        choices: ALL_TEMPLATES.map((x) => {
          return {
            name: x.templateName,
            value: x.id,
            short: x.templateDescription,
          };
        }),
      },
    ]);

    const chosenTemplate = ALL_TEMPLATES.find(
      (x) => x.id === templateAnswer.template
    );

    if (chosenTemplate === undefined) {
      throw new Error("You have chosen an invalid template");
    }

    if (process.argv.includes("--all-layouts-and-symbols")) {
      let symbolsSystems = chosenTemplate.templateVariables.find(
        (x) => x.id === "symbol-system"
      ) as PresetVariable;
      let layouts = chosenTemplate.templateVariables.find(
        (x) => x.id === "grid"
      ) as PresetVariable;

      for (const symbolsSystem of symbolsSystems.presets) {
        for (const layout of layouts.presets) {
          console.log(symbolsSystem.label, layout.label);

          let presetOverrides: { [key: string]: string } = {
            grid: layout.value,
            "symbol-system": symbolsSystem.value,
          };

          for (const layoutVals of layout.variableValues) {
            presetOverrides[layoutVals.id] = layoutVals.value;
          }

          for (const symbolVals of symbolsSystem.variableValues) {
            presetOverrides[symbolVals.id] = symbolVals.value;
          }

          await createBoard(chosenTemplate, {}, presetOverrides);
        }
      }
    } else {
      const presetResults = (await inquirer.prompt(
        chosenTemplate.templateVariables
          .filter((x) => x.type === "preset")
          .map((variable) => {
            const presetVariable = variable as PresetVariable;
            return {
              type: "list",
              name: presetVariable.id,
              message: presetVariable.description,
              choices: presetVariable.presets.map((preset) => ({
                name: preset.label,
                value: preset.variableValues,
                short: preset.description,
              })),
            };
          })
      )) as { [key: string]: PresetVariableValues };

      let presetOverrides: { [key: string]: string } = {};

      for (const result of Object.values(presetResults).flat()) {
        presetOverrides[result.id] = result.value;
      }

      const templateResults = await inquirer.prompt(
        chosenTemplate.templateVariables
          .filter((x): x is AllTemplateVariable => x.type !== "preset")
          .filter((x) => x.hidden === false || x.hidden === undefined)
          .sort((a, b) => {
            const aType = a.type;
            const bType = b.type;
            if (aType === "preset" && bType !== "preset") {
              return -1;
            }
            if (aType !== "preset" && bType === "preset") {
              return 1;
            }
            return 0;
          })
          .map((variable) => {
            if (variable.type === "option") {
              return {
                type: "list",
                name: variable.id,
                message: variable.description,
                default: presetOverrides[variable.id],
                choices: variable.options.map((option) => ({
                  name: option.label,
                  value: option.value,
                  short: option.description,
                })),
              };
            }

            if (variable.type === "boolean") {
              return {
                type: "list",
                name: variable.id,
                message: variable.description,
                default: presetOverrides[variable.id],
                choices: [
                  {
                    name: variable.trueLabel,
                    value: "true",
                    short: variable.trueLabel,
                  },
                  {
                    name: variable.falseLabel,
                    value: "false",
                    short: variable.falseLabel,
                  },
                ],
              };
            }

            if (variable.type === "freeText") {
              return {
                type: "input",
                name: variable.id,
                message: variable.description,
                default: presetOverrides[variable.id],
                validate: (input) => {
                  if (input.length > variable.maxLength) {
                    return `Input must be less than ${variable.maxLength} characters`;
                  }
                  return true;
                },
              };
            }

            if (variable.type === "imageUrl") {
              return {
                type: "input",
                name: variable.id,
                message: variable.description,
                default: presetOverrides[variable.id],
              };
            }

            if (variable.type === "number") {
              return {
                type: "number",
                name: variable.id,
                message: variable.description,
                default: presetOverrides[variable.id],
                validate: (input) => {
                  if (input > variable.max) {
                    return `Input must be lower than ${variable.max}`;
                  }
                  if (input < variable.min) {
                    return `Input must be higher than ${variable.min}`;
                  }
                  return true;
                },
              };
            }

            if (variable.type === "color") {
              return {
                type: "input",
                name: variable.id,
                message: variable.description,
                default: presetOverrides[variable.id] || variable.defaultValue,
                validate: (input) => {
                  if (!input.startsWith("rgb(")) {
                    return `You must describe your color in rgb format. Example: rgb(255, 255, 255)`;
                  }
                  if (!input.endsWith(")")) {
                    return `You must describe your color in rgb format. Example: rgb(255, 255, 255)`;
                  }

                  const [red, green, blue] = input
                    .replace("rgb(", "")
                    .replace(")", "")
                    .split(",")
                    .map((x: string) => x.trim())
                    .map((x: string) => parseInt(x));

                  if (
                    red === undefined ||
                    green === undefined ||
                    blue === undefined
                  ) {
                    return `You must describe your color in rgb format. Example: rgb(255, 255, 255)`;
                  }

                  if (isNaN(red) || isNaN(green) || isNaN(blue)) {
                    return `You must describe your color in rgb format. Example: rgb(255, 255, 255)`;
                  }

                  return true;
                },
              };
            }

            throw new Error(
              `You gave an invalid variable type: ${variable.type}`
            );
          })
      );

      await createBoard(chosenTemplate, templateResults, presetOverrides);
    }
  } else if (mode === "guide") {
    await runGuideFlow();
  }
}

type GenerateBoardInput = {
  templateId: string;
  answers: Array<{ id: string; value: string }>;
};

const generateAllChartsForCache = async () => {
  const templates = WEB_TEMPLATES.filter(
    (x) =>
      ![
        "alphabet-chart-launchpad",
        "turn-taking-launchpad",
        "keyguard-launchpad",
        "listener-mediated-abc-launchpad",
      ].includes(x.templateId)
  );

  let counter = 0;

  for (const currentTemplate of templates) {
    let symbolsSystems = currentTemplate.templateVariables.find(
      (x) => x.id === "symbol-system"
    ) as PresetVariable;
    let layouts = currentTemplate.templateVariables.find(
      (x) => x.id === "grid"
    ) as PresetVariable;

    for (const symbolsSystem of symbolsSystems.presets) {
      for (const layout of layouts.presets) {
        let presetOverrides: { [key: string]: string } = {
          grid: layout.value,
          "symbol-system": symbolsSystem.value,
        };

        for (const layoutVals of layout.variableValues) {
          presetOverrides[layoutVals.id] = layoutVals.value;
        }

        for (const symbolVals of symbolsSystem.variableValues) {
          presetOverrides[symbolVals.id] = symbolVals.value;
        }

        const results = getResults(currentTemplate, {}, presetOverrides);

        const filteredResults: Result[] = results.filter(
          (r): r is Result => r !== undefined
        );
        const sortedResults = [...filteredResults].sort((a, b) =>
          a.id.localeCompare(b.id)
        );

        const hashable: GenerateBoardInput = {
          templateId: currentTemplate.templateId,
          answers: sortedResults,
        };

        const board = templateToBoard(currentTemplate, results);

        const fileName =
          currentTemplate.templateId +
          "--" +
          crypto
            .createHash("sha256")
            .update(JSON.stringify(hashable))
            .digest("hex");

        const pdfPath = path.join(
          "./apps/backend/public/boards",
          `./${fileName}.pdf`
        );

        const { pdf, totalSeconds, totalNanoSeconds } = await boardToPdf(
          board,
          {
            rootToImages: path.join("./apps/backend/private"),
            rootToPdfs: path.join("./apps/backend/public"),
          }
        );
        writeFileSync(pdfPath, Buffer.from(pdf));
        counter += 1;

        const elapsedTimeSeconds = totalSeconds + totalNanoSeconds / 1e9;

        console.log(
          `${counter} - ${currentTemplate.name} - ${symbolsSystem.label} - ${layout.label} - ${elapsedTimeSeconds}s - ${fileName}`
        );
        console.log("");
      }
    }
  }

  console.log(`⚙️ Cache generated, created ${counter} charts.`);
};

const createBoard = async (
  chosenTemplate: Template,
  templateResults: any,
  presetOverrides: any
) => {
  const results = getResults(chosenTemplate, templateResults, presetOverrides);

  const board = templateToBoard(chosenTemplate, results);

  const pdfPath = path.join(
    `./${chosenTemplate.id}-${new Date().toUTCString()}.pdf`
  );
  const obfPath = path.join(`./${chosenTemplate.id}.obf`);

  writeFileSync(obfPath, JSON.stringify(board, null, 2));

  const { pdf, totalSeconds, totalNanoSeconds } = await boardToPdf(board);
  writeFileSync(pdfPath, Buffer.from(pdf));

  const pdfStats = statSync(pdfPath);

  console.log("");
  console.log(
    `✨✨✨✨✨ Successfully created a new board (${totalSeconds}.${totalNanoSeconds}s) ✨✨✨✨✨`
  );
  console.log("");
  console.log(`PDF saved to: ${pdfPath} (${convertBytes(pdfStats.size)})`);
  console.log(`OBF saved to: ${obfPath}`);
  console.log("");
};

async function runGuideFlow() {
  // Get all unique subcategories and levels
  const subcategories = Array.from(
    new Set(GUIDE_TEMPLATES.map((g) => g.subcategory).filter(Boolean))
  ).sort();
  const levels = Array.from(
    new Set(
      GUIDE_TEMPLATES.map((g) => g.level).filter(
        (lvl): lvl is number => lvl !== undefined
      )
    )
  ).sort((a, b) => a - b);

  // Add "All" options
  const subcategoryChoices = [
    { name: "All subcategories", value: "__ALL__" },
    ...subcategories.map((s) => ({ name: s, value: s })),
  ];
  const levelChoices = [
    { name: "All levels", value: "__ALL__" },
    ...levels.map((lvl) => ({ name: `Level ${lvl}`, value: lvl })),
  ];

  // Prompt for subcategories (multi-select)
  const { chosenSubcategories } = await inquirer.prompt([
    {
      type: "checkbox",
      name: "chosenSubcategories",
      message: "Filter by subcategory (select one or more, or All):",
      choices: subcategoryChoices,
      validate: (input) =>
        input.length > 0 || "Please select at least one subcategory or All.",
    },
  ]);

  // If "All" is selected, ignore other selections
  const useAllSubcategories = chosenSubcategories.includes("__ALL__");

  // Prompt for levels (multi-select)
  const { chosenLevels } = await inquirer.prompt([
    {
      type: "checkbox",
      name: "chosenLevels",
      message: "Filter by level (select one or more, or All):",
      choices: levelChoices,
      validate: (input) =>
        input.length > 0 || "Please select at least one level or All.",
    },
  ]);

  const useAllLevels = chosenLevels.includes("__ALL__");

  // Filter guides
  const filteredGuides = GUIDE_TEMPLATES.filter((g) => {
    const subcategoryMatch =
      useAllSubcategories ||
      (g.subcategory && chosenSubcategories.includes(g.subcategory));
    const levelMatch =
      useAllLevels || (g.level && chosenLevels.includes(g.level));
    return subcategoryMatch && levelMatch;
  });

  if (filteredGuides.length === 0) {
    console.log("No guides found for that filter.");
    return;
  }

  // Prompt for guide selection
  const { guideId } = await inquirer.prompt([
    {
      type: "list",
      name: "guideId",
      message: "Choose a guide template",
      choices: filteredGuides.map((g) => ({
        name: g.title,
        value: g.templateId,
      })),
    },
  ]);

  const guide = filteredGuides.find((g) => g.templateId === guideId);
  if (!guide) {
    console.error("Guide not found.");
    process.exit(1);
  }

  const { guideToPdf } = await import("board-to-pdf");
  const buffer = await guideToPdf(guide, {
    rootToImages: path.join("./apps/backend/private"),
  });
  fs.writeFileSync(`${guide.templateId}.pdf`, buffer);
  console.log(`Guide PDF saved as ${guide.templateId}.pdf`);
}

main();
