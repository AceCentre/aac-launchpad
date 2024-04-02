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

export const snakesAndLadders: Template = {
  templateDateCreated: "2022-07-20T12:00:00+01:00",
  templateCategory: "Symbol Charts",
  templateSubcategory: "Symbol charts with core vocabulary",
  templateFeatured: false,
  templateShortDescription:
    "A symbol chart to support conversation while playing Snakes and Ladders",

  templateVariables: [
    {
      type: "freeText",
      name: "title",
      id: "title-text",
      description: "title",
      hidden: true,
      defaultValue: "Snakes and Ladders",
      maxLength: 100,
    },
    ...STANDARD_VARIABLES,

    generateAllSymbolPresets(TILES),

    ...generateImageVariables(TILES, "pcs"),

    getLayoutPreset(
      {
        intro: [
          ["MORE", "look", "roll-dice", "snake"],
          ["STOP", "uh-oh", "play", "ladder"],
        ],
        stageOne: [
          ["MORE", "LOOK", "roll-dice", "play"],
          ["STOP", "WANT", "go", "snake"],
          ["DIFFERENT", "HELP", "turn", "ladder"],
          ["LIKE", "NO", "wow", "uh-oh"],
        ],
        stageTwo: [
          ["ME", "MORE", "LOOK", "QUESTION", "game", "turn"],
          ["YOU", "STOP", "WANT", "play", "snake", "win"],
          ["GO", "DIFFERENT", "HELP", "up", "ladder", "lose"],
          ["LIKE", "LITTLE", "BIG", "down", "count", "roll-dice"],
          ["WOW", "UH-OH", "NO", "cross", "fun", "move-my-piece"],
        ],
        eyePointing: [
          ["more", "roll-dice", "snake"],
          ["stop", "uh-oh", "ladder"],
        ],
        handPointing: [
          ["more", "roll-dice", "snake"],
          ["stop", "uh-oh", "ladder"],
        ],
      },
      "topic"
    ),
  ],
  templateDescription: `
  A symbol chart to support communication around creating a story.
    `,
  templateName: "Snakes and Ladders",
  templateId: "snakes-and-ladders-launchpad",
  templateImageUrl: "snakes-and-ladders.png",
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
  id: "snakes-and-ladders-launchpad",
  locale: "en-GB",
  name: "Snakes and Ladders",
  description_html:
    "A symbol chart to support conversation while playing Snakes and Ladders",
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
