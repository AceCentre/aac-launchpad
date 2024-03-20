import { Template } from "types";
import { TILES } from "./shared/tiles";
import { generateAllSymbolPresets } from "./shared/generate-symbol-preset";
import {
  generateImageVariables,
  generateImages,
} from "./shared/generate-images";
import { generateButtons } from "./shared/generate-buttons";
import { STANDARD_VARIABLES } from "./shared/standard-variables";
import { getLayoutPreset } from "./shared/layout-preset";

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

    ...STANDARD_VARIABLES,

    generateAllSymbolPresets(TILES),

    getLayoutPreset(
      {
        intro: [
          ["MORE", "look", "pop", "bubbles"],
          ["STOP", "uh-oh", "like", "blow"],
        ],
        stageOne: [
          ["MORE", "LOOK", "pretty", "bubbles"],
          ["STOP", "WANT", "blow", "little"],
          ["DIFFERENT", "HELP", "pop", "big"],
          ["LIKE", "NO", "wow", "uh-oh"],
        ],
        stageTwo: [
          ["ME", "MORE", "LOOK", "QUESTION", "bubbles", "bubble-mix"],
          ["YOU", "STOP", "WANT", "make", "blow", "bubble-wand"],
          ["GO", "DIFFERENT", "HELP", "pretty", "hold", "fast"],
          ["LIKE", "LITTLE", "BIG", "pop", "pour", "slow"],
          ["WOW", "UH-OH", "NO", "fun", "lots", "up"],
        ],
        eyePointing: [
          ["more", "bubbles", "blow"],
          ["stop", "uh-oh", "pop"],
        ],
        handPointing: [
          ["more", "bubbles", "blow"],
          ["stop", "uh-oh", "pop"],
        ],
      },
      "topic"
    ),

    ...generateImageVariables(TILES, "pcs"),
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
