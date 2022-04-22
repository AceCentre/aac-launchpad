type BoardID = string;
type ButtonID = string;

/**
 * Color attributes are string values and can be represented as rgb or rgba values.
 */
type Color = string;

type Button = {
  id: ButtonID;
  label: String;
  border_color: Color;
  background_color: Color;
};

type Grid = {
  rows: number;
  columns: number;
  order: [[ButtonID]];
};

type Board = {
  format: "open-board-0.1";
  id: BoardID;
  locale: "en-GB";
  url?: string;
  name: string;

  /**
   * The standard allows you to include html in this field, but this implementation
   * only allows text and will render the html as plain text. This is to avoid having
   * to worrying about parsing the html safely
   */
  description_html: string;

  buttons: [Button];
  grid: Grid;
};

const simpleSingleTile: Board = {
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

export const ALL_TEMPLATES = [simpleSingleTile];
