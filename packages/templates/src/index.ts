import { Board } from "types";

export const simpleSingleTile: Board = {
  format: "open-board-0.1",
  id: "singleTile",
  locale: "en-GB",
  name: "Simple Single Tile",
  description_html: "A board with a single tile in the centre",

  buttons: [
    {
      id: "main",
      label: "Core",
      border_color: "rgb(0, 0, 55)",
      background_color: "rgba(200, 255, 255, 0.2)",
    },
  ],
  grid: {
    rows: 1,
    columns: 1,
    order: [["main"]],
  },
};

export const twoByTwo: Board = {
  format: "open-board-0.1",
  id: "singleTile",
  locale: "en-GB",
  name: "Simple Single Tile",
  description_html: "A board with a single tile in the centre",

  buttons: [
    {
      id: "first",
      label: "First",
      border_color: "rgb(0, 0, 55)",
      background_color: "rgba(200, 255, 255, 0.2)",
    },
    {
      id: "second",
      label: "Second",
      border_color: "rgb(0, 0, 55)",
      background_color: "rgba(200, 255, 255, 0.2)",
    },
    {
      id: "third",
      label: "Third",
      border_color: "rgb(0, 0, 55)",
      background_color: "rgba(200, 255, 255, 0.2)",
    },
    {
      id: "fourth",
      label: "Fourth",
      border_color: "rgb(0, 0, 55)",
      background_color: "rgba(200, 255, 255, 0.2)",
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

export const ALL_TEMPLATES = [simpleSingleTile, twoByTwo];
