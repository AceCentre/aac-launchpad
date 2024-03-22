import { Template } from "types";
import { TILES } from "./shared/tiles";
import { STANDARD_VARIABLES } from "./shared/standard-variables";
import { generateAllSymbolPresets } from "./shared/generate-symbol-preset";
import { getLayoutPreset } from "./shared/layout-preset";
import {
  generateImageVariables,
  generateImages,
} from "./shared/generate-images";
import { generateButtons } from "./shared/generate-buttons";

export const makeUp: Template = {
  templateDateCreated: "2022-07-20T12:00:00+01:00",
  templateCategory: "Symbol Charts",
  templateSubcategory: "Symbol charts with core vocabulary",
  templateFeatured: false,
  templateShortDescription:
    "A symbol chart to support commenting on or directing someone to put on make-up.",

  templateVariables: [
    {
      type: "freeText",
      name: "title",
      id: "title-text",
      description: "title",
      hidden: true,
      defaultValue: "Make Up",
      maxLength: 100,
    },
    ...STANDARD_VARIABLES,

    generateAllSymbolPresets(TILES),

    ...generateImageVariables(TILES, "pcs"),

    getLayoutPreset(
      {
        intro: [
          ["MORE", "look", "different", "make-up"],
          ["STOP", "want", "like", "colour"],
        ],
        stageOne: [
          ["MORE", "LOOK", "mirror", "make-up"],
          ["STOP", "WANT", "pretty", "colour"],
          ["DIFFERENT", "HELP", "good", "bad"],
          ["LIKE", "NO", "wow", "uh-oh"],
        ],
        stageTwo: [
          ["ME", "MORE", "LOOK", "QUESTION", "mirror", "make-up"],
          ["YOU", "STOP", "WANT", "colour", "pretty", "foundation"],
          ["GO", "DIFFERENT", "HELP", "put-on", "eye-shadow", "concealer"],
          ["LIKE", "LITTLE", "BIG", "take-off", "mascara", "blusher"],
          ["WOW", "UH-OH", "NO", "good", "bad", "lipstick"],
        ],
        eyePointing: [
          ["more", "different", "make-up"],
          ["stop", "like", "colour"],
        ],
        handPointing: [
          ["more", "different", "make-up"],
          ["stop", "like", "colour"],
        ],
      },
      "topic"
    ),
  ],
  templateDescription: `
  A symbol chart to support commenting on or directing someone to put on make-up.
    `,
  templateName: "Make Up",
  templateId: "make-up-launchpad",
  templateImageUrl: "make-up.png",
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
  id: "make-up-launchpad",
  locale: "en-GB",
  name: "Make Up",
  description_html:
    "A symbol chart to support commenting on or directing someone to put on make-up.",
  ext_launchpad_options: {
    ext_launchpad_prepend_pdf: { type: "TemplateItem", id: "cover" },
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
        rows: { type: "TemplateItem", id: "rows" },
        columns: { type: "TemplateItem", id: "columns" },
        order: { type: "TemplateItem", id: "order" },
      },
    },
  ],
};
