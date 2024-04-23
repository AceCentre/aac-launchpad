import { Template } from "types";
import { generateButtons } from "./generate-buttons";
import { generateImageVariables, generateImages } from "./generate-images";
import { generateAllSymbolPresets } from "./generate-symbol-preset";
import { getLayoutPreset } from "./layout-preset";
import { STANDARD_VARIABLES } from "./standard-variables";
import { TILES } from "./tiles";

export const generateStandardTemplate = (
  title: string,
  slug: string,
  layouts: {
    intro: Array<Array<string>>;
    stageOne: Array<Array<string>>;
    stageTwo: Array<Array<string>>;
    eyePointing: Array<Array<string>>;
    handPointing: Array<Array<string>>;
  }
): Template => {
  return {
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
        defaultValue: title,
        maxLength: 100,
      },
      generateAllSymbolPresets(TILES),
      getLayoutPreset(layouts, "topic"),

      ...STANDARD_VARIABLES,

      ...generateImageVariables(TILES, "pcs"),
    ],
    templateDescription: ``,
    templateName: title,
    templateId: `${slug}-launchpad`,
    templateImageUrl: `${slug}.png`,
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
    id: `${slug}-launchpad`,
    locale: "en-GB",
    name: title,
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
};
