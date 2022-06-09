import { Template } from "types";

export const core: Template = {
  templateVariables: [
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
  },
  images: [],
  buttons: [
    {
      id: "dont-like",
      label: "don't like",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "more",
      label: "more, again",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "help",
      label: "help",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "want",
      label: "want",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "have",
      label: "have",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "like",
      label: "like",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "good",
      label: "good",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "no",
      label: "no, not",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "stop",
      label: "stop, finished",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font_size: 14,
    },
    {
      id: "different",
      label: "different",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "look",
      label: "look",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "make",
      label: "make",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "wow",
      label: "wow",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "bad",
      label: "bad, yucky",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "this",
      label: "this, that there",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font_size: 14,
    },
    {
      id: "me",
      label: "I, me, my, mine",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font_size: 14,
    },
    {
      id: "you",
      label: "you, your(s)",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "go",
      label: "go",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "play",
      label: "play",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "uh-oh",
      label: "uh oh",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "big",
      label: "big",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "can",
      label: "Can I...",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "he",
      label: "he, his",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "she",
      label: "she, her(s)",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "we",
      label: "we, our, us",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font_size: 16,
    },
    {
      id: "they",
      label: "they, their, them",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      ext_launchpad_label_font_size: 14,
    },
    {
      id: "turn",
      label: "turn",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "little",
      label: "little",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "question",
      label: "question",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
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
