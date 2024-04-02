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

export const mrPotatoHead: Template = {
  templateDateCreated: "2022-10-12T12:00:00+01:00",
  templateCategory: "Symbol Charts",
  templateSubcategory:
    "Symbol charts for reading, looking at photos & telling stories",
  templateFeatured: false,
  templateShortDescription: "",

  templateVariables: [
    {
      type: "freeText",
      name: "title",
      id: "title-text",
      description: "title",
      hidden: true,
      defaultValue: "Mr Potato Head",
      maxLength: 100,
    },
    ...STANDARD_VARIABLES,

    generateAllSymbolPresets(TILES),

    ...generateImageVariables(TILES, "pcs"),

    getLayoutPreset(
      {
        intro: [
          ["MORE", "look", "different", "mr-potato-head"],
          ["STOP", "want", "put-on", "take-off"],
        ],
        stageOne: [
          ["MORE", "LOOK", "put-on", "mr-potato-head"],
          ["STOP", "WANT", "take-off", "silly"],
          ["DIFFERENT", "HELP", "good", "bad"],
          ["LIKE", "NO", "wow", "uh-oh"],
        ],
        stageTwo: [
          ["ME", "MORE", "LOOK", "QUESTION", "eyes", "mr-potato-head"],
          ["YOU", "STOP", "WANT", "hat", "nose", "put-on"],
          ["GO", "DIFFERENT", "HELP", "hair", "mouth", "take-off"],
          ["LIKE", "LITTLE", "BIG", "shoes", "arm", "silly"],
          ["WOW", "UH-OH", "NO", "good", "bad", "fun"],
        ],
        eyePointing: [
          ["more", "different", "mr-potato-head"],
          ["stop", "put-on", "take-off"],
        ],
        handPointing: [
          ["more", "different", "mr-potato-head"],
          ["stop", "put-on", "take-off"],
        ],
      },
      "topic"
    ),
  ],
  templateDescription: ``,
  templateName: "Mr Potato Head",
  templateId: "mr-potato-head-launchpad",
  templateImageUrl: "mr-potato-head1.png",
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
  id: "mr-potato-head-launchpad",
  locale: "en-GB",
  name: "Mr Potato Head",
  description_html: "",
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
