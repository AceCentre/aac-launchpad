import { Template } from "types";

export const prependPdf: Template = {
  templateCategory: "Symbol Charts",
  templateSubcategory: "Symbol Charts",

  templateFeatured: false,

  templateDateCreated: "2022-07-20T12:00:00+01:00",
  templateVariables: [],
  templateDescription: "Prepends a simple pdf",
  templateName: "Prepend PDF",
  templateId: "prepend-pdf",
  templateImageUrl: "single-tile.png",
  templateVariableGroups: [],

  format: "open-board-0.1",
  id: "prepend-pdf",
  locale: "en-GB",
  name: "Prepend PDF",
  description_html: "Prepends a simple pdf",
  ext_launchpad_options: {
    ext_launchpad_prepend_pdf: "./front-page.pdf",
  },
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
      grid: {
        rows: 1,
        columns: 1,
        order: [["main"]],
      },
    },
  ],
};
