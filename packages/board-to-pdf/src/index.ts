import { Board } from "types";
import { jsPDF } from "jspdf";
import path from "path";
import fs from "fs";
import { URL } from "url";
import axios from "axios";

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
const DEFAULT_LABEL_COLOR = "rgb(0, 0, 0)";
const DEFAULT_LABEL_FONT_SIZE = 18;
const DEFAULT_LABEL_FONT_STYLE = "normal";

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

const getRGB = (input: string): RBG => {
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

const validateUrl = (url: string): Boolean => {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.protocol !== "https:") {
      throw new Error(`Image must be loaded over https (${url})`);
    }

    return true;
  } catch (error: any) {
    if (error.code !== "ERR_INVALID_URL") {
      throw error;
    }

    return false;
  }
};

const getImageFromFile = (imageRoot: string, url: string) => {
  try {
    const imagePath = path.join(imageRoot, url);
    return fs.readFileSync(imagePath);
  } catch (error: any) {
    if (error && error.code && error.code === "ENOENT") {
      throw Error(`Image URL '${url}' does not exist as a path or as a URL`);
    } else {
      throw error;
    }
  }
};

const VALID_RESPONSE_TYPES = ["image/png", "image/jpeg"];

const getImageFromNetwork = async (url: string): Promise<Buffer> => {
  const response = await axios.get(url, { responseType: "arraybuffer" });

  if (!VALID_RESPONSE_TYPES.includes(response.headers["content-type"])) {
    throw new Error(
      `Could not use image with content-type: ${response.headers["content-type"]}`
    );
  }

  return Buffer.from(response.data);
};

const POINT_TO_MM = 0.3514;

type BoardToPdfOptions = {
  rootToImages: string;
};

const DEFAULT_BOARD_TO_PDF_OPTIONS: BoardToPdfOptions = {
  rootToImages: process.cwd(),
};

const boardToPdf = async (
  board: Board,
  boardToPdfOptions: BoardToPdfOptions = DEFAULT_BOARD_TO_PDF_OPTIONS
): Promise<jsPDF> => {
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
      const textColor = getRGB(
        currentButton.ext_launchpad_label_color ?? DEFAULT_LABEL_COLOR
      );

      const fontSize =
        currentButton.ext_launchpad_label_font_size ?? DEFAULT_LABEL_FONT_SIZE;
      const fontStyle =
        currentButton.ext_launchpad_label_font_style ??
        DEFAULT_LABEL_FONT_STYLE;
      const currentFont = doc.getFont();

      const currentX = columnCount * (buttonDimensions.width + gap) + padding;
      const currentY = rowCount * (buttonDimensions.height + gap) + padding;

      const cellWidth =
        buttonDimensions.width * buttonsWide + gap * (buttonsWide - 1);
      const cellHeight = buttonDimensions.height;

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
          cellWidth,
          cellHeight,
          buttonRadius,
          buttonRadius,
          "FD"
        )
        .setFont(currentFont.fontName, fontStyle)
        .setFontSize(fontSize)
        .setTextColor(textColor.red, textColor.green, textColor.blue);

      if (currentButton.image_id !== undefined) {
        const image = board.images.find((x) => x.id === currentButton.image_id);

        if (image === undefined) {
          throw new Error(
            `Image referenced in Button but not defined ('${currentButton.image_id}')`
          );
        }

        const isUrl = validateUrl(image.url);
        const imageData = isUrl
          ? await getImageFromNetwork(image.url)
          : getImageFromFile(boardToPdfOptions.rootToImages, image.url);

        const imageProperties = doc.getImageProperties(imageData);

        // The content will max be n% wide or tall
        const CONTENT_PERCENTAGE = 0.8;
        const fontHeightInMm = doc.getFontSize() * POINT_TO_MM;
        const fontImageGap = fontHeightInMm * 0.2;

        const widthToHeightRatio =
          imageProperties.height / imageProperties.width;
        const heightToWidthRatio =
          imageProperties.width / imageProperties.height;

        let contentWidth = cellWidth * CONTENT_PERCENTAGE;
        let contentHeight =
          contentWidth * widthToHeightRatio + fontHeightInMm + fontImageGap;

        const maxHeight = cellHeight * CONTENT_PERCENTAGE;

        if (contentHeight > maxHeight) {
          contentHeight = cellHeight * CONTENT_PERCENTAGE;
          let imageHeight = contentHeight - fontHeightInMm - fontImageGap;
          contentWidth = imageHeight * heightToWidthRatio;
        }

        let imageHeight = contentHeight - fontHeightInMm - fontImageGap;

        let imageX = currentX + (cellWidth - contentWidth) / 2;
        let imageY = currentY + (cellHeight - contentHeight) / 2;

        let topPadding = (cellHeight - contentHeight) / 2;
        let textX = currentX + cellWidth / 2;
        let textY = currentY + topPadding + imageHeight + fontImageGap;

        doc
          .addImage(
            imageData,
            imageProperties.fileType,
            imageX,
            imageY,
            contentWidth,
            imageHeight,
            image.url,
            "MEDIUM",
            0
          )
          .text(currentButton.label, textX, textY, {
            baseline: "top",
            align: "center",
          });
      } else {
        doc.text(
          currentButton.label,
          currentX + cellWidth / 2,
          currentY + cellHeight / 2,
          {
            baseline: "middle",
            align: "center",
          }
        );
      }
    }
  }

  return doc;
};

export default boardToPdf;
