import { FONT_OPTIONS } from "board-to-pdf";
import { Template } from "types";

export const core: Template = {
  templateDateCreated: "2022-07-20T12:00:00+01:00",
  templateCategory: "Symbol Charts",
  templateSubcategory: "Symbol charts with core vocabulary",
  templateFeatured: false,
  templateShortDescription:
    "Core words are a set of words that we use across huge numbers of different situations. Customise the core chart to your needs, including the font and symbol set.",

  templateVariables: [
    {
      id: "background-colour",
      name: "Background Colour",
      description:
        "Change the background colour of the chart. Select white to save printer ink.",
      defaultValue: "rgb(185,255,185)",
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
      defaultValue: "Widgit Symbols © Widgit Software 2002-2023 www.widgit.com",
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
    // {
    //   id: "language",
    //   type: "preset",
    //   name: "Language",
    //   defaultValue: "english",
    //   description: "The language on the chart",
    //   presets: [
    //     {
    //       label: "English",
    //       value: "english",
    //       description: "English",
    //       variableValues: [
    //         {
    //           id: "title-text",
    //           value: "Core Vocabulary / Commenting Chart",
    //         },

    //         {
    //           id: "dont-like-label",
    //           value: "don't like",
    //         },

    //         {
    //           id: "more-label",
    //           value: "more, again",
    //         },

    //         {
    //           id: "help-label",
    //           value: "help",
    //         },

    //         {
    //           id: "want-label",
    //           value: "want",
    //         },

    //         {
    //           id: "have-label",
    //           value: "have",
    //         },

    //         {
    //           id: "like-label",
    //           value: "like",
    //         },

    //         {
    //           id: "good-label",
    //           value: "good",
    //         },

    //         {
    //           id: "no-label",
    //           value: "no, not",
    //         },

    //         {
    //           id: "stop-label",
    //           value: "stop, finished",
    //         },

    //         {
    //           id: "different-label",
    //           value: "different",
    //         },

    //         {
    //           id: "look-label",
    //           value: "look",
    //         },

    //         {
    //           id: "make-label",
    //           value: "make",
    //         },

    //         {
    //           id: "wow-label",
    //           value: "wow",
    //         },

    //         {
    //           id: "bad-label",
    //           value: "bad, yucky",
    //         },

    //         {
    //           id: "this-label",
    //           value: "this, that, there",
    //         },

    //         {
    //           id: "me-label",
    //           value: "I, me, my, mine",
    //         },

    //         {
    //           id: "you-label",
    //           value: "you, your(s)",
    //         },

    //         {
    //           id: "go-label",
    //           value: "go",
    //         },

    //         {
    //           id: "play-label",
    //           value: "play",
    //         },

    //         {
    //           id: "uh-oh-label",
    //           value: "uh oh",
    //         },

    //         {
    //           id: "big-label",
    //           value: "big",
    //         },

    //         {
    //           id: "can-label",
    //           value: "Can I...",
    //         },

    //         {
    //           id: "he-label",
    //           value: "he, his",
    //         },

    //         {
    //           id: "she-label",
    //           value: "she, her(s)",
    //         },

    //         {
    //           id: "we-label",
    //           value: "we, our, us",
    //         },

    //         {
    //           id: "they-label",
    //           value: "they, their, them",
    //         },

    //         {
    //           id: "turn-label",
    //           value: "turn",
    //         },

    //         {
    //           id: "little-label",
    //           value: "little",
    //         },

    //         {
    //           id: "question-label",
    //           value: "question",
    //         },
    //       ],
    //     },
    //     {
    //       label: "French",
    //       value: "french",
    //       description: "French",
    //       variableValues: [
    //         {
    //           id: "title-text",
    //           value: "Vocabulaire de base / Tableau de commentaires",
    //         },

    //         {
    //           id: "dont-like-label",
    //           value: "n'aime pas",
    //         },

    //         {
    //           id: "more-label",
    //           value: "plus encore",
    //         },

    //         {
    //           id: "help-label",
    //           value: "aider",
    //         },

    //         {
    //           id: "want-label",
    //           value: "vouloir",
    //         },

    //         {
    //           id: "have-label",
    //           value: "ont",
    //         },

    //         {
    //           id: "like-label",
    //           value: "aimer",
    //         },

    //         {
    //           id: "good-label",
    //           value: "bien",
    //         },

    //         {
    //           id: "no-label",
    //           value: "non, pas",
    //         },

    //         {
    //           id: "stop-label",
    //           value: "arrête, fini",
    //         },

    //         {
    //           id: "different-label",
    //           value: "différent",
    //         },

    //         {
    //           id: "look-label",
    //           value: "voir",
    //         },

    //         {
    //           id: "make-label",
    //           value: "Fabriquer",
    //         },

    //         {
    //           id: "wow-label",
    //           value: "wow",
    //         },

    //         {
    //           id: "bad-label",
    //           value: "mauvais, dégueulasse",
    //         },

    //         {
    //           id: "this-label",
    //           value: "ceci, cela, là",
    //         },

    //         {
    //           id: "me-label",
    //           value: "Je, moi, mon, mien",
    //         },

    //         {
    //           id: "you-label",
    //           value: "toi, le tien",
    //         },

    //         {
    //           id: "go-label",
    //           value: "aller",
    //         },

    //         {
    //           id: "play-label",
    //           value: "jouer",
    //         },

    //         {
    //           id: "uh-oh-label",
    //           value: "euh oh",
    //         },

    //         {
    //           id: "big-label",
    //           value: "gros",
    //         },

    //         {
    //           id: "can-label",
    //           value: "est-ce-que je peux...",
    //         },

    //         {
    //           id: "he-label",
    //           value: "lui, son",
    //         },

    //         {
    //           id: "she-label",
    //           value: "elle, le sien",
    //         },

    //         {
    //           id: "we-label",
    //           value: "nous, notre, nous",
    //         },

    //         {
    //           id: "they-label",
    //           value: "ils, leur, eux",
    //         },

    //         {
    //           id: "turn-label",
    //           value: "tour",
    //         },

    //         {
    //           id: "little-label",
    //           value: "peu",
    //         },

    //         {
    //           id: "question-label",
    //           value: "question",
    //         },
    //       ],
    //     },
    //   ],
    // },
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
          label: "High Contrast PCS",
          value: "high_contrast_pcs",
          description: "High Contrast version of PCS Symbols",
          variableValues: [
            {
              id: "copyright-notice",
              value:
                "PCS is a trademark of Tobii Dynavox LLC. All rights reserved. Used with permission.",
            },
            {
              id: "dont-like",
              value: "./symbols/high_contrast_pcs/dont-like.png",
            },

            {
              id: "more",
              value: "./symbols/high_contrast_pcs/more.png",
            },

            {
              id: "help",
              value: "./symbols/high_contrast_pcs/help.png",
            },

            {
              id: "want",
              value: "./symbols/high_contrast_pcs/want.png",
            },

            {
              id: "have",
              value: "./symbols/high_contrast_pcs/have.png",
            },

            {
              id: "like",
              value: "./symbols/high_contrast_pcs/like.png",
            },

            {
              id: "good",
              value: "./symbols/high_contrast_pcs/good.png",
            },

            {
              id: "no",
              value: "./symbols/high_contrast_pcs/no.png",
            },

            {
              id: "stop",
              value: "./symbols/high_contrast_pcs/stop.png",
            },

            {
              id: "different",
              value: "./symbols/high_contrast_pcs/different.png",
            },

            {
              id: "look",
              value: "./symbols/high_contrast_pcs/look.png",
            },

            {
              id: "make",
              value: "./symbols/high_contrast_pcs/make.png",
            },

            {
              id: "wow",
              value: "./symbols/high_contrast_pcs/wow.png",
            },

            {
              id: "bad",
              value: "./symbols/high_contrast_pcs/bad.png",
            },

            {
              id: "this",
              value: "./symbols/high_contrast_pcs/this.png",
            },

            {
              id: "me",
              value: "./symbols/high_contrast_pcs/me.png",
            },

            {
              id: "you",
              value: "./symbols/high_contrast_pcs/you.png",
            },

            {
              id: "go",
              value: "./symbols/high_contrast_pcs/go.png",
            },

            {
              id: "play",
              value: "./symbols/high_contrast_pcs/play.png",
            },

            {
              id: "uh-oh",
              value: "./symbols/high_contrast_pcs/uh-oh.png",
            },

            {
              id: "big",
              value: "./symbols/high_contrast_pcs/big.png",
            },

            {
              id: "can",
              value: "./symbols/high_contrast_pcs/can.png",
            },

            {
              id: "he",
              value: "./symbols/high_contrast_pcs/he.png",
            },

            {
              id: "she",
              value: "./symbols/high_contrast_pcs/she.png",
            },

            {
              id: "we",
              value: "./symbols/high_contrast_pcs/we.png",
            },

            {
              id: "they",
              value: "./symbols/high_contrast_pcs/they.png",
            },

            {
              id: "turn",
              value: "./symbols/high_contrast_pcs/turn.png",
            },

            {
              id: "little",
              value: "./symbols/high_contrast_pcs/little.png",
            },

            {
              id: "question",
              value: "./symbols/high_contrast_pcs/question.png",
            },
          ],
        },
        // {
        //   label: "SymbolStix",
        //   value: "ss",
        //   description: "SymbolStix Symbols",
        //   variableValues: [
        //     {
        //       id: "copyright-notice",
        //       value: "(c) SymbolStix 2022 LLC",
        //     },
        //     {
        //       id: "dont-like",
        //       value: "./symbols/ss/dont-like.png",
        //     },

        //     {
        //       id: "more",
        //       value: "./symbols/ss/more.png",
        //     },

        //     {
        //       id: "help",
        //       value: "./symbols/ss/help.png",
        //     },

        //     {
        //       id: "want",
        //       value: "./symbols/ss/want.png",
        //     },

        //     {
        //       id: "have",
        //       value: "./symbols/ss/have.png",
        //     },

        //     {
        //       id: "like",
        //       value: "./symbols/ss/like.png",
        //     },

        //     {
        //       id: "good",
        //       value: "./symbols/ss/good.png",
        //     },

        //     {
        //       id: "no",
        //       value: "./symbols/ss/no.png",
        //     },

        //     {
        //       id: "stop",
        //       value: "./symbols/ss/stop.png",
        //     },

        //     {
        //       id: "different",
        //       value: "./symbols/ss/different.png",
        //     },

        //     {
        //       id: "look",
        //       value: "./symbols/ss/look.png",
        //     },

        //     {
        //       id: "make",
        //       value: "./symbols/ss/make.png",
        //     },

        //     {
        //       id: "wow",
        //       value: "./symbols/ss/wow.png",
        //     },

        //     {
        //       id: "bad",
        //       value: "./symbols/ss/bad.png",
        //     },

        //     {
        //       id: "this",
        //       value: "./symbols/ss/this.png",
        //     },

        //     {
        //       id: "me",
        //       value: "./symbols/ss/me.png",
        //     },

        //     {
        //       id: "you",
        //       value: "./symbols/ss/you.png",
        //     },

        //     {
        //       id: "go",
        //       value: "./symbols/ss/go.png",
        //     },

        //     {
        //       id: "play",
        //       value: "./symbols/ss/play.png",
        //     },

        //     {
        //       id: "uh-oh",
        //       value: "./symbols/ss/uh-oh.png",
        //     },

        //     {
        //       id: "big",
        //       value: "./symbols/ss/big.png",
        //     },

        //     {
        //       id: "can",
        //       value: "./symbols/ss/can.png",
        //     },

        //     {
        //       id: "he",
        //       value: "./symbols/ss/he.png",
        //     },

        //     {
        //       id: "she",
        //       value: "./symbols/ss/she.png",
        //     },

        //     {
        //       id: "we",
        //       value: "./symbols/ss/we.png",
        //     },

        //     {
        //       id: "they",
        //       value: "./symbols/ss/they.png",
        //     },

        //     {
        //       id: "turn",
        //       value: "./symbols/ss/turn.png",
        //     },

        //     {
        //       id: "little",
        //       value: "./symbols/ss/little.png",
        //     },

        //     {
        //       id: "question",
        //       value: "./symbols/ss/question.png",
        //     },
        //   ],
        // },
        {
          label: "Widgit",
          value: "widgit",
          description: "Widgit Symbols",
          variableValues: [
            {
              id: "copyright-notice",
              value:
                "Widgit Symbols © Widgit Software 2002-2023 www.widgit.com",
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
      description: "The number of items shown on the chart",
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
      name: "have",
      id: "have-label",
      description: "have",
      hidden: true,
      defaultValue: "have",
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
      name: "good",
      id: "good-label",
      description: "good",
      hidden: true,
      defaultValue: "good",
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
      name: "make",
      id: "make-label",
      description: "make",
      hidden: true,
      defaultValue: "make",
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
      name: "bad",
      id: "bad-label",
      description: "bad",
      hidden: true,
      defaultValue: "bad, yucky",
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
      name: "play",
      id: "play-label",
      description: "play",
      hidden: true,
      defaultValue: "play",
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
      name: "big",
      id: "big-label",
      description: "big",
      hidden: true,
      defaultValue: "big",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "can",
      id: "can-label",
      description: "can",
      hidden: true,
      defaultValue: "Can I...",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "he",
      id: "he-label",
      description: "he",
      hidden: true,
      defaultValue: "he, his",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "she",
      id: "she-label",
      description: "she",
      hidden: true,
      defaultValue: "she, her(s)",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "we",
      id: "we-label",
      description: "we",
      hidden: true,
      defaultValue: "we, our, us",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "they",
      id: "they-label",
      description: "they",
      hidden: true,
      defaultValue: "they, their, them",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "turn",
      id: "turn-label",
      description: "turn",
      hidden: true,
      defaultValue: "turn",
      maxLength: 100,
    },
    {
      type: "freeText",
      name: "little",
      id: "little-label",
      description: "little",
      hidden: true,
      defaultValue: "little",
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
  templateDescription: `
    <p>Core words are a set of words that we use across huge numbers of different situations. These are words like 'help', 'look', 'more', 'stop', etc.  Core words are the sort of words that young children start using very early on, and therefore are the sort of words that we want to get started with straight away.</p>
    <p>A great way to get started with low tech AAC is to simply print off a communication chart of core vocabulary and use it whilst chatting in whatever situation you find yourself.</p>
    <p>You can incorporate the words into so many activities - e.g. for talking about watching "more" television or observing that someone is bored and wants to “stop”.  As the charts get more extensive, you will have access to words that enable you to describe what’s going on or how the child might be feeling, offer help, ask a question, and so on.</p>
    `,
  templateName: "Core",
  templateId: "core-launchpad",
  templateImageUrl: "core.png",
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
    gap: { type: "TemplateItem", id: "gap" },
    padding: { type: "TemplateItem", id: "padding" },
    button_border_width: 1,
    title_shown_on_board: { type: "TemplateItem", id: "title-text" },
    full_background_color: { type: "TemplateItem", id: "background-colour" },
    copyright_notice: { type: "TemplateItem", id: "copyright-notice" },
    invert_symbol_and_label: { type: "TemplateItem", id: "invert-text" },
    autofit_label_text: true,
    use_ace_branding: true,
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
      label: { type: "TemplateItem", id: "dont-like-label" },
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
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
      id: "have",
      image_id: "have",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "have-label" },
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
      id: "good",
      image_id: "good",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "good-label" },
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
      id: "make",
      image_id: "make",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "make-label" },

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
      id: "bad",
      image_id: "bad",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "bad-label" },
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
      id: "play",
      image_id: "play",
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
      id: "big",
      image_id: "big",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "big-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "can",
      image_id: "can",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "can-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "he",
      image_id: "he",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "he-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "she",
      image_id: "she",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "she-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "we",
      image_id: "we",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "we-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "they",
      image_id: "they",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "they-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "turn",
      image_id: "turn",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "turn-label" },
      border_color: "rgb(0, 0, 0)",
      background_color: { type: "TemplateItem", id: "cell-colour" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "little",
      image_id: "little",
      ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
      label: { type: "TemplateItem", id: "little-label" },
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
