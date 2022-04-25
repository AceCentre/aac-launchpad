import { Board } from "types";

export const simpleSingleTile: Board = {
  format: "open-board-0.1",
  id: "singleTile",
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

export const twoByTwo: Board = {
  format: "open-board-0.1",
  id: "singleTile",
  locale: "en-GB",
  name: "Simple Single Tile",
  description_html: "A board with a single tile in the centre",
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

export const threeByThree: Board = {
  format: "open-board-0.1",
  id: "singleTile",
  locale: "en-GB",
  name: "Simple Single Tile",
  description_html: "A board with a single tile in the centre",
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
  grid: {
    rows: 3,
    columns: 3,
    order: [
      ["first", "second", "fifth"],
      ["third", "fourth", "sixth"],
      ["seventh", "eighth", "ninth"],
    ],
  },
};

export const ALL_TEMPLATES = [simpleSingleTile, twoByTwo];
