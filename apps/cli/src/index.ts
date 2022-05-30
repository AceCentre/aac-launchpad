#! /usr/bin/env node

import boardToPdf from "board-to-pdf";
import templateToBoard from "template-to-board";
import path from "path";
import { PresetVariable, PresetVariableValues, Result } from "types";
import { ALL_TEMPLATES } from "templates";

import inquirer from "inquirer";
import { writeFileSync } from "fs";
import { generateTestScreenshots } from "./generate-test-screenshots";

const main = async () => {
  if (process.argv.includes("--generate-test-screenshots")) {
    await generateTestScreenshots();
    return;
  }

  const templateAnswer: { template: string } = await inquirer.prompt([
    {
      type: "list",
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
      .filter((x) => x.type !== "preset")
      .filter((x) => x.hidden === false || x.hidden === undefined)
      .sort((a, b) => {
        if (a.type === "preset" && b.type !== "preset") {
          return -1;
        }
        if (a.type !== "preset" && b.type === "preset") {
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
            default: presetOverrides[variable.id],
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

        throw new Error(`You gave an invalid variable type: ${variable.type}`);
      })
  );

  const results: Array<Result> = chosenTemplate.templateVariables
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
      // If the user gave an explicit answer use that
      if (templateResults[currentVariable.id]) {
        return {
          id: currentVariable.id,
          value: templateResults[currentVariable.id],
        };
      }

      // If there was a preset answer give that
      if (presetOverrides[currentVariable.id]) {
        return {
          id: currentVariable.id,
          value: presetOverrides[currentVariable.id],
        };
      }

      // Otherwise use the default value
      return {
        id: currentVariable.id,
        value: currentVariable.defaultValue,
      };
    });

  const board = templateToBoard(chosenTemplate, results);

  const pdfPath = path.join(`./${chosenTemplate.id}.pdf`);
  const obfPath = path.join(`./${chosenTemplate.id}.obf`);

  writeFileSync(obfPath, JSON.stringify(board, null, 2));

  const { pdf } = await boardToPdf(board);
  writeFileSync(pdfPath, Buffer.from(pdf));

  console.log("");
  console.log("✨✨✨✨✨ Successfully created a new board ✨✨✨✨✨");
  console.log("");
  console.log("PDF saved to:", pdfPath);
  console.log("OBF saved to:", obfPath);
  console.log("");
};

main();
