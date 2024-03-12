import { FONT_OPTIONS } from "board-to-pdf";
import {
  AllTemplateVariable,
  PresetVariableValues,
  Template,
  ImageWithTemplateItems,
  ButtonWithTemplateItems,
} from "types";

type Tile = { key: string; label: string; isCore: boolean };

const TILES: Array<Tile> = [
  {
    key: "pretty",
    label: "pretty",
    isCore: false,
  },
  {
    key: "up",
    label: "up",
    isCore: false,
  },
  {
    key: "slow",
    label: "slow",
    isCore: false,
  },
  {
    key: "fun",
    label: "fun",
    isCore: false,
  },
  {
    key: "fast",
    label: "fast",
    isCore: false,
  },
  {
    key: "pour",
    label: "pour",
    isCore: false,
  },
  {
    key: "hold",
    label: "hold",
    isCore: false,
  },
  {
    key: "bubble-mix",
    label: "bubble mix",
    isCore: false,
  },
  {
    key: "bubble-wand",
    label: "bubble wand",
    isCore: false,
  },
  {
    key: "make",
    label: "make",
    isCore: false,
  },
  {
    key: "little",
    label: "little",
    isCore: true,
  },
  {
    key: "big",
    label: "big",
    isCore: true,
  },
  {
    key: "me",
    label: "I, me, my, mine",
    isCore: true,
  },
  {
    key: "more",
    label: "more (again)",
    isCore: true,
  },
  {
    key: "look",
    label: "look (see)",
    isCore: true,
  },
  {
    key: "question",
    label: "question",
    isCore: true,
  },
  {
    key: "bubbles",
    label: "bubble(s)",
    isCore: false,
  },
  {
    key: "you",
    label: "you, your(s)",
    isCore: true,
  },
  {
    key: "stop",
    label: "stop (finish)",
    isCore: true,
  },
  {
    key: "want",
    label: "want",
    isCore: true,
  },
  {
    key: "this",
    label: "this, that",
    isCore: true,
  },
  {
    key: "blow",
    label: "blow",
    isCore: false,
  },
  {
    key: "go",
    label: "go",
    isCore: true,
  },
  {
    key: "different",
    label: "different",
    isCore: true,
  },
  {
    key: "help",
    label: "help",
    isCore: true,
  },
  {
    key: "lots",
    label: "lots (many)",
    isCore: true,
  },
  {
    key: "catch",
    label: "catch",
    isCore: false,
  },
  {
    key: "like",
    label: "like",
    isCore: true,
  },
  {
    key: "wow",
    label: "wow!",
    isCore: true,
  },
  {
    key: "uh-oh",
    label: "oh no!",
    isCore: true,
  },
  {
    key: "no",
    label: "not (no)",
    isCore: true,
  },
  {
    key: "pop",
    label: "pop",
    isCore: false,
  },
];

const generateSymbolPreset = (
  tiles: Array<Tile>,
  name: string
): PresetVariableValues => {
  return tiles.map((tile) => ({
    id: tile.key,
    value: `./symbols/${name}/${tile.key}.png`,
  }));
};

const generateImageVariables = (
  tiles: Array<Tile>,
  name: string
): Array<AllTemplateVariable> => {
  return tiles.map((tile) => ({
    type: "imageUrl",
    name: tile.key,
    id: tile.key,
    description: tile.key,
    hidden: true,
    defaultValue: `./symbols/${name}/${tile.key}.png`,
  }));
};

const generateImages = (tiles: Array<Tile>): Array<ImageWithTemplateItems> => {
  return tiles.map((tile) => ({
    id: tile.key,
    url: { type: "TemplateItem", id: tile.key },
  }));
};

const generateButtons = (
  tiles: Array<Tile>
): Array<ButtonWithTemplateItems> => {
  const buttons: Array<ButtonWithTemplateItems> = tiles.map((tile) => ({
    id: tile.key,
    image_id: tile.key,
    ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
    ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    border_color: "rgb(0, 0, 0)",
    ext_button_border_width: {
      type: "TemplateItem",
      id: tile.isCore ? "core-border" : "non-core-border",
    },
    background_color: { type: "TemplateItem", id: "cell-colour" },
    label: tile.label,
  }));

  const eyePointing: ButtonWithTemplateItems = {
    id: "eyePointing",
    label:
      "Carefully cut round the dotted lines and discard this central section.\nAfter laminating (especially if using a mat laminate pouch), cut out\nthe central section a second time so that there is a window through\nwhich the communication partner and learner can make eye contact.",
    border_color: "rgb(0, 0, 0)",
    background_color: "rgb(255, 255, 255)",
    ext_button_border_width: 1,
    dashed_line: true,
    ext_launchpad_label_font_size: 200,
  };

  return [...buttons, eyePointing];
};

export const bubbles: Template = {
  templateDateCreated: "2022-07-21T12:00:00+01:00",
  templateCategory: "Symbol Charts",
  templateSubcategory: "Symbol charts for playing with toys",
  templateFeatured: false,
  templateShortDescription:
    "The bubbles chart includes core words as well as words to support playing with bubbles. Customise the bubbles chart to your needs, including the font and symbol set.",

  templateVariables: [
    {
      type: "freeText",
      name: "title",
      id: "title-text",
      description: "title",
      hidden: true,
      defaultValue: "Bubbles",
      maxLength: 100,
    },
    {
      type: "number",
      name: "core-border",
      id: "core-border",
      description: "core-border",
      defaultValue: "2",
      hidden: true,
      min: 1,
      max: 10,
    },
    {
      type: "number",
      name: "non-core-border",
      id: "non-core-border",
      description: "non-core-border",
      defaultValue: "1",
      hidden: true,
      min: 1,
      max: 10,
    },
    {
      type: "freeText",
      name: "cover",
      id: "cover",
      description: "cover",
      hidden: true,
      defaultValue: "./symbol-chart-cover.pdf",
      maxLength: 100,
    },
    {
      id: "background-colour",
      name: "Background colour",
      description:
        "Change the background colour of the chart. Select white to save printer ink.",
      defaultValue: "rgb(255,255,255)",
      type: "color",
    },
    {
      id: "cell-colour",
      name: "Cell colour",
      description: "Change the colour of all the cells.",
      defaultValue: "rgb(255,255,255)",
      type: "color",
    },
    {
      id: "label-colour",
      name: "Text colour",
      description: "The colour of text in the cell",
      defaultValue: "rgb(0,0,0)",
      type: "color",
    },
    {
      id: "gap",
      name: "Cell spacing",
      description:
        "The space between the cells. This will also affect the size of the cells.",
      type: "number",
      min: 0,
      max: 100,
      defaultValue: "3",
    },
    {
      id: "padding",
      name: "Page spacing",
      description:
        "The space on the outside edges of the page. This will also affect the size of the cells.",
      type: "number",
      min: 0,
      max: 100,
      defaultValue: "10",
    },
    {
      id: "invert-text",
      name: "Label position",
      description: "Show text above symbol",
      type: "boolean",
      defaultValue: "true",
      trueLabel: "Show label above symbol",
      falseLabel: "Show label below symbol",
    },
    {
      id: "copyright-notice",
      name: "Copyright Notice",
      description: "Copyright notice",
      type: "freeText",
      maxLength: 600,
      defaultValue: "Widgit Symbols © Widgit Software 2002-2023 www.widgit.com",
      hidden: true,
    },
    {
      id: "rows",
      type: "number",
      min: 1,
      max: 10,
      description: "rows",
      defaultValue: "1",
      name: "rows",
      hidden: true,
    },
    {
      id: "columns",
      type: "number",
      min: 1,
      max: 10,
      description: "columns",
      defaultValue: "1",
      name: "columns",
      hidden: true,
    },
    {
      id: "order",
      type: "freeText",
      maxLength: 9999,
      description: "orders",
      defaultValue: '[["left"]]',
      name: "orders",
      hidden: true,
    },

    {
      id: "symbol-system",
      type: "preset",
      name: "Symbol System",
      defaultValue: "widgit",
      description: "The symbol system to use for the chart",
      presets: [
        {
          label: "PCS",
          value: "pcs",
          description: "PCS Symbols",
          variableValues: [
            {
              id: "copyright-notice",
              value:
                "PCS is a trademark of Tobii Dynavox LLC. All rights reserved. Used with permission.",
            },
            ...generateSymbolPreset(TILES, "pcs"),
          ],
        },

        {
          label: "Widgit",
          value: "widgit",
          description: "Widgit Symbols",
          variableValues: [
            {
              id: "copyright-notice",
              value:
                "Widgit Symbols © Widgit Software 2002-2023 www.widgit.com",
            },

            ...generateSymbolPreset(TILES, "widgit"),
          ],
        },
      ],
    },
    {
      id: "grid",
      type: "preset",
      description:
        "Select how you would like the chart to be laid out, ie finger, hand or fist pointing",
      defaultValue: "20",
      name: "Layout",
      presets: [
        {
          value: "intro",
          label: "Intro - Finger Pointing",
          description: "Intro - Finger Pointing",
          variableValues: [
            {
              id: "cover",
              value: "fp-topic.pdf",
            },
            {
              id: "rows",
              value: "2",
            },
            {
              id: "columns",
              value: "4",
            },
            {
              id: "order",
              value: `[
              ["more", "look", "pop", "bubbles"],
              ["stop", "uh-oh", "like", "blow"]
            ]`,
            },
          ],
        },
        {
          value: "stage-1",
          label: "Stage 1 - Finger Pointing",
          description: "Stage 1 - Finger Pointing",
          variableValues: [
            {
              id: "cover",
              value: "fp-topic.pdf",
            },
            {
              id: "rows",
              value: "4",
            },
            {
              id: "columns",
              value: "4",
            },
            {
              id: "order",
              value: `[
              ["more", "look", "pretty", "bubbles"],
              ["stop", "want", "blow", "little"],
              ["different", "help", "pop", "big"],
              ["like", "no", "wow", "uh-oh"]
            ]`,
            },
          ],
        },
        {
          value: "stage-2",
          label: "Stage 2 - Finger Pointing",
          description: "Stage 2 - Finger Pointing",
          variableValues: [
            {
              id: "cover",
              value: "fp-topic.pdf",
            },
            {
              id: "rows",
              value: "5",
            },
            {
              id: "columns",
              value: "6",
            },
            {
              id: "order",
              value: `[
              ["me", "more", "look", "question", "bubbles", "bubble-mix"],
              ["you", "stop", "want", "make", "blow", "bubble-wand"],
              ["go", "different", "help", "pretty", "hold", "fast"],
              ["like", "little", "big", "pop", "pour", "slow"],
              ["wow", "uh-oh", "no", "fun", "lots", "up"]
            ]`,
            },
          ],
        },

        {
          value: "eye-pointing",
          label: "Eye Pointing",
          description: "Eye Pointing",
          variableValues: [
            {
              id: "cover",
              value: "ep.pdf",
            },
            {
              id: "gap",
              value: "10",
            },
            {
              id: "rows",
              value: "6",
            },
            {
              id: "columns",
              value: "5",
            },
            {
              id: "core-border",
              value: "1",
            },
            {
              id: "order",
              value: `[
              ["more", null, "bubbles", null, "blow"],
              ["more", null, "bubbles", null, "blow"],
              [null, "eyePointing", "eyePointing", "eyePointing", null],
              [null, "eyePointing", "eyePointing", "eyePointing", null],
              ["stop", null, "uh-oh", null, "pop"],
              ["stop", null, "uh-oh", null, "pop"]
            ]`,
            },
          ],
        },
        {
          value: "hand",
          label: "Hand Pointing",
          description: "Hand Pointing",
          variableValues: [
            {
              id: "cover",
              value: "hp-topic.pdf",
            },
            {
              id: "rows",
              value: "3",
            },
            {
              id: "columns",
              value: "5",
            },
            {
              id: "core-border",
              value: "1",
            },
            {
              id: "order",
              value: `[
              ["more", null, "bubbles", null, "blow"],
              [null, null, null, null, null],
              ["stop", null, "uh-oh", null, "pop"]
            ]`,
            },
          ],
        },
      ],
    },

    ...generateImageVariables(TILES, "pcs"),

    {
      type: "option",
      id: "font",
      description: "Choose the font used in the file",
      name: "Font",
      defaultValue: "helvetica",
      options: FONT_OPTIONS,
    },
  ],
  templateDescription: "",
  templateName: "Bubbles",
  templateId: "bubbles-launchpad",
  templateImageUrl: "bubbles1.png",
  templateVariableGroups: [
    {
      id: "advanced-options",
      variables: [
        "background-colour",
        "cell-colour",
        "label-colour",
        "gap",
        "padding",
        "invert-text",
      ],
      name: "More options",
      description: "Edit advanced options about the chart",
      openByDefault: false,
    },
  ],

  format: "open-board-0.1",
  id: "bubbles-launchpad",
  locale: "en-GB",
  name: "Bubbles",
  description_html: "",
  ext_launchpad_options: {
    ext_launchpad_prepend_pdf: { type: "TemplateItem", id: "cover" },
    gap: { type: "TemplateItem", id: "gap" },
    padding: { type: "TemplateItem", id: "padding" },
    button_border_width: 1,
    full_background_color: { type: "TemplateItem", id: "background-colour" },
    copyright_notice: { type: "TemplateItem", id: "copyright-notice" },
    invert_symbol_and_label: { type: "TemplateItem", id: "invert-text" },
    autofit_label_text: true,
    use_ace_branding: true,
    title_shown_on_board: { type: "TemplateItem", id: "title-text" },
    text_color_on_background: {
      id: "label-colour",
      type: "TemplateItem",
    },
  },
  images: generateImages(TILES),
  buttons: generateButtons(TILES),

  pages: [
    {
      id: "first",
      grid: {
        rows: { type: "TemplateItem", id: "rows" },
        columns: { type: "TemplateItem", id: "columns" },
        order: { type: "TemplateItem", id: "order" },
      },
    },
  ],
};
