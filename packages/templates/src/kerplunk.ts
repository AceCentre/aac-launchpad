import { FONT_OPTIONS } from "board-to-pdf";
import {
  AllTemplateVariable,
  PresetVariableValues,
  Template,
  ImageWithTemplateItems,
  ButtonWithTemplateItems,
} from "types";
import { TILES, Tile } from "./shared/tiles";
import { STANDARD_VARIABLES } from "./shared/standard-variables";
import { generateAllSymbolPresets } from "./shared/generate-symbol-preset";
import { getLayoutPreset } from "./shared/layout-preset";
import {
  generateImageVariables,
  generateImages,
} from "./shared/generate-images";
import { generateButtons } from "./shared/generate-buttons";

export const kerplunk: Template = {
  templateDateCreated: "2022-07-20T12:00:00+01:00",
  templateCategory: "Symbol Charts",
  templateSubcategory: "Symbol charts with core vocabulary",
  templateFeatured: false,
  templateShortDescription:
    "A symbol chart to support conversation while playing Kerplunk!",

  templateVariables: [
    {
      type: "freeText",
      name: "title",
      id: "title-text",
      description: "title",
      hidden: true,
      defaultValue: "Kerplunk",
      maxLength: 100,
    },
    ...STANDARD_VARIABLES,

    generateAllSymbolPresets(TILES),

    ...generateImageVariables(TILES, "pcs"),

    getLayoutPreset(
      {
        intro: [
          ["MORE", "look", "play", "kerplunk"],
          ["STOP", "uh-oh", "fall-over", "marble"],
        ],
        stageOne: [
          ["MORE", "LOOK", "play", "kerplunk"],
          ["STOP", "WANT", "fall-over", "marble"],
          ["DIFFERENT", "HELP", "pull", "stick"],
          ["LIKE", "NO", "wow", "uh-oh"],
        ],
        stageTwo: [
          ["ME", "MORE", "LOOK", "QUESTION", "kerplunk", "turn"],
          ["YOU", "STOP", "WANT", "play", "marble", "win"],
          ["GO", "DIFFERENT", "HELP", "fall-over", "stick", "lose"],
          ["LIKE", "LITTLE", "BIG", "push", "count", "some"],
          ["WOW", "UH-OH", "NO", "pull", "fun", "lots"],
        ],
        eyePointing: [
          ["more", "fall-over", "kerplunk"],
          ["stop", "uh-oh", "marble"],
        ],
        handPointing: [
          ["more", "fall-over", "kerplunk"],
          ["stop", "uh-oh", "marble"],
        ],
      },
      "topic"
    ),
  ],
  templateDescription: `
  A symbol chart to support conversation while playing Kerplunk!
    `,
  templateName: "Kerplunk",
  templateId: "kerplunk-launchpad",
  templateImageUrl: "kerplunk.png",
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
  id: "kerplunk-launchpad",
  locale: "en-GB",
  name: "Kerplunk",
  description_html:
    "A symbol chart to support conversation while playing Kerplunk!",
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
