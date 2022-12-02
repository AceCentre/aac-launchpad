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
    key: "more",
    label: "more, again",
    isCore: true,
  },
  {
    key: "help",
    label: "help",
    isCore: true,
  },
  {
    key: "want",
    label: "want",
    isCore: true,
  },
  {
    key: "like",
    label: "like",
    isCore: true,
  },
  {
    key: "no",
    label: "not, no",
    isCore: true,
  },
  {
    key: "happy",
    label: "happy",
    isCore: false,
  },
  {
    key: "stop",
    label: "stop, finished",
    isCore: true,
  },
  {
    key: "different",
    label: "different",
    isCore: true,
  },
  {
    key: "look",
    label: "look, see",
    isCore: true,
  },
  {
    key: "wow",
    label: "wow!",
    isCore: true,
  },
  {
    key: "this",
    label: "this, that",
    isCore: true,
  },
  {
    key: "sad",
    label: "sad",
    isCore: false,
  },
  {
    key: "me",
    label: "I, me, my, mine",
    isCore: true,
  },
  {
    key: "you",
    label: "you, your(s)",
    isCore: true,
  },
  {
    key: "go",
    label: "go",
    isCore: true,
  },
  {
    key: "uh-oh",
    label: "uh-oh",
    isCore: true,
  },
  {
    key: "question",
    label: "question",
    isCore: true,
  },
  {
    key: "favourite",
    label: "favourite",
    isCore: false,
  },
  {
    key: "sing-along",
    label: "sing along",
    isCore: false,
  },
  {
    key: "dance",
    label: "dance",
    isCore: false,
  },
  {
    key: "music",
    label: "music",
    isCore: false,
  },
  {
    key: "playlist",
    label: "playlist",
    isCore: false,
  },
  {
    key: "loud",
    label: "loud",
    isCore: false,
  },
  {
    key: "quiet",
    label: "quiet",
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

export const music: Template = {
  templateDateCreated: "2022-10-12T12:00:00+01:00",
  templateCategory: "Symbol Charts",
  templateSubcategory:
    "Symbol charts for reading, looking at photos & telling stories",
  templateFeatured: false,
  templateShortDescription: "",

  templateVariables: [
    {
      id: "grid",
      type: "preset",
      description: "The number of items shown on the chart",
      defaultValue: "24",
      name: "Layout",
      presets: [
        {
          value: "24",
          label: "24",
          description: "24 Cells",
          variableValues: [
            {
              id: "rows",
              value: "4",
            },
            {
              id: "columns",
              value: "6",
            },
            {
              id: "order",
              value: `[
                ["more", "help", "want", "like", "no", "happy"],
                ["stop", "different", "look", "wow", "this", "sad"],
                ["me", "you", "go", "uh-oh", "question", "favourite"],
                ["sing-along", "dance", "music", "playlist", "loud", "quiet"]
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
                ["more", "sing-along", "song", "like"],
                ["stop", "different", "loud", "quiet"]
              ]`,
            },
          ],
        },
      ],
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
      id: "background-colour",
      name: "Background Colour",
      description:
        "Change the background colour of the chart. Select white to save printer ink.",
      defaultValue: "rgb(253,240,189)",
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
      defaultValue:
        "Widgit Symbols © Widgit Software 2002 - 2022 www.widgit.com",
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
                "The Picture Communication Symbols © 1981 - 2022 DynaVox Mayer-Johnson are used under contractual agreement. All rights reserved worldwide.",
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
                "The Picture Communication Symbols © 1981 - 2022 DynaVox Mayer-Johnson are used under contractual agreement. All rights reserved worldwide.",
            },
            ...generateSymbolPreset(TILES, "widgit"),
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
  templateDescription: ``,
  templateName: "Listen to Music",
  templateId: "listen-to-music-launchpad",
  templateImageUrl: "listen-to-music.png",
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
  id: "listen-to-music-launchpad",
  locale: "en-GB",
  name: "Listen to Music",
  description_html: "",
  ext_launchpad_options: {
    gap: { type: "TemplateItem", id: "gap" },
    padding: { type: "TemplateItem", id: "padding" },
    button_border_width: 1,
    title_shown_on_board: "Listen to Music",
    full_background_color: { type: "TemplateItem", id: "background-colour" },
    copyright_notice: { type: "TemplateItem", id: "copyright-notice" },
    invert_symbol_and_label: { type: "TemplateItem", id: "invert-text" },
    autofit_label_text: true,
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
