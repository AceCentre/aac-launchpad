import { Template } from "types";

export const multiplePages: Template = {
  templateCategory: "Symbol Charts",
  templateSubcategory: "Symbol Charts",
  templateShortDescription: "",

  templateFeatured: false,

  templateDateCreated: "2022-07-20T12:00:00+01:00",
  templateVariables: [],
  templateDescription: "Create a multiple pages board with no variables",
  templateName: "Multiple Pages",
  templateId: "multiple-pages",
  templateImageUrl: "single-tile.png",
  templateVariableGroups: [],

  format: "open-board-0.1",
  id: "multiple-pages",
  locale: "en-GB",
  name: "Multiple Pages",
  description_html: "A board with multiple pages",
  ext_launchpad_options: {},
  images: [],
  buttons: [
    {
      id: "first",
      label: "Page One",
      border_color: "rgb(0, 0, 55)",
      background_color: "rgb(255, 0, 0)",
    },
    {
      id: "second",
      label: "Page Two",
      border_color: "rgb(0, 0, 55)",
      background_color: "rgb(255, 0, 0)",
    },
  ],

  pages: [
    {
      id: "first",
      grid: {
        rows: 1,
        columns: 1,
        order: [["first"]],
      },
    },
    {
      id: "second",
      grid: {
        rows: 1,
        columns: 1,
        order: [["second"]],
      },
    },
  ],
};
