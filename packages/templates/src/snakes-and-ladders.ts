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
  { key: "me", label: "I, me, my, mine", isCore: true },
  { key: "more", label: "more (again)", isCore: true },
  { key: "look", label: "look (see)", isCore: true },
  { key: "question", label: "question", isCore: true },
  { key: "have", label: "have", isCore: false },
  { key: "turn", label: "turn", isCore: false },
  { key: "play", label: "play", isCore: false },
  { key: "snakes-ladders", label: "snakes &\nladders", isCore: false },
  { key: "you", label: "you, your(s)", isCore: true },
  { key: "stop", label: "stop (finish)", isCore: true },
  { key: "want", label: "want", isCore: true },
  { key: "this", label: "this (that)", isCore: true },
  { key: "can", label: "can", isCore: false },
  { key: "make", label: "make", isCore: false },
  { key: "count", label: "count", isCore: false },
  { key: "ladder", label: "ladder", isCore: false },
  { key: "he", label: "he, his", isCore: true },
  { key: "go", label: "go", isCore: true },
  { key: "different", label: "different", isCore: true },
  { key: "help", label: "help", isCore: true },
  { key: "some", label: "some (few)", isCore: true },
  { key: "roll-dice", label: "roll dice", isCore: false },
  { key: "good", label: "good", isCore: false },
  { key: "snake", label: "snake", isCore: false },
  { key: "she", label: "she, her(s)", isCore: true },
  { key: "like", label: "like", isCore: true },
  { key: "little", label: "little", isCore: true },
  { key: "big", label: "big", isCore: true },
  { key: "lots", label: "lots (many)", isCore: true },
  { key: "move-my-piece", label: "move my\npiece", isCore: false },
  { key: "bad", label: "bad (yucky)", isCore: false },
  { key: "funny", label: "funny", isCore: false },
  { key: "wow", label: "wow!", isCore: true },
  { key: "uh-oh", label: "oh no!", isCore: true },
  { key: "dont-know", label: "don't know", isCore: true },
  { key: "no", label: "not (no)", isCore: true },
  { key: "up", label: "up", isCore: false },
  { key: "down", label: "down", isCore: false },
  { key: "naughty", label: "naughty", isCore: false },
  { key: "cross", label: "cross", isCore: false },
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

export const snakesAndLadders: Template = {
  templateDateCreated: "2022-07-20T12:00:00+01:00",
  templateCategory: "Symbol Charts",
  templateSubcategory: "Symbol charts with core vocabulary",
  templateFeatured: false,
  templateShortDescription:
    "A symbol chart to support conversation while playing Snakes and Ladders",

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
      defaultValue: "Snakes and Ladders",
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
  A symbol chart to support communication around creating a story.
    `,
  templateName: "Snakes and Ladders",
  templateId: "snakes-and-ladders-launchpad",
  templateImageUrl: "snakes-and-ladders.png",
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
  id: "snakes-and-ladders-launchpad",
  locale: "en-GB",
  name: "Snakes and Ladders",
  description_html:
    "A symbol chart to support conversation while playing Snakes and Ladders",
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
          [
            "me",
            "more",
            "look",
            "question",
            "have",
            "turn",
            "play",
            "snakes-ladders",
          ],
          ["you", "stop", "want", "this", "can", "make", "count", "ladder"],
          [
            "he",
            "go",
            "different",
            "help",
            "some",
            "roll-dice",
            "good",
            "snake",
          ],
          [
            "she",
            "like",
            "little",
            "big",
            "lots",
            "move-my-piece",
            "bad",
            "funny",
          ],
          ["wow", "uh-oh", "dont-know", "no", "up", "down", "naughty", "cross"],
        ],
      },
    },
  ],
};
