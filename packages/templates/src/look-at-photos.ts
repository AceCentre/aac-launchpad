import { Template } from "types";
import { TILES } from "./shared/tiles";
import {
  generateImageVariables,
  generateImages,
} from "./shared/generate-images";
import { generateButtons } from "./shared/generate-buttons";
import { STANDARD_VARIABLES } from "./shared/standard-variables";
import { generateAllSymbolPresets } from "./shared/generate-symbol-preset";
import { getLayoutPreset } from "./shared/layout-preset";

export const lookAtPhotos: Template = {
  templateDateCreated: "2022-07-20T12:00:00+01:00",
  templateCategory: "Symbol Charts",
  templateSubcategory: "Symbol charts with core vocabulary",
  templateFeatured: false,
  templateShortDescription:
    "A symbol chart to support conversation while looking at or taking photos.",

  templateVariables: [
    {
      type: "freeText",
      name: "title",
      id: "title-text",
      description: "title",
      hidden: true,
      defaultValue: "Look at Photos",
      maxLength: 100,
    },
    ...STANDARD_VARIABLES,

    generateAllSymbolPresets(TILES),

    ...generateImageVariables(TILES, "pcs"),

    getLayoutPreset(
      {
        intro: [
          ["MORE", "look", "different", "photo"],
          ["STOP", "want", "like", "take-picture"],
        ],
        stageOne: [
          ["MORE", "LOOK", "selfie", "photo"],
          ["STOP", "WANT", "pretty", "take-picture"],
          ["DIFFERENT", "HELP", "good", "bad"],
          ["LIKE", "NO", "wow", "uh-oh"],
        ],
        stageTwo: [
          ["ME", "MORE", "LOOK", "QUESTION", "selfie", "photo"],
          ["YOU", "STOP", "WANT", "make", "pretty", "take-picture"],
          ["GO", "DIFFERENT", "HELP", "show", "silly", "funny"],
          ["LIKE", "LITTLE", "BIG", "delete", "embarrassing", "next"],
          ["WOW", "UH-OH", "NO", "good", "bad", "favourite"],
        ],
        eyePointing: [
          ["more", "different", "photo"],
          ["stop", "like", "take-picture"],
        ],
        handPointing: [
          ["more", "different", "photo"],
          ["stop", "like", "take-picture"],
        ],
      },
      "topic"
    ),
  ],
  templateDescription: `
  A symbol chart to support communication around creating a story.
    `,
  templateName: "Look at Photos",
  templateId: "look-at-photos-launchpad",
  templateImageUrl: "look-at-photos.png",
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
  id: "look-at-photos-launchpad",
  locale: "en-GB",
  name: "Look at Photos",
  description_html:
    "A symbol chart to support conversation while looking at or taking photos.",
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
