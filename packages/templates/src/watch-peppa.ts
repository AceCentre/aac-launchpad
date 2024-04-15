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

export const watchPeppa: Template = {
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
      defaultValue: "Watch Peppa",
      maxLength: 100,
    },
    ...STANDARD_VARIABLES,

    generateAllSymbolPresets(TILES),

    ...generateImageVariables(TILES, "pcs"),

    getLayoutPreset(
      {
        intro: [
          ["MORE", "look", "different", "peppa-pig"],
          ["STOP", "uh-oh", "like", "funny"],
        ],
        stageOne: [
          ["MORE", "LOOK", "watch", "peppa-pig"],
          ["STOP", "WANT", "choose", "funny"],
          ["DIFFERENT", "HELP", "good", "bad"],
          ["LIKE", "NO", "wow", "uh-oh"],
        ],
        stageTwo: [
          ["ME", "MORE", "LOOK", "QUESTION", "mummy-pig", "peppa-pig"],
          ["YOU", "STOP", "WANT", "watch", "daddy-pig", "george-pig"],
          ["GO", "DIFFERENT", "HELP", "friend", "silly", "funny"],
          ["LIKE", "LITTLE", "BIG", "choose", "sad", "naughty"],
          ["WOW", "UH-OH", "NO", "good", "bad", "favourite"],
        ],
        eyePointing: [
          ["more", "look", "peppa-pig"],
          ["stop", "uh-oh", "funny"],
        ],
        handPointing: [
          ["more", "look", "peppa-pig"],
          ["stop", "uh-oh", "funny"],
        ],
      },
      "topic"
    ),
  ],
  templateDescription: ``,
  templateName: "Watch Peppa",
  templateId: "watch-peppa-launchpad",
  templateImageUrl: "watch-peppa.png",
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
  id: "watch-peppa-launchpad",
  locale: "en-GB",
  name: "Watch Peppa",
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
