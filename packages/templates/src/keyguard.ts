import {
  ButtonWithTemplateItems,
  GridWithTemplateItems,
  Template,
} from "types";

const blueprint = {
  rows: 5,
  columns: 26,
  grid: [
    [3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3],
  ],
};

const blueprintToPageGrid = (): GridWithTemplateItems => {
  let order: Array<Array<string>> = [];

  for (let i = 0; i < blueprint.grid.length; i++) {
    const currentRow = blueprint.grid[i];

    let newRow: Array<string> = [];

    for (let j = 0; j < currentRow.length; j++) {
      let currentCell = currentRow[j];

      for (let x = 0; x < currentCell; x++) {
        newRow.push(`row-${i}-button-${j}`);
      }
    }

    order.push(newRow);
  }

  return {
    rows: blueprint.rows,
    columns: blueprint.columns,
    order,
  };
};

const getButtons = (): Array<ButtonWithTemplateItems> => {
  let buttons: Array<ButtonWithTemplateItems> = [];

  for (let i = 0; i < blueprint.grid.length; i++) {
    const currentRow = blueprint.grid[i];

    for (let j = 0; j < currentRow.length; j++) {
      buttons.push({
        id: `row-${i}-button-${j}`,
        label: "",
        border_color: "rgb(0,0,0)",
        background_color: "rgb(255,255,255)",
      });
    }
  }

  return buttons;
};

export const keyguard: Template = {
  templateFeatured: false,
  templateCategory: "Alphabet Charts",
  templateSubcategory: "Alphabet Charts",
  templateShortDescription:
    "Create an alphabet chart with custom colors to go with a keyguard",
  templateVariables: [],
  templateVariableGroups: [],
  templateId: "keyguard-launchpad",
  templateDateCreated: "2022-07-20T12:00:00+01:00",
  templateDescription:
    "Create an alphabet chart with custom colors to go with a keyguard",

  templateName: "Keyguard Template",
  templateImageUrl: "alphabet-chart1.png",
  format: "open-board-0.1",
  id: "keyguard-launchpad",
  locale: "en-GB",
  name: "Keyguard Alphabet Chart",
  description_html: "Alphabet board to allow individuals to spell",
  ext_launchpad_options: {},
  buttons: getButtons(),
  images: [],
  pages: [
    {
      id: "mainPage",
      grid: blueprintToPageGrid(),
    },
  ],
};
