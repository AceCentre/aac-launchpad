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

export const core: Template = {
  templateDateCreated: "2022-07-20T12:00:00+01:00",
  templateCategory: "Symbol Charts",
  templateSubcategory: "Symbol charts with core vocabulary",
  templateFeatured: false,
  templateShortDescription:
    "Core words are a set of words that we use across huge numbers of different situations. Customise the core chart to your needs, including the font and symbol set.",

  templateVariables: [
    {
      type: "freeText",
      name: "title",
      id: "title-text",
      description: "title",
      hidden: true,
      defaultValue: "Core Words",
      maxLength: 100,
    },
    ...STANDARD_VARIABLES,
    generateAllSymbolPresets(TILES),

    getLayoutPreset(
      {
        intro: [
          ["more", "look", "different", "help"],
          ["stop", "want", "like", "no"],
        ],
        stageOne: [
          ["me", "more", "look", "question"],
          ["you", "stop", "want", "little"],
          ["go", "different", "help", "big"],
          ["like", "wow", "uh-oh", "no"],
        ],
        stageTwo: [
          ["he", "me", "more", "look", "have", "question"],
          ["she", "you", "stop", "want", "do", "turn"],
          ["we", "go", "different", "help", "can", "this"],
          ["they", "like", "little", "big", "first", "next"],
          ["it", "wow", "uh-oh", "good", "bad", "no"],
        ],
        eyePointing: [
          ["more", "look", "different"],
          ["stop", "want", "like"],
        ],
        handPointing: [
          ["more", "look", "different"],
          ["stop", "want", "like"],
        ],
      },
      "core",
      1
    ),

    ...generateImageVariables(TILES, "pcs"),
  ],
  templateDescription: `
    <p>Core words are a set of words that we use across huge numbers of different situations. These are words like 'help', 'look', 'more', 'stop', etc.  Core words are the sort of words that young children start using very early on, and therefore are the sort of words that we want to get started with straight away.</p>
    <p>A great way to get started with low tech AAC is to simply print off a communication chart of core vocabulary and use it whilst chatting in whatever situation you find yourself.</p>
    <p>You can incorporate the words into so many activities - e.g. for talking about watching "more" television or observing that someone is bored and wants to “stop”.  As the charts get more extensive, you will have access to words that enable you to describe what’s going on or how the child might be feeling, offer help, ask a question, and so on.</p>
    `,
  templateName: "Core",
  templateId: "core-launchpad",
  templateImageUrl: "core1.png",
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
  id: "core-launchpad",
  locale: "en-GB",
  name: "Core",
  description_html:
    "Core words are a set of words that we use across huge numbers of different situations.",
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
