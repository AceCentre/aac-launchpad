import { Template } from "types";
import { FONT_OPTIONS } from "board-to-pdf";

export const fontPicker: Template = {
  templateVariables: [
    {
      type: "option",
      id: "font",
      description: "Choose the font used in the file",
      name: "Font",
      defaultValue: "helvetica",
      options: FONT_OPTIONS,
    },
  ],
  templateVariableGroups: [],

  templateDescription: "Create a single tile board with your chosen font",
  templateName: "Font Picker Example",
  templateId: "font-picker",
  templateImageUrl: "single-tile.png",

  format: "open-board-0.1",
  id: "font-picker",
  locale: "en-GB",
  name: "Font Picker Example",
  description_html: "A board with a single tile in the centre",
  ext_launchpad_options: {},
  images: [],
  buttons: [
    {
      id: "main",
      label: "Long text 9996666 in open dyslexic",
      border_color: "rgb(0, 0, 55)",
      background_color: "rgb(255, 0, 0)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
  ],
  pages: [
    {
      id: "first",
      grid: {
        rows: 1,
        columns: 1,
        order: [["main"]],
      },
    },
  ],
};
