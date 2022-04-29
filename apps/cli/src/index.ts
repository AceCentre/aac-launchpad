#! /usr/bin/env node

import boardToPdf from "board-to-pdf";
import templateToBoard from "template-to-board";
import path from "path";
import { Result } from "types";
import { ALL_TEMPLATES } from "templates";

import inquirer from "inquirer";
import { writeFileSync } from "fs";

const main = async () => {
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

  const templateResults = await inquirer.prompt(
    chosenTemplate.templateVariables.map((variable) => {
      if (variable.type === "option") {
        return {
          type: "list",
          name: variable.id,
          message: variable.description,
          choices: variable.options.map((option) => ({
            name: option.label,
            value: option.value,
            short: option.description,
          })),
        };
      }

      if (variable.type === "freeText") {
        return {
          type: "input",
          name: variable.id,
          message: variable.description,
          validate: (input) => {
            if (input.length > variable.maxLength) {
              return `Input must be less than ${variable.maxLength} characters`;
            }
            return true;
          },
        };
      }

      if (variable.type === "number") {
        return {
          type: "number",
          name: variable.id,
          message: variable.description,
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
    })
  );

  const results: Array<Result> = Object.keys(templateResults).map((key) => {
    return {
      id: key,
      value: templateResults[key],
    };
  });

  const board = templateToBoard(chosenTemplate, results);

  const pdfPath = path.join(`./${chosenTemplate.id}.pdf`);
  const obfPath = path.join(`./${chosenTemplate.id}.obf`);

  writeFileSync(obfPath, JSON.stringify(board, null, 2));

  boardToPdf(board, pdfPath);

  console.log("");
  console.log("✨✨✨✨✨ Successfully created a new board ✨✨✨✨✨");
  console.log("");
  console.log("PDF saved to:", pdfPath);
  console.log("OBF saved to:", obfPath);
  console.log("");
};

main();
