import { Board } from "types";
import { jsPDF } from "jspdf";

type ButtonDimensions = {
  width: number;
  height: number;
};

const WIDTH = 297;
const HEIGHT = 210;
const PADDING = 10;
const GAP = 10;
const ROUNDED_BUTTONS = 2;

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
      const currentX = columnCount * (buttonDimensions.width + GAP) + PADDING;
      const currentY = rowCount * (buttonDimensions.height + GAP) + PADDING;

      doc.roundedRect(
        currentX,
        currentY,
        buttonDimensions.width,
        buttonDimensions.height,
        ROUNDED_BUTTONS,
        ROUNDED_BUTTONS,
        "F"
      );
    }
  }

  doc.save(saveLocation);
};

export default boardToPdf;
