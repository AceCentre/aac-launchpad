import { Template } from "types";

export const twoByTwo: Template = {
  templateVariables: [],
  templateDescription: "Create a four tile board with no variables",
  templateName: "Two by Two",

  format: "open-board-0.1",
  id: "two-by-two",
  locale: "en-GB",
  name: "Two by Two",
  description_html: "A board with four tiles",
  ext_launchpad_options: {},

  buttons: [
    {
      id: "first",
      label: "First",
      border_color: "rgb(0, 0, 55)",
      background_color: "rgb(200, 255, 255)",
    },
    {
      id: "second",
      label: "Second",
      border_color: "rgb(0, 0, 55)",
      background_color: "rgb(200, 255, 255)",
    },
    {
      id: "third",
      label: "Third",
      border_color: "rgb(0, 0, 55)",
      background_color: "rgb(200, 255, 255)",
    },
    {
      id: "fourth",
      label: "Fourth",
      border_color: "rgb(0, 0, 55)",
      background_color: "rgb(200, 255, 255)",
    },
  ],
  grid: {
    rows: 2,
    columns: 2,
    order: [
      ["first", "second"],
      ["third", "fourth"],
    ],
  },
};
