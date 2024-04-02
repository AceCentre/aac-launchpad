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

export const wheelsOnTheBus: Template = {
  templateDateCreated: "2022-07-20T12:00:00+01:00",
  templateCategory: "Symbol Charts",
  templateSubcategory: "Symbol charts with core vocabulary",
  templateFeatured: false,
  templateShortDescription:
    "A symbol chart to support communication while singing the song Wheels on the Bus",

  templateVariables: [
    {
      type: "freeText",
      name: "title",
      id: "title-text",
      description: "title",
      hidden: true,
      defaultValue: "Sing wheels on the bus",
      maxLength: 100,
    },
    ...STANDARD_VARIABLES,

    generateAllSymbolPresets(TILES),

    ...generateImageVariables(TILES, "pcs"),

    getLayoutPreset(
      {
        intro: [
          ["MORE", "bus", "different", "bus-doors"],
          ["STOP", "go-round-and-round", "like", "children"],
        ],
        stageOne: [
          ["MORE", "LOOK", "sing-along", "bus-doors"],
          ["STOP", "WANT", "bus", "children"],
          ["DIFFERENT", "HELP", "go-round-and-round", "horn-goes-beep"],
          ["LIKE", "NO", "wow", "uh-oh"],
        ],
        stageTwo: [
          ["ME", "MORE", "LOOK", "QUESTION", "bus-doors", "quiet"],
          ["YOU", "STOP", "WANT", "sing-along", "children", "loud"],
          ["GO", "DIFFERENT", "HELP", "bus", "horn-goes-beep", "fast"],
          [
            "LIKE",
            "LITTLE",
            "BIG",
            "go-round-and-round",
            "wipers-go-swish",
            "slow",
          ],
          ["WOW", "UH-OH", "NO", "good", "bad", "fun"],
        ],
        eyePointing: [
          ["more", "bus", "bus-doors"],
          ["stop", "go-round-and-round", "children"],
        ],
        handPointing: [
          ["more", "bus", "bus-doors"],
          ["stop", "go-round-and-round", "children"],
        ],
      },
      "topic"
    ),
  ],
  templateDescription: `
  A symbol chart to support communication while singing the song Wheels on the Bus
    `,
  templateName: "Sing Wheels on the Bus",
  templateId: "sing-wheels-on-the-bus-launchpad",
  templateImageUrl: "sing-wheels-on-the-bus.png",
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
  id: "sing-wheels-on-the-bus-launchpad",
  locale: "en-GB",
  name: "Sing Wheels on the Bus",
  description_html:
    "A symbol chart to support communication while singing the song Wheels on the Bus",
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
