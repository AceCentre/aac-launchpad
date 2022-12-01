import { FONT_OPTIONS } from "board-to-pdf";
import { Template } from "types";

export const simonSays: Template = {
  templateDateCreated: "2022-10-12T12:00:00+01:00",
  templateCategory: "Simon Says",
  templateSubcategory:
    "Symbol charts for reading, looking at photos & telling stories",
  templateFeatured: false,
  templateShortDescription: "",

  templateVariables: [
    {
      id: "background-colour",
      name: "Background Colour",
      description:
        "Change the background colour of the chart. Select white to save printer ink.",
      defaultValue: "rgb(253,240,189)",
      type: "color",
    },
    {
      id: "cell-colour",
      name: "Cell colour",
      description: "Change the colour of all the cells.",
      defaultValue: "rgb(255,255,255)",
      type: "color",
    },
    {
      id: "label-colour",
      name: "Text colour",
      description: "The colour of text in the cell",
      defaultValue: "rgb(0,0,0)",
      type: "color",
    },
    {
      id: "gap",
      name: "Cell spacing",
      description:
        "The space between the cells. This will also affect the size of the cells.",
      type: "number",
      min: 0,
      max: 100,
      defaultValue: "3",
    },
    {
      id: "padding",
      name: "Page spacing",
      description:
        "The space on the outside edges of the page. This will also affect the size of the cells.",
      type: "number",
      min: 0,
      max: 100,
      defaultValue: "10",
    },
    {
      id: "invert-text",
      name: "Label position",
      description: "Show text above symbol",
      type: "boolean",
      defaultValue: "true",
      trueLabel: "Show label above symbol",
      falseLabel: "Show label below symbol",
    },
    {
      id: "copyright-notice",
      name: "Copyright Notice",
      description: "Copyright notice",
      type: "freeText",
      maxLength: 600,
      defaultValue:
        "Widgit Symbols © Widgit Software 2002 - 2022 www.widgit.com",
      hidden: true,
    },

    {
      id: "symbol-system",
      type: "preset",
      name: "Symbol System",
      defaultValue: "widgit",
      description: "The symbol system to use for the chart",
      presets: [
        {
          label: "PCS",
          value: "pcs",
          description: "PCS Symbols",
          variableValues: [
            {
              id: "copyright-notice",
              value:
                "The Picture Communication Symbols © 1981 - 2022 DynaVox Mayer-Johnson are used under contractual agreement. All rights reserved worldwide.",
            },
            {
              id: "more",
              value: "./symbols/pcs/more.png",
            },
            {
              id: "run",
              value: "./symbols/pcs/run.png",
            },
            {
              id: "jump",
              value: "./symbols/pcs/jump.png",
            },
            {
              id: "like",
              value: "./symbols/pcs/like.png",
            },
            {
              id: "stop",
              value: "./symbols/pcs/stop.png",
            },
            {
              id: "fall-over",
              value: "./symbols/pcs/fall-over.png",
            },
            {
              id: "look",
              value: "./symbols/pcs/look.png",
            },
            {
              id: "uh-oh",
              value: "./symbols/pcs/uh-oh.png",
            },
          ],
        },
        {
          label: "Widgit",
          value: "widgit",
          description: "Widgit Symbols",
          variableValues: [
            {
              id: "copyright-notice",
              value:
                "The Picture Communication Symbols © 1981 - 2022 DynaVox Mayer-Johnson are used under contractual agreement. All rights reserved worldwide.",
            },
            {
              id: "more",
              value: "./symbols/widgit/more.png",
            },
            {
              id: "run",
              value: "./symbols/widgit/run.png",
            },
            {
              id: "jump",
              value: "./symbols/widgit/jump.png",
            },
            {
              id: "like",
              value: "./symbols/widgit/like.png",
            },
            {
              id: "stop",
              value: "./symbols/widgit/stop.png",
            },
            {
              id: "fall-over",
              value: "./symbols/widgit/fall-over.png",
            },
            {
              id: "look",
              value: "./symbols/widgit/look.png",
            },
            {
              id: "uh-oh",
              value: "./symbols/widgit/uh-oh.png",
            },
          ],
        },
      ],
    },

    {
      type: "imageUrl",
      name: "more",
      id: "more",
      description: "more",
      hidden: true,
      defaultValue: "./symbols/widgit/more.png",
    },

    {
      type: "imageUrl",
      name: "run",
      id: "run",
      description: "run",
      hidden: true,
      defaultValue: "./symbols/widgit/run.png",
    },

    {
      type: "imageUrl",
      name: "jump",
      id: "jump",
      description: "jump",
      hidden: true,
      defaultValue: "./symbols/widgit/jump.png",
    },

    {
      type: "imageUrl",
      name: "like",
      id: "like",
      description: "like",
      hidden: true,
      defaultValue: "./symbols/widgit/like.png",
    },

    {
      type: "imageUrl",
      name: "stop",
      id: "stop",
      description: "stop",
      hidden: true,
      defaultValue: "./symbols/widgit/stop.png",
    },

    {
      type: "imageUrl",
      name: "fall-over",
      id: "fall-over",
      description: "fall-over",
      hidden: true,
      defaultValue: "./symbols/widgit/fall-over.png",
    },

    {
      type: "imageUrl",
      name: "look",
      id: "look",
      description: "look",
      hidden: true,
      defaultValue: "./symbols/widgit/look.png",
    },

    {
      type: "imageUrl",
      name: "uh-oh",
      id: "uh-oh",
      description: "uh-oh",
      hidden: true,
      defaultValue: "./symbols/widgit/uh-oh.png",
    },

    {
      type: "option",
      id: "font",
      description: "Choose the font used in the file",
      name: "Font",
      defaultValue: "helvetica",
      options: FONT_OPTIONS,
    },
  ],
  templateDescription: ``,
  templateName: "Simon Says",
  templateId: "simon-says-launchpad",
  templateImageUrl: "simon-says.png",
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
  id: "simon-says-launchpad",
  locale: "en-GB",
  name: "Simon Says",
  description_html: "",
  ext_launchpad_options: {
    gap: { type: "TemplateItem", id: "gap" },
    padding: { type: "TemplateItem", id: "padding" },
    button_border_width: 1,
    title_shown_on_board: "Simon Says Chart",
    full_background_color: { type: "TemplateItem", id: "background-colour" },
    copyright_notice: { type: "TemplateItem", id: "copyright-notice" },
    invert_symbol_and_label: { type: "TemplateItem", id: "invert-text" },
    autofit_label_text: true,
  },
  images: [
    {
      id: "more",
      url: { type: "TemplateItem", id: "more" },
    },
    {
      id: "run",
      url: { type: "TemplateItem", id: "run" },
    },
    {
      id: "jump",
      url: { type: "TemplateItem", id: "jump" },
    },
    {
      id: "like",
      url: { type: "TemplateItem", id: "like" },
    },
    {
      id: "stop",
      url: { type: "TemplateItem", id: "stop" },
    },
    {
      id: "fall-over",
      url: { type: "TemplateItem", id: "fall-over" },
    },
    {
      id: "look",
      url: { type: "TemplateItem", id: "look" },
    },
    {
      id: "uh-oh",
      url: { type: "TemplateItem", id: "uh-oh" },
    },
  ],
  buttons: [
    {
      id: "more",
      image_id: "more",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "more, again",
    },
    {
      id: "run",
      image_id: "run",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "run around",
    },
    {
      id: "jump",
      image_id: "jump",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "jump up and down",
    },
    {
      id: "like",
      image_id: "like",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "like",
    },
    {
      id: "stop",
      image_id: "stop",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "stop, finished",
    },
    {
      id: "fall-over",
      image_id: "fall-over",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "fall over",
    },
    {
      id: "look",
      image_id: "look",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "look",
    },
    {
      id: "uh-oh",
      image_id: "uh-oh",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "uh oh!",
    },
  ],

  pages: [
    {
      id: "first",
      grid: {
        rows: 2,
        columns: 4,
        order: [
          ["more", "run", "jump", "like", "stop", "fall-over", "look", "uh-oh"],
        ],
      },
    },
  ],
};
