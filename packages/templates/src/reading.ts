import { FONT_OPTIONS } from "board-to-pdf";
import { Template } from "types";

export const reading: Template = {
  templateDateCreated: "2022-10-12T12:00:00+01:00",
  templateCategory: "Symbol Charts",
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
              id: "read",
              value: "./symbols/pcs/read.png",
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
              id: "dont-like",
              value: "./symbols/pcs/dont-like.png",
            },
            {
              id: "story-book",
              value: "./symbols/pcs/story-book.png",
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
              id: "turn-page",
              value: "./symbols/pcs/turn-page.png",
            },
            {
              id: "wow",
              value: "./symbols/pcs/wow.png",
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
              id: "read",
              value: "./symbols/widgit/read.png",
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
              id: "dont-like",
              value: "./symbols/widgit/dont-like.png",
            },
            {
              id: "story-book",
              value: "./symbols/widgit/story-book.png",
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
              id: "turn-page",
              value: "./symbols/widgit/turn-page.png",
            },
            {
              id: "wow",
              value: "./symbols/widgit/wow.png",
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
      defaultValue: "./symbols/widgit/like.png",
    },
    {
      type: "imageUrl",
      name: "read",
      id: "read",
      description: "read",
      hidden: true,
      defaultValue: "./symbols/widgit/read.png",
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
      defaultValue: "./symbols/widgit/different.png",
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
      name: "dont-like",
      id: "dont-like",
      description: "dont-like",
      hidden: true,
      defaultValue: "./symbols/widgit/dont-like.png",
    },
    {
      type: "imageUrl",
      name: "story-book",
      id: "story-book",
      description: "story-book",
      hidden: true,
      defaultValue: "./symbols/widgit/story-book.png",
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
      name: "turn-page",
      id: "turn-page",
      description: "turn-page",
      hidden: true,
      defaultValue: "./symbols/widgit/turn-page.png",
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
      name: "uh-oh",
      id: "uh-oh",
      description: "uh-oh",
      hidden: true,
      defaultValue: "./symbols/widgit/uh-oh.png",
    },

    {
      type: "freeText",
      name: "more",
      id: "more-label",
      description: "more",
      hidden: true,
      defaultValue: "more, again",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "help",
      id: "help-label",
      description: "help",
      hidden: true,
      defaultValue: "help",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "want",
      id: "want-label",
      description: "want",
      hidden: true,
      defaultValue: "want",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "like",
      id: "like-label",
      description: "like",
      hidden: true,
      defaultValue: "like",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "read",
      id: "read-label",
      description: "read",
      hidden: true,
      defaultValue: "read",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "stop",
      id: "stop-label",
      description: "stop",
      hidden: true,
      defaultValue: "stop, finished",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "different",
      id: "different-label",
      description: "different",
      hidden: true,
      defaultValue: "different",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "look",
      id: "look-label",
      description: "look",
      hidden: true,
      defaultValue: "look",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "dont-like",
      id: "dont-like-label",
      description: "dont-like",
      hidden: true,
      defaultValue: "don't like",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "story-book",
      id: "story-book-label",
      description: "story-book",
      hidden: true,
      defaultValue: "story, book",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "me",
      id: "me-label",
      description: "me",
      hidden: true,
      defaultValue: "I, me, my, mine",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "you",
      id: "you-label",
      description: "you",
      hidden: true,
      defaultValue: "you, your(s)",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "turn-page",
      id: "turn-page-label",
      description: "turn-page",
      hidden: true,
      defaultValue: "turn page",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "wow",
      id: "wow-label",
      description: "wow",
      hidden: true,
      defaultValue: "wow!",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "uh-oh",
      id: "uh-oh-label",
      description: "uh-oh",
      hidden: true,
      defaultValue: "uh oh!",
      maxLength: 100,
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
  templateName: "Reading",
  templateId: "reading-launchpad",
  templateImageUrl: "reading.png",
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
      name: "Advanced options",
      description: "Edit advanced options about the chart",
      openByDefault: false,
    },
  ],

  format: "open-board-0.1",
  id: "reading-launchpad",
  locale: "en-GB",
  name: "Reading",
  description_html: "",
  ext_launchpad_options: {
    gap: { type: "TemplateItem", id: "gap" },
    padding: { type: "TemplateItem", id: "padding" },
    button_border_width: 1,
    title_shown_on_board: { type: "TemplateItem", id: "title-text" },
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
      id: "read",
      url: { type: "TemplateItem", id: "read" },
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
      id: "dont-like",
      url: { type: "TemplateItem", id: "dont-like" },
    },
    {
      id: "story-book",
      url: { type: "TemplateItem", id: "story-book" },
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
      id: "turn-page",
      url: { type: "TemplateItem", id: "turn-page" },
    },
    {
      id: "wow",
      url: { type: "TemplateItem", id: "wow" },
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
      label: { type: "TemplateItem", id: "more-label" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "help",
      image_id: "help",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "help-label" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "want",
      image_id: "want",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "want-label" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "like",
      image_id: "like",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "like-label" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "read",
      image_id: "read",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "read-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "stop",
      image_id: "stop",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "stop-label" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "different",
      image_id: "different",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "different-label" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "look",
      image_id: "look",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "look-label" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "dont-like",
      image_id: "dont-like",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "dont-like-label" },
      border_color: "rgb(0, 0, 0)",
      ext_button_border_width: 2,
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "story-book",
      image_id: "story-book",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "story-book-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "me",
      image_id: "me",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "me-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "you",
      image_id: "you",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "you-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "turn-page",
      image_id: "turn-page",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "turn-page-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "wow",
      image_id: "wow",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "wow-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "uh-oh",
      image_id: "uh-oh",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "uh-oh-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
  ],

  pages: [
    {
      id: "first",
      grid: {
        rows: 3,
        columns: 5,
        order: [
          ["more", "help", "want", "like", "read"],
          ["stop", "different", "look", "dont-like", "story-book"],
          ["me", "you", "turn-page", "wow", "uh-oh"],
        ],
      },
    },
  ],
};
