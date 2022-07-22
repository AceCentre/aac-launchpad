import { FONT_OPTIONS } from "board-to-pdf";
import { Template } from "types";

export const bubbles: Template = {
  templateDateCreated: "2022-07-21T12:00:00+01:00",
  templateCategory: "Symbol Charts",
  templateFeatured: false,

  templateVariables: [
    {
      id: "background-colour",
      name: "Background Colour",
      description: "Change the background colour of the board.",
      defaultValue: "rgb(255,255,179)",
      type: "color",
    },
    {
      id: "cell-colour",
      name: "Cell colour",
      description: "Change the colour of each cell.",
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
      id: "language",
      type: "preset",
      name: "Language",
      defaultValue: "english",
      description: "The language on the board",
      presets: [
        {
          label: "English",
          value: "english",
          description: "English",
          variableValues: [
            {
              id: "title-text",
              value: "Bubbles Chart",
            },
            {
              id: "more-label",
              value: "more, again",
            },

            {
              id: "help-label",
              value: "help",
            },

            {
              id: "want-label",
              value: "want",
            },

            {
              id: "like-label",
              value: "like",
            },

            {
              id: "no-label",
              value: "no, not",
            },

            {
              id: "stop-label",
              value: "stop, finished",
            },

            {
              id: "different-label",
              value: "different",
            },

            {
              id: "look-label",
              value: "look",
            },

            {
              id: "wow-label",
              value: "wow",
            },

            {
              id: "this-label",
              value: "this, that, there",
            },

            {
              id: "me-label",
              value: "I, me, my, mine",
            },

            {
              id: "you-label",
              value: "you, your(s)",
            },

            {
              id: "go-label",
              value: "go",
            },

            {
              id: "uh-oh-label",
              value: "uh oh",
            },

            {
              id: "question-label",
              value: "question",
            },

            {
              id: "bubbles-label",
              value: "bubbles",
            },
            {
              id: "blow-label",
              value: "blow",
            },
            {
              id: "catch-label",
              value: "catch",
            },
            {
              id: "pop-label",
              value: "pop",
            },
            {
              id: "lots-label",
              value: "lots",
            },
          ],
        },
        {
          label: "French",
          value: "french",
          description: "French",
          variableValues: [
            {
              id: "title-text",
              value: "Graphique à bulles",
            },

            {
              id: "more-label",
              value: "plus encore",
            },

            {
              id: "help-label",
              value: "aider",
            },

            {
              id: "want-label",
              value: "vouloir",
            },

            {
              id: "like-label",
              value: "aimer",
            },

            {
              id: "no-label",
              value: "non, pas",
            },

            {
              id: "stop-label",
              value: "arrête, fini",
            },

            {
              id: "different-label",
              value: "différent",
            },

            {
              id: "look-label",
              value: "voir",
            },

            {
              id: "wow-label",
              value: "wow",
            },

            {
              id: "this-label",
              value: "ceci, cela, là",
            },

            {
              id: "me-label",
              value: "Je, moi, mon, mien",
            },

            {
              id: "you-label",
              value: "toi, le tien",
            },

            {
              id: "go-label",
              value: "aller",
            },

            {
              id: "uh-oh-label",
              value: "euh oh",
            },

            {
              id: "question-label",
              value: "question",
            },

            {
              id: "bubbles-label",
              value: "bulles",
            },
            {
              id: "blow-label",
              value: "souffler",
            },
            {
              id: "catch-label",
              value: "attraper",
            },
            {
              id: "pop-label",
              value: "pop",
            },
            {
              id: "lots-label",
              value: "lots",
            },
          ],
        },
      ],
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
              id: "no",
              value: "./symbols/pcs/no.png",
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
              id: "bubbles",
              value: "./symbols/pcs/bubbles.png",
            },
            {
              id: "blow",
              value: "./symbols/pcs/blow.png",
            },
            {
              id: "catch",
              value: "./symbols/pcs/catch.png",
            },
            {
              id: "pop",
              value: "./symbols/pcs/pop.png",
            },
            {
              id: "lots",
              value: "./symbols/pcs/lots.png",
            },
          ],
        },
        {
          label: "SymbolStix",
          value: "ss",
          description: "SymbolStix Symbols",
          variableValues: [
            {
              id: "copyright-notice",
              value: "(c) SymbolStix 2022 LLC",
            },

            {
              id: "more",
              value: "./symbols/ss/more.png",
            },

            {
              id: "help",
              value: "./symbols/ss/help.png",
            },

            {
              id: "want",
              value: "./symbols/ss/want.png",
            },

            {
              id: "like",
              value: "./symbols/ss/like.png",
            },

            {
              id: "no",
              value: "./symbols/ss/no.png",
            },

            {
              id: "stop",
              value: "./symbols/ss/stop.png",
            },

            {
              id: "different",
              value: "./symbols/ss/different.png",
            },

            {
              id: "look",
              value: "./symbols/ss/look.png",
            },

            {
              id: "wow",
              value: "./symbols/ss/wow.png",
            },

            {
              id: "this",
              value: "./symbols/ss/this.png",
            },

            {
              id: "me",
              value: "./symbols/ss/me.png",
            },

            {
              id: "you",
              value: "./symbols/ss/you.png",
            },

            {
              id: "go",
              value: "./symbols/ss/go.png",
            },

            {
              id: "uh-oh",
              value: "./symbols/ss/uh-oh.png",
            },
            {
              id: "question",
              value: "./symbols/ss/question.png",
            },
            {
              id: "bubbles",
              value: "./symbols/ss/bubbles.png",
            },
            {
              id: "blow",
              value: "./symbols/ss/blow.png",
            },
            {
              id: "catch",
              value: "./symbols/ss/catch.png",
            },
            {
              id: "pop",
              value: "./symbols/ss/pop.png",
            },
            {
              id: "lots",
              value: "./symbols/ss/lots.png",
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
                "Widgit Symbols © Widgit Software 2002 - 2022 www.widgit.com",
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
              id: "bubbles",
              value: "./symbols/widgit/bubbles.png",
            },
            {
              id: "blow",
              value: "./symbols/widgit/blow.png",
            },
            {
              id: "catch",
              value: "./symbols/widgit/catch.png",
            },
            {
              id: "pop",
              value: "./symbols/widgit/pop.png",
            },
            {
              id: "lots",
              value: "./symbols/widgit/lots.png",
            },
          ],
        },
      ],
    },
    {
      id: "grid",
      type: "preset",
      description: "The number of items shown on the board",
      defaultValue: "20",
      name: "Layout",
      presets: [
        {
          value: "20",
          label: "20",
          description: "20 Cells",
          variableValues: [
            {
              id: "rows",
              value: "4",
            },
            {
              id: "columns",
              value: "5",
            },
            {
              id: "order",
              value: `[
                ["more", "help", "want", "like", "no"],
                ["stop", "different", "look", "wow", "this"],
                ["me", "you", "go", "uh-oh", "question"],
                ["bubbles", "blow", "catch", "pop", "lots"]
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
                ["more", "bubbles", "blow", "like"],
                ["stop", "pop", "look", "uh-oh"]
              ]`,
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
      name: "no",
      id: "no",
      description: "no",
      hidden: true,
      defaultValue: "./symbols/widgit/no.png",
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
      name: "bubbles",
      id: "bubbles",
      description: "bubbles",
      hidden: true,
      defaultValue: "./symbols/widgit/bubbles.png",
    },
    {
      type: "imageUrl",
      name: "blow",
      id: "blow",
      description: "blow",
      hidden: true,
      defaultValue: "./symbols/widgit/blow.png",
    },
    {
      type: "imageUrl",
      name: "catch",
      id: "catch",
      description: "catch",
      hidden: true,
      defaultValue: "./symbols/widgit/catch.png",
    },
    {
      type: "imageUrl",
      name: "pop",
      id: "pop",
      description: "pop",
      hidden: true,
      defaultValue: "./symbols/widgit/pop.png",
    },
    {
      type: "imageUrl",
      name: "lots",
      id: "lots",
      description: "lots",
      hidden: true,
      defaultValue: "./symbols/widgit/lots.png",
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
      name: "no",
      id: "no-label",
      description: "no",
      hidden: true,
      defaultValue: "no, not",
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
      name: "wow",
      id: "wow-label",
      description: "wow",
      hidden: true,
      defaultValue: "wow",
      maxLength: 100,
    },

    {
      type: "freeText",
      name: "this",
      id: "this-label",
      description: "this",
      hidden: true,
      defaultValue: "this, that, there",
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
      name: "go",
      id: "go-label",
      description: "go",
      hidden: true,
      defaultValue: "go",
      maxLength: 100,
    },

    {
      type: "freeText",
      name: "uh-oh",
      id: "uh-oh-label",
      description: "uh-oh",
      hidden: true,
      defaultValue: "uh oh",
      maxLength: 100,
    },

    {
      type: "freeText",
      name: "question",
      id: "question-label",
      description: "question",
      hidden: true,
      defaultValue: "question",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "bubbles",
      id: "bubbles-label",
      description: "bubbles",
      hidden: true,
      defaultValue: "bubbles",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "blow",
      id: "blow-label",
      description: "blow",
      hidden: true,
      defaultValue: "blow",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "catch",
      id: "catch-label",
      description: "catch",
      hidden: true,
      defaultValue: "catch",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "pop",
      id: "pop-label",
      description: "pop",
      hidden: true,
      defaultValue: "pop",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "lots",
      id: "lots-label",
      description: "lots",
      hidden: true,
      defaultValue: "lots",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "title",
      id: "title-text",
      description: "title",
      hidden: true,
      defaultValue: "Core Vocabulary / Commenting Chart",
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
  templateDescription: "",
  templateName: "Bubbles",
  templateId: "bubbles",
  templateImageUrl: "bubbles.png",
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
      description: "Edit advanced options about the board",
      openByDefault: false,
    },
  ],

  format: "open-board-0.1",
  id: "bubbles",
  locale: "en-GB",
  name: "Bubbles",
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
      id: "no",
      url: { type: "TemplateItem", id: "no" },
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
      id: "bubbles",
      url: { type: "TemplateItem", id: "bubbles" },
    },
    {
      id: "blow",
      url: { type: "TemplateItem", id: "blow" },
    },
    {
      id: "catch",
      url: { type: "TemplateItem", id: "catch" },
    },
    {
      id: "pop",
      url: { type: "TemplateItem", id: "pop" },
    },
    {
      id: "lots",
      url: { type: "TemplateItem", id: "lots" },
    },
  ],
  buttons: [
    {
      id: "more",
      image_id: "more",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "more-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "help",
      image_id: "help",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "help-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "want",
      image_id: "want",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "want-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },

    {
      id: "like",
      image_id: "like",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "like-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },

    {
      id: "no",
      image_id: "no",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "no-label" },
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
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "different",
      image_id: "different",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "different-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "look",
      image_id: "look",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "look-label" },
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
      id: "this",
      image_id: "this",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "this-label" },
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
      id: "go",
      image_id: "go",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "go-label" },
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

    {
      id: "question",
      image_id: "question",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "question-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "bubbles",
      image_id: "bubbles",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "bubbles-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "blow",
      image_id: "blow",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "blow-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "catch",
      image_id: "catch",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "catch-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "pop",
      image_id: "pop",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "pop-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "lots",
      image_id: "lots",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "lots-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
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
