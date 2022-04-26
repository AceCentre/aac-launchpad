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

export const threeByThree: Board = {
  format: "open-board-0.1",
  id: "singleTile",
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

export const alphabetChart: Board = {
  format: "open-board-0.1",
  id: "alphabetChart",
  locale: "en-GB",
  name: "Alphabet Chart",
  description_html: "Alphabet board to allow individuals to spell",
  ext_launchpad_options: {
    padding: 0,
    gap: 0,
    button_radius: 0,
    button_border_width: 0,
  },
  buttons: [
    {
      id: "1",
      label: "1",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "2",
      label: "2",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "3",
      label: "3",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "4",
      label: "4",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "5",
      label: "5",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "6",
      label: "6",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "7",
      label: "7",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "8",
      label: "8",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "9",
      label: "9",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "0",
      label: "0",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "a",
      label: "A",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "b",
      label: "B",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "c",
      label: "C",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "d",
      label: "D",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "e",
      label: "E",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "f",
      label: "F",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "g",
      label: "G",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "h",
      label: "H",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "i",
      label: "I",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "j",
      label: "j",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "k",
      label: "K",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "l",
      label: "L",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "m",
      label: "M",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "n",
      label: "N",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "o",
      label: "O",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "p",
      label: "P",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "q",
      label: "Q",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "r",
      label: "R",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "s",
      label: "S",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "t",
      label: "T",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "u",
      label: "U",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "v",
      label: "V",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "w",
      label: "W",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "x",
      label: "X",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "y",
      label: "Y",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "z",
      label: "Z",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: ".",
      label: ".",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "?",
      label: "?",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: ":",
      label: ":",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "%",
      label: "%",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "delete",
      label: "DELETE",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "space",
      label: "SPACE",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
    {
      id: "start-again",
      label: "START AGAIN",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
    },
  ],
  grid: {
    rows: 5,
    columns: 10,
    order: [
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
      ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
      ["k", "l", "m", "n", "o", "p", "q", "r", "s", "t"],
      ["u", "v", "w", "x", "y", "z", ".", "?", ":", "%"],
      [
        "delete",
        "delete",
        "delete",
        null,
        "space",
        "space",
        null,
        "start-again",
        "start-again",
        "start-again",
      ],
    ],
  },
};

export const ALL_TEMPLATES = [
  simpleSingleTile,
  twoByTwo,
  threeByThree,
  alphabetChart,
];
