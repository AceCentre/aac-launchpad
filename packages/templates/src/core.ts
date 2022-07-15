import { FONT_OPTIONS } from "board-to-pdf";
import { Template } from "types";

export const core: Template = {
  templateVariables: [
    {
      type: "option",
      id: "font",
      description: "Choose the font used in the file",
      name: "Font",
      defaultValue: "helvetica",
      options: FONT_OPTIONS,
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
              id: "dont-like",
              value: "./symbols/pcs/dont-like.png",
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
              id: "have",
              value: "./symbols/pcs/have.png",
            },

            {
              id: "like",
              value: "./symbols/pcs/like.png",
            },

            {
              id: "good",
              value: "./symbols/pcs/good.png",
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
              id: "make",
              value: "./symbols/pcs/make.png",
            },

            {
              id: "wow",
              value: "./symbols/pcs/wow.png",
            },

            {
              id: "bad",
              value: "./symbols/pcs/bad.png",
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
              id: "play",
              value: "./symbols/pcs/play.png",
            },

            {
              id: "uh-oh",
              value: "./symbols/pcs/uh-oh.png",
            },

            {
              id: "big",
              value: "./symbols/pcs/big.png",
            },

            {
              id: "can",
              value: "./symbols/pcs/can.png",
            },

            {
              id: "he",
              value: "./symbols/pcs/he.png",
            },

            {
              id: "she",
              value: "./symbols/pcs/she.png",
            },

            {
              id: "we",
              value: "./symbols/pcs/we.png",
            },

            {
              id: "they",
              value: "./symbols/pcs/they.png",
            },

            {
              id: "turn",
              value: "./symbols/pcs/turn.png",
            },

            {
              id: "little",
              value: "./symbols/pcs/little.png",
            },

            {
              id: "question",
              value: "./symbols/pcs/question.png",
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
              id: "dont-like",
              value: "./symbols/ss/dont-like.png",
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
              id: "have",
              value: "./symbols/ss/have.png",
            },

            {
              id: "like",
              value: "./symbols/ss/like.png",
            },

            {
              id: "good",
              value: "./symbols/ss/good.png",
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
              id: "make",
              value: "./symbols/ss/make.png",
            },

            {
              id: "wow",
              value: "./symbols/ss/wow.png",
            },

            {
              id: "bad",
              value: "./symbols/ss/bad.png",
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
              id: "play",
              value: "./symbols/ss/play.png",
            },

            {
              id: "uh-oh",
              value: "./symbols/ss/uh-oh.png",
            },

            {
              id: "big",
              value: "./symbols/ss/big.png",
            },

            {
              id: "can",
              value: "./symbols/ss/can.png",
            },

            {
              id: "he",
              value: "./symbols/ss/he.png",
            },

            {
              id: "she",
              value: "./symbols/ss/she.png",
            },

            {
              id: "we",
              value: "./symbols/ss/we.png",
            },

            {
              id: "they",
              value: "./symbols/ss/they.png",
            },

            {
              id: "turn",
              value: "./symbols/ss/turn.png",
            },

            {
              id: "little",
              value: "./symbols/ss/little.png",
            },

            {
              id: "question",
              value: "./symbols/ss/question.png",
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
              id: "dont-like",
              value: "./symbols/widgit/dont-like.png",
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
              id: "have",
              value: "./symbols/widgit/have.png",
            },

            {
              id: "like",
              value: "./symbols/widgit/like.png",
            },

            {
              id: "good",
              value: "./symbols/widgit/good.png",
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
              id: "make",
              value: "./symbols/widgit/make.png",
            },

            {
              id: "wow",
              value: "./symbols/widgit/wow.png",
            },

            {
              id: "bad",
              value: "./symbols/widgit/bad.png",
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
              id: "play",
              value: "./symbols/widgit/play.png",
            },

            {
              id: "uh-oh",
              value: "./symbols/widgit/uh-oh.png",
            },

            {
              id: "big",
              value: "./symbols/widgit/big.png",
            },

            {
              id: "can",
              value: "./symbols/widgit/can.png",
            },

            {
              id: "he",
              value: "./symbols/widgit/he.png",
            },

            {
              id: "she",
              value: "./symbols/widgit/she.png",
            },

            {
              id: "we",
              value: "./symbols/widgit/we.png",
            },

            {
              id: "they",
              value: "./symbols/widgit/they.png",
            },

            {
              id: "turn",
              value: "./symbols/widgit/turn.png",
            },

            {
              id: "little",
              value: "./symbols/widgit/little.png",
            },

            {
              id: "question",
              value: "./symbols/widgit/question.png",
            },
          ],
        },
      ],
    },
    {
      id: "grid",
      type: "preset",
      description: "The number of items shown on the board",
      defaultValue: "28",
      name: "Layout",
      presets: [
        {
          value: "28",
          label: "28",
          description: "28 Cells",
          variableValues: [
            {
              id: "rows",
              value: "4",
            },
            {
              id: "columns",
              value: "7",
            },
            {
              id: "order",
              value: `[
                ["more", "help", "want", "have", "like", "good", "no"],
                ["stop", "different", "look", "make", "wow", "bad", "this"],
                ["me", "you", "go", "play", "uh-oh", "big", "can"],
                ["he", "she", "we", "they", "turn", "little", "question"]
              ]`,
            },
          ],
        },
        {
          value: "15",
          label: "15",
          description: "15 Cells",
          variableValues: [
            {
              id: "rows",
              value: "3",
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
                ["me", "you", "go", "uh-oh", "question"]
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
                ["more", "help", "want", "like"],
                ["stop", "different", "look", "dont-like"]
              ]`,
            },
          ],
        },
        {
          value: "2",
          label: "2",
          description: "2 Cells",
          variableValues: [
            {
              id: "rows",
              value: "1",
            },
            {
              id: "columns",
              value: "2",
            },
            {
              id: "order",
              value: `[
                ["more", "stop", "want", "like"]
              ]`,
            },
          ],
        },
      ],
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
      name: "have",
      id: "have",
      description: "have",
      hidden: true,
      defaultValue: "./symbols/widgit/have.png",
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
      name: "good",
      id: "good",
      description: "good",
      hidden: true,
      defaultValue: "./symbols/widgit/good.png",
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
      name: "make",
      id: "make",
      description: "make",
      hidden: true,
      defaultValue: "./symbols/widgit/make.png",
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
      name: "bad",
      id: "bad",
      description: "bad",
      hidden: true,
      defaultValue: "./symbols/widgit/bad.png",
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
      name: "play",
      id: "play",
      description: "play",
      hidden: true,
      defaultValue: "./symbols/widgit/play.png",
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
      name: "big",
      id: "big",
      description: "big",
      hidden: true,
      defaultValue: "./symbols/widgit/big.png",
    },

    {
      type: "imageUrl",
      name: "can",
      id: "can",
      description: "can",
      hidden: true,
      defaultValue: "./symbols/widgit/can.png",
    },

    {
      type: "imageUrl",
      name: "he",
      id: "he",
      description: "he",
      hidden: true,
      defaultValue: "./symbols/widgit/he.png",
    },

    {
      type: "imageUrl",
      name: "she",
      id: "she",
      description: "she",
      hidden: true,
      defaultValue: "./symbols/widgit/she.png",
    },

    {
      type: "imageUrl",
      name: "we",
      id: "we",
      description: "we",
      hidden: true,
      defaultValue: "./symbols/widgit/we.png",
    },

    {
      type: "imageUrl",
      name: "they",
      id: "they",
      description: "they",
      hidden: true,
      defaultValue: "./symbols/widgit/they.png",
    },

    {
      type: "imageUrl",
      name: "turn",
      id: "turn",
      description: "turn",
      hidden: true,
      defaultValue: "./symbols/widgit/turn.png",
    },

    {
      type: "imageUrl",
      name: "little",
      id: "little",
      description: "little",
      hidden: true,
      defaultValue: "./symbols/widgit/little.png",
    },

    {
      type: "imageUrl",
      name: "question",
      id: "question",
      description: "question",
      hidden: true,
      defaultValue: "./symbols/widgit/question.png",
    },
  ],
  templateDescription: `
    <p>Core words are a set of words that we use across huge numbers of different situations. These are words like 'help', 'look', 'more', 'stop', etc.  Core words are the sort of words that young children start using very early on, and therefore are the sort of words that we want to get started with straight away.</p>
    <p>A great way to get started with low tech AAC is to simply print off a communication chart of core vocabulary and use it whilst chatting in whatever situation you find yourself.</p>
    <p>You can incorporate the words into so many activities - e.g. for talking about watching "more" television or observing that someone is bored and wants to “stop”.  As the charts get more extensive, you will have access to words that enable you to describe what’s going on or how the child might be feeling, offer help, ask a question, and so on.</p>
    `,
  templateName: "Core",
  templateId: "core",
  templateImageUrl: "core.png",
  templateVariableGroups: [],

  format: "open-board-0.1",
  id: "core",
  locale: "en-GB",
  name: "Core",
  description_html:
    "Core words are a set of words that we use across huge numbers of different situations.",
  ext_launchpad_options: {
    gap: 3,
    button_border_width: 1,
    title_shown_on_board: "Core Vocabulary / Commenting Chart",
    full_background_color: "rgb(185,255,185)",
    copyright_notice: { type: "TemplateItem", id: "copyright-notice" },
    invert_symbol_and_label: true,
    autofit_label_text: true,
  },
  images: [
    {
      id: "dont-like",
      url: { type: "TemplateItem", id: "dont-like" },
    },

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
      id: "have",
      url: { type: "TemplateItem", id: "have" },
    },

    {
      id: "like",
      url: { type: "TemplateItem", id: "like" },
    },

    {
      id: "good",
      url: { type: "TemplateItem", id: "good" },
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
      id: "make",
      url: { type: "TemplateItem", id: "make" },
    },

    {
      id: "wow",
      url: { type: "TemplateItem", id: "wow" },
    },

    {
      id: "bad",
      url: { type: "TemplateItem", id: "bad" },
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
      id: "play",
      url: { type: "TemplateItem", id: "play" },
    },

    {
      id: "uh-oh",
      url: { type: "TemplateItem", id: "uh-oh" },
    },

    {
      id: "big",
      url: { type: "TemplateItem", id: "big" },
    },

    {
      id: "can",
      url: { type: "TemplateItem", id: "can" },
    },

    {
      id: "he",
      url: { type: "TemplateItem", id: "he" },
    },

    {
      id: "she",
      url: { type: "TemplateItem", id: "she" },
    },

    {
      id: "we",
      url: { type: "TemplateItem", id: "we" },
    },

    {
      id: "they",
      url: { type: "TemplateItem", id: "they" },
    },

    {
      id: "turn",
      url: { type: "TemplateItem", id: "turn" },
    },

    {
      id: "little",
      url: { type: "TemplateItem", id: "little" },
    },

    {
      id: "question",
      url: { type: "TemplateItem", id: "question" },
    },
  ],
  buttons: [
    {
      id: "dont-like",
      image_id: "dont-like",
      label: "don't like",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "more",
      image_id: "more",
      label: "more, again",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "help",
      image_id: "help",
      label: "help",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "want",
      image_id: "want",
      label: "want",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "have",
      image_id: "have",
      label: "have",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "like",
      image_id: "like",
      label: "like",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "good",
      image_id: "good",
      label: "good",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "no",
      image_id: "no",
      label: "no, not",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "stop",
      image_id: "stop",
      label: "stop, finished",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "different",
      image_id: "different",
      label: "different",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "look",
      image_id: "look",
      label: "look",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "make",
      image_id: "make",
      label: "make",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "wow",
      image_id: "wow",
      label: "wow",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "bad",
      image_id: "bad",
      label: "bad, yucky",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "this",
      image_id: "this",
      label: "this, that there",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "me",
      image_id: "me",
      label: "I, me, my, mine",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "you",
      image_id: "you",
      label: "you, your(s)",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "go",
      image_id: "go",
      label: "go",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "play",
      image_id: "play",
      label: "play",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "uh-oh",
      image_id: "uh-oh",
      label: "uh oh",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "big",
      image_id: "big",
      label: "big",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "can",
      image_id: "can",
      label: "Can I...",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "he",
      image_id: "he",
      label: "he, his",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "she",
      image_id: "she",
      label: "she, her(s)",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "we",
      image_id: "we",
      label: "we, our, us",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "they",
      image_id: "they",
      label: "they, their, them",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "turn",
      image_id: "turn",
      label: "turn",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "little",
      image_id: "little",
      label: "little",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "question",
      image_id: "question",
      label: "question",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
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

        // rows: 4,
        // columns: 7,
        // order: [
        //   ["more", "help", "want", "have", "like", "good", "no"],
        //   ["stop", "different", "look", "make", "wow", "bad", "this"],
        //   ["me", "you", "go", "play", "uh-oh", "big", "can"],
        //   ["he", "she", "we", "they", "turn", "little", "question"],
        // ],
      },
    },
  ],
};
