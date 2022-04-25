import { Board } from "types";
import { jsPDF } from "jspdf";

type ButtonDimensions = {
  width: number;
  height: number;
};

type RBG = {
  red: number;
  green: number;
  blue: number;
};

const WIDTH = 297;
const HEIGHT = 210;
const PADDING = 10;
const GAP = 10;
const ROUNDED_BUTTONS = 2;
const LINE_WIDTH = 2;

const calculateButtonSize = (
  pageWidth: number,
  pageHeight: number,
  padding: number,
  gap: number,
  rows: number,
  columns: number
): ButtonDimensions => {
  const widthLostToPadding = padding * 2;
  const widthDistanceLostToGap = (columns - 1) * gap;
  const totalButtonWidth =
    pageWidth - widthLostToPadding - widthDistanceLostToGap;
  const buttonWidth = totalButtonWidth / columns;

  const heightLostToPadding = padding * 2;
  const heightLostToGap = (rows - 1) * gap;
  const totalButtonHeight = pageHeight - heightLostToGap - heightLostToPadding;
  const buttonHeight = totalButtonHeight / rows;

  return { width: buttonWidth, height: buttonHeight };
};

const getRGB = (input: String): RBG => {
  if (!input.startsWith("rgb(") || !input.endsWith(")")) {
    throw new Error(
      `Failed to parse '${input}' into an RGB color. Please specify your colors as RGB values. For example: rgb(255, 0, 0)`
    );
  }

  const [red, green, blue] = input
    .replace("rgb(", "")
    .replace(")", "")
    .split(",")
    .map((x) => x.trim())
    .map((x) => parseInt(x));

  return { red, green, blue };
};

const boardToPdf = (board: Board, saveLocation: string) => {
  // Default export is a4 paper, portrait, using millimeters for units
  const doc = new jsPDF({
    orientation: "landscape",
  });

  const buttonDimensions = calculateButtonSize(
    WIDTH,
    HEIGHT,
    PADDING,
    GAP,
    board.grid.rows,
    board.grid.columns
  );

  for (let rowCount = 0; rowCount < board.grid.rows; rowCount++) {
    for (let columnCount = 0; columnCount < board.grid.columns; columnCount++) {
      const currentButtonId = board.grid.order[rowCount][columnCount];

      const currentButton = board.buttons.find((x) => x.id === currentButtonId);

      if (currentButton === undefined) {
        throw new Error(
          `Button referenced in Grid but not defined ('${currentButtonId}')`
        );
      }

      const backgroundColor = getRGB(currentButton.background_color);
      const borderColor = getRGB(currentButton.border_color);

      const currentX = columnCount * (buttonDimensions.width + GAP) + PADDING;
      const currentY = rowCount * (buttonDimensions.height + GAP) + PADDING;

      doc
        .setLineWidth(LINE_WIDTH)
        .setDrawColor(borderColor.red, borderColor.green, borderColor.blue)
        .setFillColor(
          backgroundColor.red,
          backgroundColor.green,
          backgroundColor.blue
        )
        .roundedRect(
          currentX,
          currentY,
          buttonDimensions.width,
          buttonDimensions.height,
          ROUNDED_BUTTONS,
          ROUNDED_BUTTONS,
          "FD"
        )
        .text(
          currentButton.label,
          currentX + buttonDimensions.width / 2,
          currentY + buttonDimensions.height / 2,
          {
            baseline: "middle",
            align: "center",
          }
        );
    }
  }

  doc.save(saveLocation);
};

export default boardToPdf;
