import { Template } from "types";

export const portrait: Template = {
  templateCategory: "Symbol Charts",
  templateSubcategory: "Portrait",
  templateShortDescription: "",

  templateFeatured: false,

  templateDateCreated: "2022-07-20T12:00:00+01:00",
  templateVariables: [],
  templateDescription: "Create a document in portrait mode",
  templateName: "Portrait",
  templateId: "single-tile",
  templateImageUrl: "single-tile.png",
  templateVariableGroups: [],

  format: "open-board-0.1",
  id: "portrait",
  locale: "en-GB",
  name: "Portrait",
  description_html: "Create a document in portrait mode",
  ext_launchpad_options: {},
  images: [],
  buttons: [
    {
      id: "main",
      label: "Core",
      border_color: "rgb(0, 0, 55)",
      background_color: "rgb(255, 0, 0)",
    },
  ],

  pages: [
    {
      id: "first",
      orientation: "portrait",
      grid: {
        rows: 1,
        columns: 1,
        order: [["main"]],
      },
    },
  ],
};
