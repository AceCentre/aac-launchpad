import { Template } from "types";

export const threeByThree: Template = {
  templateCategory: "Symbol Charts",
  templateSubcategory: "Symbol Charts",
  templateShortDescription: "",

  templateFeatured: false,

  templateDateCreated: "2022-07-20T12:00:00+01:00",
  templateVariables: [],
  templateDescription: "Create a nine tile board with no variables",
  templateName: "Three by Three",
  templateId: "three-by-three",
  templateImageUrl: "three-by-three.png",
  templateVariableGroups: [],

  format: "open-board-0.1",
  id: "three-by-three",
  locale: "en-GB",
  name: "Three by Three",
  description_html: "A board with nine tiles",
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
    {
      id: "fifth",
      label: "Fifth",
      border_color: "rgb(0, 0, 55)",
      background_color: "rgb(200, 255, 255)",
    },
    {
      id: "sixth",
      label: "Sixth",
      border_color: "rgb(0, 0, 55)",
      background_color: "rgb(200, 255, 255)",
    },
    {
      id: "seventh",
      label: "Seventh",
      border_color: "rgb(0, 0, 55)",
      background_color: "rgb(200, 255, 255)",
    },
    {
      id: "eighth",
      label: "Eighth",
      border_color: "rgb(0, 0, 55)",
      background_color: "rgb(200, 255, 255)",
    },
    {
      id: "ninth",
      label: "Ninth",
      border_color: "rgb(0, 0, 55)",
      background_color: "rgb(200, 255, 255)",
    },
  ],
  images: [],
  pages: [
    {
      id: "first",
      grid: {
        rows: 3,
        columns: 3,
        order: [
          ["first", "second", "fifth"],
          ["third", "fourth", "sixth"],
          ["seventh", "eighth", "ninth"],
        ],
      },
    },
  ],
};
