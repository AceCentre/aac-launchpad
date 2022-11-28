import { Template } from "types";

export const alphabetChart: Template = {
  templateFeatured: false,
  templateCategory: "Symbol Charts",
  templateSubcategory: "Symbol Charts",
  templateShortDescription: "",

  templateVariables: [
    // {
    //   id: "layout",
    //   name: "Layout",
    //   description: "The layout of the letters on the alphabet chart",
    //   type: "preset",
    //   defaultValue: "abc-with-digits",
    //   presets: [
    //     {
    //       value: "abc-with-digits",
    //       label: "ABC (with digits)",
    //       description: "Alphabetical order, including a row of digits.",
    //       variableValues: [],
    //     },
    //   ],
    // },
    {
      id: "backgroundColor",
      description: "The color of the background",
      type: "color",
      name: "Background Color",
      defaultValue: "rgb(255,255,255)",
      hidden: true,
    },
    {
      id: "textColor",
      description: "The color of the text",
      type: "color",
      name: "Text Color",
      defaultValue: "rgb(0,0,0)",
      hidden: true,
    },
    {
      id: "borderColor",
      description: "The color of the border",
      type: "color",
      name: "Border Color",
      defaultValue: "rgb(0,0,0)",
      hidden: true,
    },
  ],
  templateVariableGroups: [],
  templateId: "alphabet-chart",
  templateDateCreated: "2022-07-20T12:00:00+01:00",
  templateDescription: "Create an alphabet chart with custom colors",
  templateName: "Alphabet Chart Template",
  templateImageUrl: "alphabet-chart.png",

  format: "open-board-0.1",
  id: "alphabet-chart",
  locale: "en-GB",
  name: "Alphabet Chart",
  description_html: "Alphabet board to allow individuals to spell",
  ext_launchpad_options: {
    padding: 10,
    gap: 0,
    button_radius: 0,
    button_border_width: 1,
  },
  buttons: [
    {
      id: "null",
      label: "",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 20,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "1",
      label: "1",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "2",
      label: "2",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "3",
      label: "3",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "4",
      label: "4",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "5",
      label: "5",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "6",
      label: "6",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "7",
      label: "7",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "8",
      label: "8",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "9",
      label: "9",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "0",
      label: "0",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "a",
      label: "A",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "b",
      label: "B",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "c",
      label: "C",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "d",
      label: "D",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "e",
      label: "E",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "f",
      label: "F",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "g",
      label: "G",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "h",
      label: "H",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "i",
      label: "I",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "j",
      label: "J",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "k",
      label: "K",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "l",
      label: "L",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "m",
      label: "M",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "n",
      label: "N",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "o",
      label: "O",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "p",
      label: "P",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "q",
      label: "Q",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "r",
      label: "R",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "s",
      label: "S",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "t",
      label: "T",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "u",
      label: "U",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "v",
      label: "V",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "w",
      label: "W",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "x",
      label: "X",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "y",
      label: "Y",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "z",
      label: "Z",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: ",",
      label: ",",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: ".",
      label: ".",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "?",
      label: "?",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "!",
      label: "!",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "delete",
      label: "DELETE",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 20,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "delete-letter",
      label: "DELETE\nLETTER",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 20,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "space",
      label: "SPACE",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 20,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "start-again",
      label: "START AGAIN",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 20,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "start-again-new-line",
      label: "START\nAGAIN",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 20,
      ext_launchpad_label_font_style: "bold",
    },

    {
      id: "empty-cell-one",
      label: "",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 20,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "empty-cell-two",
      label: "",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 20,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "empty-cell-three",
      label: "",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 20,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "empty-cell-four",
      label: "",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 20,
      ext_launchpad_label_font_style: "bold",
    },
  ],
  images: [],
  pages: [
    {
      id: "abc-with-numbers",
      grid: {
        rows: 5,
        columns: 10,
        order: [
          ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
          ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
          ["k", "l", "m", "n", "o", "p", "q", "r", "s", "t"],
          ["u", "v", "w", "x", "y", "z", ",", ".", "?", "!"],
          [
            "delete",
            "delete",
            "delete",
            "space",
            "space",
            "space",
            "space",
            "start-again",
            "start-again",
            "start-again",
          ],
        ],
      },
    },
    {
      id: "abc-no-numbers",
      grid: {
        rows: 4,
        columns: 10,
        order: [
          ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
          ["k", "l", "m", "n", "o", "p", "q", "r", "s", "t"],
          ["u", "v", "w", "x", "y", "z", ",", ".", "?", "!"],
          [
            "delete",
            "delete",
            "delete",
            "space",
            "space",
            "space",
            "space",
            "start-again",
            "start-again",
            "start-again",
          ],
        ],
      },
    },
    {
      id: "abc-with-numbers-and-spaces",
      grid: {
        rows: 6,
        columns: 10,
        order: [
          ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
          ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
          ["k", "l", "m", "n", "o", "p", "q", "r", "s", "t"],
          ["u", "v", "w", "x", "y", "z", ",", ".", "?", "!"],
          [
            "delete",
            "delete",
            "delete",
            "space",
            "space",
            "space",
            "space",
            "start-again",
            "start-again",
            "start-again",
          ],
          [
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
          ],
        ],
      },
    },
    {
      id: "abc-no-numbers-and-spaces",
      grid: {
        rows: 5,
        columns: 10,
        order: [
          ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
          ["k", "l", "m", "n", "o", "p", "q", "r", "s", "t"],
          ["u", "v", "w", "x", "y", "z", ",", ".", "?", "!"],
          [
            "delete",
            "delete",
            "delete",
            "space",
            "space",
            "space",
            "space",
            "start-again",
            "start-again",
            "start-again",
          ],
          [
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
          ],
        ],
      },
    },
    {
      id: "abc-no-numbers-and-spaces",
      grid: {
        rows: 5,
        columns: 10,
        order: [
          ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
          ["k", "l", "m", "n", "o", "p", "q", "r", "s", "t"],
          ["u", "v", "w", "x", "y", "z", ",", ".", "?", "!"],
          [
            "delete",
            "delete",
            "delete",
            "space",
            "space",
            "space",
            "space",
            "start-again",
            "start-again",
            "start-again",
          ],
          [
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
          ],
        ],
      },
    },
    {
      id: "abc-portrait-no-space",
      orientation: "portrait",
      grid: {
        rows: 8,
        columns: 4,
        order: [
          ["a", "b", "c", "d"],
          ["e", "f", "g", "h"],
          ["i", "j", "k", "l"],
          ["m", "n", "o", "p"],
          ["q", "r", "s", "t"],
          ["u", "v", "w", "x"],
          [".", "y", "z", "?"],
          ["delete", "space", "space", "start-again-new-line"],
        ],
      },
    },
    {
      id: "abc-portrait-with-space",
      orientation: "portrait",
      grid: {
        rows: 9,
        columns: 4,
        order: [
          ["a", "b", "c", "d"],
          ["e", "f", "g", "h"],
          ["i", "j", "k", "l"],
          ["m", "n", "o", "p"],
          ["q", "r", "s", "t"],
          ["u", "v", "w", "x"],
          [".", "y", "z", "?"],
          ["delete", "space", "space", "start-again-new-line"],
          [
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
          ],
        ],
      },
    },
    {
      id: "qwerty-with-numbers",
      grid: {
        rows: 5,
        columns: 10,
        order: [
          ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
          ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
          ["a", "s", "d", "f", "g", "h", "j", "k", "l", "?"],
          ["!", "z", "x", "c", "v", "b", "n", "m", ",", "."],
          [
            "delete",
            "delete",
            "delete",
            "space",
            "space",
            "space",
            "space",
            "start-again",
            "start-again",
            "start-again",
          ],
        ],
      },
    },
    {
      id: "qwerty-no-numbers",
      grid: {
        rows: 4,
        columns: 10,
        order: [
          ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
          ["a", "s", "d", "f", "g", "h", "j", "k", "l", "?"],
          ["!", "z", "x", "c", "v", "b", "n", "m", ",", "."],
          [
            "delete",
            "delete",
            "delete",
            "space",
            "space",
            "space",
            "space",
            "start-again",
            "start-again",
            "start-again",
          ],
        ],
      },
    },
    {
      id: "qwerty-no-numbers-and-spaces",
      grid: {
        rows: 5,
        columns: 10,
        order: [
          ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
          ["a", "s", "d", "f", "g", "h", "j", "k", "l", "?"],
          ["!", "z", "x", "c", "v", "b", "n", "m", ",", "."],
          [
            "delete",
            "delete",
            "delete",
            "space",
            "space",
            "space",
            "space",
            "start-again",
            "start-again",
            "start-again",
          ],
          [
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
          ],
        ],
      },
    },
    {
      id: "qwerty-with-numbers-and-spaces",
      grid: {
        rows: 6,
        columns: 10,
        order: [
          ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
          ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
          ["a", "s", "d", "f", "g", "h", "j", "k", "l", "?"],
          ["!", "z", "x", "c", "v", "b", "n", "m", ",", "."],
          [
            "delete",
            "delete",
            "delete",
            "space",
            "space",
            "space",
            "space",
            "start-again",
            "start-again",
            "start-again",
          ],
          [
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
          ],
        ],
      },
    },
    {
      id: "frequency",
      grid: {
        rows: 6,
        columns: 6,
        order: [
          ["space", "e", "a", "r", "d", "u"],
          ["t", "o", "i", "l", "g", "v"],
          ["n", "s", "f", "y", "x", "."],
          ["h", "c", "p", "k", "j", ","],
          ["m", "b", "w", "q", "z", "?"],
          [
            "delete-letter",
            "start-again-new-line",
            "delete",
            "empty-cell-one",
            "empty-cell-two",
            "empty-cell-three",
            "empty-cell-four",
          ],
        ],
      },
    },
    {
      id: "frequency-with-row-labels",
      ext_launchpad_with_row_labels: true,
      grid: {
        rows: 6,
        columns: 6,
        order: [
          ["space", "e", "a", "r", "d", "u"],
          ["t", "o", "i", "l", "g", "v"],
          ["n", "s", "f", "y", "x", "."],
          ["h", "c", "p", "k", "j", ","],
          ["m", "b", "w", "q", "z", "?"],
          [
            "delete-letter",
            "start-again-new-line",
            "delete",
            "empty-cell-one",
            "empty-cell-two",
            "empty-cell-three",
            "empty-cell-four",
          ],
        ],
      },
    },
  ],
};
