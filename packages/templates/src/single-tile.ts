import { Template } from "types";

export const simpleSingleTile: Template = {
  templateVariables: [],
  templateDescription: "Create a single tile board with no variables",
  templateName: "Simple Single Tile",

  format: "open-board-0.1",
  id: "single-tile",
  locale: "en-GB",
  name: "Simple Single Tile",
  description_html: "A board with a single tile in the centre",
  ext_launchpad_options: {},
  buttons: [
    {
      id: "main",
      label: "Core",
      border_color: "rgb(0, 0, 55)",
      background_color: "rgb(255, 0, 0)",
    },
  ],
  grid: {
    rows: 1,
    columns: 1,
    order: [["main"]],
  },
};
