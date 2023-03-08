import { FONT_OPTIONS } from "board-to-pdf";
import {
  AllTemplateVariable,
  PresetVariableValues,
  Template,
  ImageWithTemplateItems,
  ButtonWithTemplateItems,
} from "types";

type Tile = { key: string; label: string; isCore: boolean; noImage?: boolean };

const TILES: Array<Tile> = [
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
    key: "some",
    label: "some (few)",
    isCore: true,
  },
  {
    key: "like",
    label: "like",
    isCore: true,
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
    key: "lots",
    label: "lots (many)",
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
    key: "dont-know",
    label: "don't know",
    isCore: true,
  },
  {
    key: "no",
    label: "not (no)",
    isCore: true,
  },
  {
    key: "give",
    label: "give",
    isCore: false,
  },
  {
    key: "show",
    label: "show",
    isCore: false,
  },
  {
    key: "stick",
    label: "stick",
    isCore: false,
  },
  {
    key: "cut",
    label: "cut",
    isCore: false,
  },
  {
    key: "pretty",
    label: "pretty",
    isCore: false,
  },
  {
    key: "rubbish",
    label: "rubbish",
    isCore: false,
  },
  {
    key: "stamp",
    label: "stamp",
    isCore: false,
  },
  {
    key: "paint",
    label: "paint",
    isCore: false,
  },
  {
    key: "picture",
    label: "picture",
    isCore: false,
  },
  {
    key: "glue",
    label: "glue",
    isCore: false,
  },
  {
    key: "glitter",
    label: "glitter",
    isCore: false,
  },
  {
    key: "tape",
    label: "tape",
    isCore: false,
  },
  {
    key: "paper",
    label: "paper",
    isCore: false,
  },
  {
    key: "card",
    label: "card",
    isCore: false,
  },
  {
    key: "felt-tips",
    label: "felt tips",
    isCore: false,
  },
  {
    key: "crayons",
    label: "crayons",
    isCore: false,
  },
  {
    key: "red",
    label: "red",
    isCore: false,
  },
  {
    key: "blue",
    label: "blue",
    isCore: false,
  },
  {
    key: "green",
    label: "green",
    isCore: false,
  },
  {
    key: "yellow",
    label: "yellow",
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
    image_id: tile.noImage ? undefined : tile.key,
    ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
    ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    border_color: "rgb(0, 0, 0)",
    ext_button_border_width: tile.isCore ? 1 : 0.5,
    background_color: { type: "TemplateItem", id: "cell-colour" },
    label: tile.label,
  }));
};

export const artsAndCrafts: Template = {
  templateDateCreated: "2022-07-20T12:00:00+01:00",
  templateCategory: "Symbol Charts",
  templateSubcategory: "Symbol charts with core vocabulary",
  templateFeatured: false,
  templateShortDescription:
    "A symbol chart to support communication while engaging in an arts and crafts activity.",

  templateVariables: [
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
      defaultValue: "2",
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

    ...generateImageVariables(TILES, "pcs"),

    {
      type: "freeText",
      name: "title",
      id: "title-text",
      description: "title",
      hidden: true,
      defaultValue: "Arts and Crafts",
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
  A symbol chart to support communication while engaging in an arts and crafts activity.
    `,
  templateName: "Arts and Crafts",
  templateId: "arts-and-crafts-launchpad",
  templateImageUrl: "arts-and-crafts.png",
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
  id: "arts-and-crafts-launchpad",
  locale: "en-GB",
  name: "Arts and Crafts",
  description_html:
    "A symbol chart to support communication while engaging in an arts and crafts activity.",
  ext_launchpad_options: {
    ext_launchpad_prepend_pdf: "./symbol-chart-cover.pdf",
    gap: { type: "TemplateItem", id: "gap" },
    padding: { type: "TemplateItem", id: "padding" },
    button_border_width: 1,
    title_shown_on_board: { type: "TemplateItem", id: "title-text" },
    full_background_color: { type: "TemplateItem", id: "background-colour" },
    copyright_notice: { type: "TemplateItem", id: "copyright-notice" },
    invert_symbol_and_label: { type: "TemplateItem", id: "invert-text" },
    autofit_label_text: true,
    use_ace_branding: true,
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
        rows: 5,
        columns: 8,
        order: [
          ["me", "more", "look", "question", "give", "show", "stick", "cut"],
          [
            "you",
            "stop",
            "want",
            "this",
            "pretty",
            "rubbish",
            "stamp",
            "paint",
          ],
          [
            "go",
            "different",
            "help",
            "some",
            "picture",
            "glue",
            "glitter",
            "tape",
          ],
          [
            "like",
            "little",
            "big",
            "lots",
            "paper",
            "card",
            "felt-tips",
            "crayons",
          ],
          ["wow", "uh-oh", "dont-know", "no", "red", "blue", "green", "yellow"],
        ],
      },
    },
  ],
};