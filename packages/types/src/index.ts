type BoardID = string;
type ButtonID = string;

/**
 * Color attributes are string values and can be represented as rgb or rgba values.
 */
type Color = string;

type Button = {
  id: ButtonID;
  label: string;
  border_color: Color;
  background_color: Color;
};

type Grid = {
  rows: number;
  columns: number;
  order: Array<Array<ButtonID>>;
};

export type Board = {
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

  buttons: Button[];
  grid: Grid;
};
