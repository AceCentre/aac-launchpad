import { Template } from "types";
import { TILES } from "./shared/tiles";
import { STANDARD_VARIABLES } from "./shared/standard-variables";
import { generateAllSymbolPresets } from "./shared/generate-symbol-preset";
import {
  generateImageVariables,
  generateImages,
} from "./shared/generate-images";
import { getLayoutPreset } from "./shared/layout-preset";
import { generateButtons } from "./shared/generate-buttons";

export const bath: Template = {
  templateDateCreated: "2022-07-20T12:00:00+01:00",
  templateCategory: "Symbol Charts",
  templateSubcategory: "Symbol charts with core vocabulary",
  templateFeatured: false,
  templateShortDescription:
    "A symbol chart to support communication while taking a bath",

  templateVariables: [
    {
      type: "freeText",
      name: "title",
      id: "title-text",
      description: "title",
      hidden: true,
      defaultValue: "Bath",
      maxLength: 100,
    },
    ...STANDARD_VARIABLES,

    generateAllSymbolPresets(TILES),

    ...generateImageVariables(TILES, "pcs"),

    getLayoutPreset(
      {
        intro: [
          ["MORE", "hot", "cold", "bath-toy"],
          ["STOP", "want", "like", "splash"],
        ],
        stageOne: [
          ["MORE", "LOOK", "play", "bath"],
          ["STOP", "WANT", "bubbles", "bath-toy"],
          ["DIFFERENT", "HELP", "hot", "wash"],
          ["LIKE", "NO", "fold", "splash"],
        ],
        stageTwo: [
          ["ME", "MORE", "LOOK", "QUESTION", "bath", "water"],
          ["YOU", "STOP", "WANT", "play", "bath-toy", "sponge"],
          ["GO", "DIFFERENT", "HELP", "bubbles", "wash", "soap"],
          ["LIKE", "LITTLE", "BIG", "hot", "splash", "shampoo"],
          ["WOW", "UH-OH", "NO", "cold", "fun", "towel"],
        ],
        eyePointing: [
          ["more", "want", "bath-toy"],
          ["stop", "like", "splash"],
        ],
        handPointing: [
          ["more", "want", "bath-toy"],
          ["stop", "like", "splash"],
        ],
      },
      "topic"
    ),
  ],
  templateDescription: `
  A symbol chart to support communication while taking a bath
    `,
  templateName: "Bath",
  templateId: "bath-launchpad",
  templateImageUrl: "bath.png",
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
  id: "bath-launchpad",
  locale: "en-GB",
  name: "bath",
  description_html:
    "A symbol chart to support communication while taking a bath",
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
        rows: { type: "TemplateItem", id: "rows" },
        columns: { type: "TemplateItem", id: "columns" },
        order: { type: "TemplateItem", id: "order" },
      },
    },
  ],
};
