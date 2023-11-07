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
  { key: "me", label: "I, me, my, mine", isCore: true },
  { key: "more", label: "more (again)", isCore: true },
  { key: "look", label: "look (see)", isCore: true },
  { key: "question", label: "question", isCore: true },
  { key: "dress", label: "dress", isCore: false },
  { key: "dressing-up", label: "dressing up", isCore: false },
  { key: "you", label: "you, your(s)", isCore: true },
  { key: "stop", label: "stop (finish)", isCore: true },
  { key: "want", label: "want", isCore: true },
  { key: "this", label: "this, that", isCore: true },
  { key: "crown", label: "crown (tiara)", isCore: false },
  { key: "princess", label: "princess", isCore: false },
  { key: "go", label: "go", isCore: true },
  { key: "different", label: "different", isCore: true },
  { key: "help", label: "help", isCore: true },
  { key: "put-on", label: "put on", isCore: false },
  { key: "necklace", label: "necklace", isCore: false },
  { key: "shoes", label: "shoes", isCore: false },
  { key: "like", label: "like", isCore: true },
  { key: "good", label: "good", isCore: false },
  { key: "bad", label: "bad", isCore: false },
  { key: "take-off", label: "take off", isCore: false },
  { key: "handbag", label: "handbag", isCore: false },
  { key: "wand", label: "wand", isCore: false },
  { key: "wow", label: "wow!", isCore: true },
  { key: "uh-oh", label: "oh no!", isCore: true },
  { key: "pretty", label: "pretty", isCore: false },
  { key: "no", label: "not (no)", isCore: false },
  { key: "mirror", label: "mirror", isCore: false },
  { key: "photo", label: "photo", isCore: false },
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

export const dressingUpAsAPrincess: Template = {
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
      defaultValue: "30",
      name: "Layout",
      presets: [
        {
          value: "30",
          label: "30",
          description: "30 Cells",
          variableValues: [
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
                ["me", "more", "look", "question", "dress", "dressing-up"],
                ["you", "stop", "want", "this", "crown", "princess"],
                ["go", "different", "help", "put-on", "necklace", "shoes"],
                ["like", "good", "bad", "take-off", "handbag", "wand"],
                ["wow", "uh-oh", "pretty", "no", "mirror", "photo"]
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
                ["more", "different", "dress", "crown"],
                ["stop", "like", "necklace", "handbag"]
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
                "PCS is a trademark of Tobii Dynavox LLC. All rights reserved. Used with permission.",
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
  templateName: "Dressing Up - Princess",
  templateId: "dressing-up-as-a-princess-launchpad",
  templateImageUrl: "dressing-up-as-a-princess.png",
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
  id: "dressing-up-as-a-princess-launchpad",
  locale: "en-GB",
  name: "Dressing Up - Princess",
  description_html: "",
  ext_launchpad_options: {
    ext_launchpad_prepend_pdf: "./symbol-chart-cover.pdf",
    gap: { type: "TemplateItem", id: "gap" },
    padding: { type: "TemplateItem", id: "padding" },
    button_border_width: 1,
    title_shown_on_board: "Dressing Up - Princess",
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
        rows: { type: "TemplateItem", id: "rows" },
        columns: { type: "TemplateItem", id: "columns" },
        order: { type: "TemplateItem", id: "order" },
      },
    },
  ],
};
