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
    key: "me",
    label: "I, me, my, mine",
    isCore: false,
  },
  {
    key: "we",
    label: "we, us ours",
    isCore: false,
  },
  {
    key: "more",
    label: "more (again)",
    isCore: false,
  },
  {
    key: "look",
    label: "look (see)",
    isCore: false,
  },
  {
    key: "turn",
    label: "turn",
    isCore: false,
  },
  {
    key: "question",
    label: "question",
    isCore: false,
  },
  {
    key: "you",
    label: "you, your(s)",
    isCore: false,
  },
  {
    key: "they",
    label: "they, them, their(s)",
    isCore: false,
  },
  {
    key: "stop",
    label: "stop (finish)",
    isCore: false,
  },
  {
    key: "want",
    label: "want",
    isCore: false,
  },
  {
    key: "make",
    label: "make",
    isCore: false,
  },
  {
    key: "play",
    label: "play",
    isCore: false,
  },
  {
    key: "she",
    label: "she, her(s)",
    isCore: false,
  },
  {
    key: "do",
    label: "do, does",
    isCore: false,
  },
  {
    key: "different",
    label: "different",
    isCore: false,
  },
  {
    key: "help",
    label: "help",
    isCore: false,
  },
  {
    key: "big",
    label: "big",
    isCore: false,
  },
  {
    key: "good",
    label: "good",
    isCore: false,
  },
  {
    key: "he",
    label: "he, him, his",
    isCore: false,
  },
  {
    key: "it",
    label: "it",
    isCore: false,
  },
  {
    key: "go",
    label: "go",
    isCore: false,
  },
  {
    key: "have",
    label: "have, has",
    isCore: false,
  },
  {
    key: "little",
    label: "little",
    isCore: false,
  },
  {
    key: "bad",
    label: "bad (yucky)",
    isCore: false,
  },
  {
    key: "like",
    label: "like",
    isCore: false,
  },
  {
    key: "wow",
    label: "wow!",
    isCore: false,
  },
  {
    key: "uh-oh",
    label: "oh no!",
    isCore: false,
  },
  {
    key: "can",
    label: "can, could",
    isCore: false,
  },
  {
    key: "this",
    label: "this, that",
    isCore: false,
  },
  {
    key: "not (no)",
    label: "not (no)",
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
  return tiles.map((tile) => ({
    id: tile.key,
    image_id: tile.key,
    ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
    ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    border_color: "rgb(0, 0, 0)",
    ext_button_border_width: tile.isCore ? 2 : 1,
    background_color: { type: "TemplateItem", id: "cell-colour" },
    label: tile.label,
  }));
};

export const core: Template = {
  templateDateCreated: "2022-07-20T12:00:00+01:00",
  templateCategory: "Symbol Charts",
  templateSubcategory: "Symbol charts with core vocabulary",
  templateFeatured: false,
  templateShortDescription:
    "Core words are a set of words that we use across huge numbers of different situations. Customise the core chart to your needs, including the font and symbol set.",

  templateVariables: [
    {
      id: "background-colour",
      name: "Background Colour",
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
          label: "High Contrast PCS",
          value: "high_contrast_pcs",
          description: "High Contrast version of PCS Symbols",
          variableValues: [
            {
              id: "copyright-notice",
              value:
                "PCS is a trademark of Tobii Dynavox LLC. All rights reserved. Used with permission.",
            },
            ...generateSymbolPreset(TILES, "high_contrast_pcs"),
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
      description: "The number of items shown on the chart",
      defaultValue: "28",
      name: "Layout",
      presets: [
        {
          value: "30",
          label: "30",
          description: "30 Cells",
          variableValues: [
            {
              id: "rows",
              value: "6",
            },
            {
              id: "columns",
              value: "6",
            },
            {
              id: "order",
              value: `[
                ["me", "we", "more", "look", "turn", "question"],
                ["you", "they", "stop", "want", "make", "play"],
                ["she", "do", "different", "help", "big", "good"],
                ["he", "it", "go", "have", "little", "bad"],
                ["like", "wow", "uh-oh", "can", "this", "no"]
              ]`,
            },
          ],
        },
        {
          value: "15",
          label: "15",
          description: "15 Cells",
          variableValues: [
            {
              id: "rows",
              value: "3",
            },
            {
              id: "columns",
              value: "5",
            },
            {
              id: "order",
              value: `[
                ["me", "more", "look", "question", "uh-oh"],
                ["you", "stop", "want", "this", "wow"],
                ["go", "like", "different", "help", "no"]
              ]`,
            },
          ],
        },
        {
          value: "8",
          label: "8",
          description: "8 Cells",
          variableValues: [
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
                ["more", "look", "stop", "want"],
                ["like", "different", "help", "no"]
              ]`,
            },
          ],
        },
        {
          value: "2",
          label: "2",
          description: "2 Cells",
          variableValues: [
            {
              id: "rows",
              value: "1",
            },
            {
              id: "columns",
              value: "2",
            },
            {
              id: "order",
              value: `[
                ["more", "stop"]
              ]`,
            },
          ],
        },
      ],
    },
    ...generateImageVariables(TILES, "pcs"),

    {
      type: "freeText",
      name: "title",
      id: "title-text",
      description: "title",
      hidden: true,
      defaultValue: "Core Words",
      maxLength: 100,
    },
    {
      type: "option",
      id: "font",
      description: "Choose the font used in the file",
      name: "Font",
      defaultValue: "helvetica",
      options: FONT_OPTIONS,
    },
  ],
  templateDescription: `
    <p>Core words are a set of words that we use across huge numbers of different situations. These are words like 'help', 'look', 'more', 'stop', etc.  Core words are the sort of words that young children start using very early on, and therefore are the sort of words that we want to get started with straight away.</p>
    <p>A great way to get started with low tech AAC is to simply print off a communication chart of core vocabulary and use it whilst chatting in whatever situation you find yourself.</p>
    <p>You can incorporate the words into so many activities - e.g. for talking about watching "more" television or observing that someone is bored and wants to “stop”.  As the charts get more extensive, you will have access to words that enable you to describe what’s going on or how the child might be feeling, offer help, ask a question, and so on.</p>
    `,
  templateName: "Core",
  templateId: "core-launchpad",
  templateImageUrl: "core.png",
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
  id: "core-launchpad",
  locale: "en-GB",
  name: "Core",
  description_html:
    "Core words are a set of words that we use across huge numbers of different situations.",
  ext_launchpad_options: {
    gap: { type: "TemplateItem", id: "gap" },
    padding: { type: "TemplateItem", id: "padding" },
    button_border_width: 1,
    title_shown_on_board: { type: "TemplateItem", id: "title-text" },
    full_background_color: { type: "TemplateItem", id: "background-colour" },
    copyright_notice: { type: "TemplateItem", id: "copyright-notice" },
    invert_symbol_and_label: { type: "TemplateItem", id: "invert-text" },
    autofit_label_text: true,
    use_ace_branding: true,
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
