import { FONT_OPTIONS } from "board-to-pdf";
import { Template } from "types";

export const blocks: Template = {
  templateDateCreated: "2022-10-12T12:00:00+01:00",
  templateCategory: "Symbol Charts",
  templateSubcategory:
    "Symbol charts for reading, looking at photos & telling stories",
  templateFeatured: false,
  templateShortDescription: "",

  templateVariables: [
    {
      id: "grid",
      type: "preset",
      description: "The number of items shown on the chart",
      defaultValue: "24",
      name: "Layout",
      presets: [
        {
          value: "24",
          label: "24",
          description: "24 Cells",
          variableValues: [
            {
              id: "rows",
              value: "4",
            },
            {
              id: "columns",
              value: "6",
            },
            {
              id: "order",
              value: `[
                ["more", "help", "want", "like", "no", "red"],
                ["stop", "different", "look", "wow", "this", "green"],
                ["me", "you", "go", "uh-oh", "question", "blue"],
                ["block", "tower", "make", "big", "knock-it-down", "yellow"]
              ]`,
            },
          ],
        },
        {
          value: "8",
          label: "8",
          description: "8 Cells",
          variableValues: [
            {
              id: "rows",
              value: "2",
            },
            {
              id: "columns",
              value: "4",
            },
            {
              id: "order",
              value: `[
                ["more", "block", "knock-it-down", "like"],
                ["stop", "tower", "look", "uh-oh"]
              ]`,
            },
          ],
        },
      ],
    },
    {
      id: "rows",
      type: "number",
      min: 1,
      max: 10,
      description: "rows",
      defaultValue: "1",
      name: "rows",
      hidden: true,
    },
    {
      id: "columns",
      type: "number",
      min: 1,
      max: 10,
      description: "columns",
      defaultValue: "1",
      name: "columns",
      hidden: true,
    },
    {
      id: "order",
      type: "freeText",
      maxLength: 9999,
      description: "orders",
      defaultValue: '[["left"]]',
      name: "orders",
      hidden: true,
    },
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
                "PCS is a trademark of Tobii Dynavox LLC. All rights reserved. Used with permission.",
            },
            {
              id: "more",
              value: "./symbols/pcs/more.png",
            },
            {
              id: "help",
              value: "./symbols/pcs/help.png",
            },
            {
              id: "want",
              value: "./symbols/pcs/want.png",
            },
            {
              id: "like",
              value: "./symbols/pcs/like.png",
            },
            {
              id: "no",
              value: "./symbols/pcs/no.png",
            },
            {
              id: "red",
              value: "./symbols/pcs/red.png",
            },
            {
              id: "stop",
              value: "./symbols/pcs/stop.png",
            },
            {
              id: "different",
              value: "./symbols/pcs/different.png",
            },
            {
              id: "look",
              value: "./symbols/pcs/look.png",
            },
            {
              id: "wow",
              value: "./symbols/pcs/wow.png",
            },
            {
              id: "this",
              value: "./symbols/pcs/this.png",
            },
            {
              id: "green",
              value: "./symbols/pcs/green.png",
            },
            {
              id: "me",
              value: "./symbols/pcs/me.png",
            },
            {
              id: "you",
              value: "./symbols/pcs/you.png",
            },
            {
              id: "go",
              value: "./symbols/pcs/go.png",
            },
            {
              id: "uh-oh",
              value: "./symbols/pcs/uh-oh.png",
            },
            {
              id: "question",
              value: "./symbols/pcs/question.png",
            },
            {
              id: "blue",
              value: "./symbols/pcs/blue.png",
            },
            {
              id: "block",
              value: "./symbols/pcs/block.png",
            },
            {
              id: "tower",
              value: "./symbols/pcs/tower.png",
            },
            {
              id: "make",
              value: "./symbols/pcs/make.png",
            },
            {
              id: "big",
              value: "./symbols/pcs/big.png",
            },
            {
              id: "knock-it-down",
              value: "./symbols/pcs/knock-it-down.png",
            },
            {
              id: "yellow",
              value: "./symbols/pcs/yellow.png",
            },
          ],
        },
        {
          label: "High Contrast PCS",
          value: "high-contrast-pcs",
          description: "High Contrast version of PCS Symbols",
          variableValues: [
            {
              id: "copyright-notice",
              value:
                "PCS is a trademark of Tobii Dynavox LLC. All rights reserved. Used with permission.",
            },
            {
              id: "more",
              value: "./symbols/high-contrast-pcs/more.png",
            },
            {
              id: "help",
              value: "./symbols/high-contrast-pcs/help.png",
            },
            {
              id: "want",
              value: "./symbols/high-contrast-pcs/want.png",
            },
            {
              id: "like",
              value: "./symbols/high-contrast-pcs/like.png",
            },
            {
              id: "no",
              value: "./symbols/high-contrast-pcs/no.png",
            },
            {
              id: "red",
              value: "./symbols/high-contrast-pcs/red.png",
            },
            {
              id: "stop",
              value: "./symbols/high-contrast-pcs/stop.png",
            },
            {
              id: "different",
              value: "./symbols/high-contrast-pcs/different.png",
            },
            {
              id: "look",
              value: "./symbols/high-contrast-pcs/look.png",
            },
            {
              id: "wow",
              value: "./symbols/high-contrast-pcs/wow.png",
            },
            {
              id: "this",
              value: "./symbols/high-contrast-pcs/this.png",
            },
            {
              id: "green",
              value: "./symbols/high-contrast-pcs/green.png",
            },
            {
              id: "me",
              value: "./symbols/high-contrast-pcs/me.png",
            },
            {
              id: "you",
              value: "./symbols/high-contrast-pcs/you.png",
            },
            {
              id: "go",
              value: "./symbols/high-contrast-pcs/go.png",
            },
            {
              id: "uh-oh",
              value: "./symbols/high-contrast-pcs/uh-oh.png",
            },
            {
              id: "question",
              value: "./symbols/high-contrast-pcs/question.png",
            },
            {
              id: "blue",
              value: "./symbols/high-contrast-pcs/blue.png",
            },
            {
              id: "block",
              value: "./symbols/high-contrast-pcs/block.png",
            },
            {
              id: "tower",
              value: "./symbols/high-contrast-pcs/tower.png",
            },
            {
              id: "make",
              value: "./symbols/high-contrast-pcs/make.png",
            },
            {
              id: "big",
              value: "./symbols/high-contrast-pcs/big.png",
            },
            {
              id: "knock-it-down",
              value: "./symbols/high-contrast-pcs/knock-it-down.png",
            },
            {
              id: "yellow",
              value: "./symbols/high-contrast-pcs/yellow.png",
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
                "PCS is a trademark of Tobii Dynavox LLC. All rights reserved. Used with permission.",
            },
            {
              id: "more",
              value: "./symbols/widgit/more.png",
            },
            {
              id: "help",
              value: "./symbols/widgit/help.png",
            },
            {
              id: "want",
              value: "./symbols/widgit/want.png",
            },
            {
              id: "like",
              value: "./symbols/widgit/like.png",
            },
            {
              id: "no",
              value: "./symbols/widgit/no.png",
            },
            {
              id: "red",
              value: "./symbols/widgit/red.png",
            },
            {
              id: "stop",
              value: "./symbols/widgit/stop.png",
            },
            {
              id: "different",
              value: "./symbols/widgit/different.png",
            },
            {
              id: "look",
              value: "./symbols/widgit/look.png",
            },
            {
              id: "wow",
              value: "./symbols/widgit/wow.png",
            },
            {
              id: "this",
              value: "./symbols/widgit/this.png",
            },
            {
              id: "green",
              value: "./symbols/widgit/green.png",
            },
            {
              id: "me",
              value: "./symbols/widgit/me.png",
            },
            {
              id: "you",
              value: "./symbols/widgit/you.png",
            },
            {
              id: "go",
              value: "./symbols/widgit/go.png",
            },
            {
              id: "uh-oh",
              value: "./symbols/widgit/uh-oh.png",
            },
            {
              id: "question",
              value: "./symbols/widgit/question.png",
            },
            {
              id: "blue",
              value: "./symbols/widgit/blue.png",
            },
            {
              id: "block",
              value: "./symbols/widgit/block.png",
            },
            {
              id: "tower",
              value: "./symbols/widgit/tower.png",
            },
            {
              id: "make",
              value: "./symbols/widgit/make.png",
            },
            {
              id: "big",
              value: "./symbols/widgit/big.png",
            },
            {
              id: "knock-it-down",
              value: "./symbols/widgit/knock-it-down.png",
            },
            {
              id: "yellow",
              value: "./symbols/widgit/yellow.png",
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
      name: "help",
      id: "help",
      description: "help",
      hidden: true,
      defaultValue: "./symbols/widgit/help.png",
    },
    {
      type: "imageUrl",
      name: "want",
      id: "want",
      description: "want",
      hidden: true,
      defaultValue: "./symbols/widgit/want.png",
    },
    {
      type: "imageUrl",
      name: "like",
      id: "like",
      description: "like",
      hidden: true,
      defaultValue: "./symbols/widgit/more.png",
    },
    {
      type: "imageUrl",
      name: "no",
      id: "no",
      description: "no",
      hidden: true,
      defaultValue: "./symbols/widgit/no.png",
    },

    {
      type: "imageUrl",
      name: "red",
      id: "red",
      description: "red",
      hidden: true,
      defaultValue: "./symbols/widgit/red.png",
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
      name: "different",
      id: "different",
      description: "different",
      hidden: true,
      defaultValue: "./symbols/widgit/more.png",
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
      name: "wow",
      id: "wow",
      description: "wow",
      hidden: true,
      defaultValue: "./symbols/widgit/wow.png",
    },
    {
      type: "imageUrl",
      name: "this",
      id: "this",
      description: "this",
      hidden: true,
      defaultValue: "./symbols/widgit/this.png",
    },
    {
      type: "imageUrl",
      name: "green",
      id: "green",
      description: "green",
      hidden: true,
      defaultValue: "./symbols/widgit/green.png",
    },
    {
      type: "imageUrl",
      name: "me",
      id: "me",
      description: "me",
      hidden: true,
      defaultValue: "./symbols/widgit/me.png",
    },
    {
      type: "imageUrl",
      name: "you",
      id: "you",
      description: "you",
      hidden: true,
      defaultValue: "./symbols/widgit/you.png",
    },
    {
      type: "imageUrl",
      name: "go",
      id: "go",
      description: "go",
      hidden: true,
      defaultValue: "./symbols/widgit/go.png",
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
      type: "imageUrl",
      name: "question",
      id: "question",
      description: "question",
      hidden: true,
      defaultValue: "./symbols/widgit/question.png",
    },
    {
      type: "imageUrl",
      name: "blue",
      id: "blue",
      description: "blue",
      hidden: true,
      defaultValue: "./symbols/widgit/blue.png",
    },
    {
      type: "imageUrl",
      name: "block",
      id: "block",
      description: "block",
      hidden: true,
      defaultValue: "./symbols/widgit/block.png",
    },

    {
      type: "imageUrl",
      name: "tower",
      id: "tower",
      description: "tower",
      hidden: true,
      defaultValue: "./symbols/widgit/tower.png",
    },

    {
      type: "imageUrl",
      name: "make",
      id: "make",
      description: "make",
      hidden: true,
      defaultValue: "./symbols/widgit/make.png",
    },

    {
      type: "imageUrl",
      name: "big",
      id: "big",
      description: "big",
      hidden: true,
      defaultValue: "./symbols/widgit/big.png",
    },

    {
      type: "imageUrl",
      name: "knock-it-down",
      id: "knock-it-down",
      description: "knock-it-down",
      hidden: true,
      defaultValue: "./symbols/widgit/knock-it-down.png",
    },

    {
      type: "imageUrl",
      name: "yellow",
      id: "yellow",
      description: "yellow",
      hidden: true,
      defaultValue: "./symbols/widgit/yellow.png",
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
  templateName: "Blocks",
  templateId: "blocks-launchpad",
  templateImageUrl: "blocks.png",
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
  id: "blocks-launchpad",
  locale: "en-GB",
  name: "Blocks",
  description_html: "",
  ext_launchpad_options: {
    gap: { type: "TemplateItem", id: "gap" },
    padding: { type: "TemplateItem", id: "padding" },
    button_border_width: 1,
    title_shown_on_board: "Play with Blocks Chart",
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
      id: "help",
      url: { type: "TemplateItem", id: "help" },
    },
    {
      id: "want",
      url: { type: "TemplateItem", id: "want" },
    },
    {
      id: "like",
      url: { type: "TemplateItem", id: "like" },
    },
    {
      id: "no",
      url: { type: "TemplateItem", id: "no" },
    },
    {
      id: "red",
      url: { type: "TemplateItem", id: "red" },
    },
    {
      id: "stop",
      url: { type: "TemplateItem", id: "stop" },
    },
    {
      id: "different",
      url: { type: "TemplateItem", id: "different" },
    },
    {
      id: "look",
      url: { type: "TemplateItem", id: "look" },
    },
    {
      id: "wow",
      url: { type: "TemplateItem", id: "wow" },
    },
    {
      id: "this",
      url: { type: "TemplateItem", id: "this" },
    },
    {
      id: "green",
      url: { type: "TemplateItem", id: "green" },
    },
    {
      id: "me",
      url: { type: "TemplateItem", id: "me" },
    },
    {
      id: "you",
      url: { type: "TemplateItem", id: "you" },
    },
    {
      id: "go",
      url: { type: "TemplateItem", id: "go" },
    },
    {
      id: "uh-oh",
      url: { type: "TemplateItem", id: "uh-oh" },
    },
    {
      id: "question",
      url: { type: "TemplateItem", id: "question" },
    },
    {
      id: "blue",
      url: { type: "TemplateItem", id: "blue" },
    },
    {
      id: "block",
      url: { type: "TemplateItem", id: "block" },
    },
    {
      id: "tower",
      url: { type: "TemplateItem", id: "tower" },
    },
    {
      id: "make",
      url: { type: "TemplateItem", id: "make" },
    },
    {
      id: "knock-it-down",
      url: { type: "TemplateItem", id: "knock-it-down" },
    },
    {
      id: "yellow",
      url: { type: "TemplateItem", id: "yellow" },
    },
    {
      id: "big",
      url: { type: "TemplateItem", id: "big" },
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
      id: "help",
      image_id: "help",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "help",
    },
    {
      id: "want",
      image_id: "want",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "want",
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
      id: "no",
      image_id: "no",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "no, not",
    },
    {
      id: "red",
      image_id: "red",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 1,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "red",
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
      id: "different",
      image_id: "different",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "different",
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
      id: "wow",
      image_id: "wow",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "wow",
    },
    {
      id: "this",
      image_id: "this",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "this",
    },
    {
      id: "green",
      image_id: "green",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 1,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "green",
    },
    {
      id: "me",
      image_id: "me",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "I, me, my, mine",
    },
    {
      id: "you",
      image_id: "you",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "you, your(s)",
    },
    {
      id: "go",
      image_id: "go",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "go",
    },
    {
      id: "uh-oh",
      image_id: "uh-oh",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "uh oh",
    },
    {
      id: "question",
      image_id: "question",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "question",
    },
    {
      id: "blue",
      image_id: "blue",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 1,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "blue",
    },
    {
      id: "block",
      image_id: "block",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 1,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "block",
    },
    {
      id: "tower",
      image_id: "tower",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 1,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "tower",
    },
    {
      id: "make",
      image_id: "make",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 1,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "make",
    },
    {
      id: "big",
      image_id: "big",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 1,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "big",
    },
    {
      id: "knock-it-down",
      image_id: "knock-it-down",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 1,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "knock it down",
    },
    {
      id: "yellow",
      image_id: "yellow",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 1,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      label: "yellow",
    },
  ],

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
