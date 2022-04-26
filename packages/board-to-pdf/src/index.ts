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
const DEFAULT_PADDING = 10;
const DEFAULT_GAP = 10;
const DEFAULT_BUTTON_RADIUS = 2;
const DEFAULT_BUTTON_BORDER_WIDTH = 2;

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

  const options = board.ext_launchpad_options;
  const padding = options.padding ?? DEFAULT_PADDING;
  const gap = options.gap ?? DEFAULT_GAP;
  const buttonRadius = options.button_radius ?? DEFAULT_BUTTON_RADIUS;
  const buttonBorderWidth =
    options.button_border_width ?? DEFAULT_BUTTON_BORDER_WIDTH;

  const buttonDimensions = calculateButtonSize(
    WIDTH,
    HEIGHT,
    padding,
    gap,
    board.grid.rows,
    board.grid.columns
  );

  for (let rowCount = 0; rowCount < board.grid.rows; rowCount++) {
    for (let columnCount = 0; columnCount < board.grid.columns; columnCount++) {
      const currentButtonId = board.grid.order[rowCount][columnCount];

      if (currentButtonId === null) {
        continue;
      }

      const currentButton = board.buttons.find((x) => x.id === currentButtonId);

      if (currentButton === undefined) {
        throw new Error(
          `Button referenced in Grid but not defined ('${currentButtonId}')`
        );
      }

      let buttonsWide = 0;

      // Look forward to see if this is a long button
      for (let i = columnCount; i < board.grid.columns; i++) {
        const temp = board.grid.order[rowCount][i];
        if (temp === currentButtonId) {
          buttonsWide++;
        } else {
          break;
        }
      }

      const backgroundColor = getRGB(currentButton.background_color);
      const borderColor = getRGB(currentButton.border_color);

      const currentX = columnCount * (buttonDimensions.width + gap) + padding;
      const currentY = rowCount * (buttonDimensions.height + gap) + padding;

      const width =
        buttonDimensions.width * buttonsWide + gap * (buttonsWide - 1);
      const height = buttonDimensions.height;

      // Skip over the extra buttons
      columnCount += buttonsWide - 1;

      doc
        .setLineWidth(buttonBorderWidth)
        .setDrawColor(borderColor.red, borderColor.green, borderColor.blue)
        .setFillColor(
          backgroundColor.red,
          backgroundColor.green,
          backgroundColor.blue
        )
        .roundedRect(
          currentX,
          currentY,
          width,
          height,
          buttonRadius,
          buttonRadius,
          "FD"
        )
        .text(
          currentButton.label,
          currentX + width / 2,
          currentY + height / 2,
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
