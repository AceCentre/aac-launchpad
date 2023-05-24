import {
  AllTemplateVariable,
  ButtonWithTemplateItems,
  GridWithTemplateItems,
  Preset,
  Template,
} from "types";

const blueprint = {
  rows: 5,
  columns: 21,
  grid: [
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 3],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 3],
    [5, 4, 4, 4, 2, 2],
  ],
  layouts: [
    {
      value: "abc",
      name: "ABC",
      description: "ABC layout",
      layout: [
        ["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
        ["a", "b", "c", "d", "e", "f", "g", "h", "", "yes"],
        ["", "i", "j", "k", "l", "m", "n", "o", "p", "q", ""],
        ["r", "s", "t", "u", "v", "w", "x", "y", "z", "no"],
        [
          "You've\nmisunderstood",
          "Next\nword",
          "I don't\nknow",
          "I'll start\nagain",
          ".",
          "?",
        ],
      ],
    },
    {
      value: "qwerty",
      name: "QWERTY",
      description: "QWERTY layout",
      layout: [
        ["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        ["", "a", "s", "d", "f", "g", "h", "j", "k", "l", ""],
        ["", "z", "x", "c", "v", "b", "n", "m", "", "no"],
        [
          "You've\nmisunderstood",
          "Next\nword",
          "I don't\nknow",
          "I'll start\nagain",
          ".",
          "?",
        ],
      ],
    },
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
      let currentButton = currentRow[j];

      buttons.push({
        id: `row-${i}-button-${j}`,
        label: { type: "TemplateItem", id: `row-${i}-button-${j}-label` },
        border_color: currentButton > 1 ? "rgb(0,0,0)" : "rgb(255,255,255)",
        background_color: "rgb(255,255,255)",
      });
    }
  }

  return buttons;
};

const getLabelVariables = (): Array<AllTemplateVariable> => {
  let variables: Array<AllTemplateVariable> = [];

  for (let i = 0; i < blueprint.grid.length; i++) {
    const currentRow = blueprint.grid[i];

    for (let j = 0; j < currentRow.length; j++) {
      variables.push({
        id: `row-${i}-button-${j}-label`,
        name: `row-${i}-button-${j}-label`,
        description: `row-${i}-button-${j}-label`,
        hidden: true,
        defaultValue: "",
        type: "freeText",
        maxLength: 10,
      });
    }
  }

  return variables;
};

const getLayoutPresets = (): Array<Preset> => {
  return blueprint.layouts.map((currentLayout) => {
    let variableValues = [];

    for (let i = 0; i < blueprint.grid.length; i++) {
      const currentRow = blueprint.grid[i];

      for (let j = 0; j < currentRow.length; j++) {
        variableValues.push({
          id: `row-${i}-button-${j}-label`,
          value: currentLayout.layout[i][j],
        });
      }
    }

    return {
      value: currentLayout.value,
      name: currentLayout.name,
      label: currentLayout.name,
      description: currentLayout.description,
      variableValues: variableValues,
    };
  });
};

export const keyguard: Template = {
  templateFeatured: false,
  templateCategory: "Alphabet Charts",
  templateSubcategory: "Alphabet Charts",
  templateShortDescription:
    "Create an alphabet chart with custom colors to go with a keyguard",
  templateVariables: [
    ...getLabelVariables(),
    {
      type: "preset",
      name: "Layout",
      description: "The layout of the keyboard",
      id: "layout",
      defaultValue: "abc",
      presets: getLayoutPresets(),
    },
  ],
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
  ext_launchpad_options: {
    padding: { horizontal: 52, vertical: 35 },
    gap: 0,
    button_border_width: 0.1,
    button_radius: 0,
    use_ace_branding: true,
  },
  buttons: getButtons(),
  images: [],
  pages: [
    {
      ext_launchpad_title_shown_on_board: "Ace Centre Keyguard",
      ext_launchpad_overlay_image: {
        path: "./keyguard-overlay.png",
        scale: 0.355,
        yOffset: 12,
      },
      id: "mainPage",
      grid: blueprintToPageGrid(),
    },
  ],
};
