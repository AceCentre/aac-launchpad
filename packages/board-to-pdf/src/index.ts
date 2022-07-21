import { Board, Casing, Option } from "types";
import { jsPDF } from "jspdf";
import path from "path";
import fs from "fs";
import { URL } from "url";
import axios from "axios";
import { initialiseFonts, FONT_OPTIONS } from "./fonts/fonts";
import { PDFDocument } from "pdf-lib";

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
const DEFAULT_LABEL_CASING = "no-change";
const DEFAULT_LABEL_BELOW = false;

const DEFAULT_LABEL_FONT_STYLE = "normal";
const DEFAULT_LABEL_FONT = "helvetica";

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

export const CASING_OPTIONS: Array<Option> = [
  {
    label: "No change",
    value: "no-change",
    description: "Use the default casing",
  },
  {
    label: "Uppercase",
    value: "upper",
    description: "Convert the text to all uppercase",
  },
  {
    label: "Lowercase",
    value: "lower",
    description: "Convert the text to all lowercase",
  },
  {
    label: "Capital Case",
    value: "capital",
    description: "Uppercase the first letter of each word",
  },
];

const alterCasing = (rawLabel: string, casingType: Casing): string => {
  if (casingType === "no-change") {
    return rawLabel;
  }

  if (casingType === "lower") {
    return rawLabel.toLowerCase();
  }

  if (casingType === "upper") {
    return rawLabel.toUpperCase();
  }

  if (casingType === "capital") {
    return rawLabel
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
      })
      .join(" ");
  }

  throw new Error(`You gave an invalid casing type: ${casingType}`);
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

const getPdfFromFile = (pdfRoot: string, url: string) => {
  try {
    const imagePath = path.join(pdfRoot, url);
    return fs.readFileSync(imagePath);
  } catch (error: any) {
    if (error && error.code && error.code === "ENOENT") {
      throw Error(`PDF URL '${url}' does not exist as a path or as a URL`);
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
  rootToPdfs: string;
  verboseTimingLogs?: boolean;
};

const DEFAULT_BOARD_TO_PDF_OPTIONS: BoardToPdfOptions = {
  rootToImages: process.cwd(),
  rootToPdfs: process.cwd(),
  verboseTimingLogs: false,
};

const boardToPdf = async (
  board: Board,
  boardToPdfOptions: BoardToPdfOptions = DEFAULT_BOARD_TO_PDF_OPTIONS
): Promise<{
  pdf: ArrayBuffer;
  numberOfPages: number;
  totalSeconds: number;
  totalNanoSeconds: number;
}> => {
  const startTime = process.hrtime();
  initialiseFonts();

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

  const labelAboveSymbol = options.invert_symbol_and_label ?? false;
  const autoFitLabels = options.autofit_label_text ?? false;

  let firstPage = true;
  for (const page of board.pages) {
    const pageStartTime = process.hrtime();
    // The first page doesn't need added as its there by default.
    if (firstPage) {
      firstPage = false;
    } else {
      doc.addPage();
    }

    let documentHeight = HEIGHT;
    let extraTopPadding = 0;

    if (options.full_background_color) {
      const fullBackgroundColor = getRGB(options.full_background_color);

      doc
        .setFillColor(
          fullBackgroundColor.red,
          fullBackgroundColor.green,
          fullBackgroundColor.blue
        )
        .rect(0, 0, WIDTH, HEIGHT, "F");
    }

    if (options.title_shown_on_board) {
      const titleHeight = doc.getFontSize() * POINT_TO_MM;

      doc.text(options.title_shown_on_board, WIDTH / 2, 10, {
        baseline: "top",
        align: "center",
      });

      documentHeight = documentHeight - padding - titleHeight;
      extraTopPadding += 10 + titleHeight;
    }

    if (options.copyright_notice) {
      doc
        .setFontSize(10)
        .text(options.copyright_notice, WIDTH - padding, HEIGHT - padding, {
          baseline: "bottom",
          align: "right",
        });

      const noticeHeight = doc.getFontSize() * POINT_TO_MM;
      documentHeight = documentHeight - 2 - noticeHeight;
    }

    const buttonDimensions = calculateButtonSize(
      WIDTH,
      documentHeight,
      padding,
      gap,
      page.grid.rows,
      page.grid.columns
    );

    let addImageArray = [];

    for (let rowCount = 0; rowCount < page.grid.rows; rowCount++) {
      for (
        let columnCount = 0;
        columnCount < page.grid.columns;
        columnCount++
      ) {
        const buttonStartTime = process.hrtime();

        const currentButtonId = page.grid.order[rowCount][columnCount];

        if (currentButtonId === null) {
          continue;
        }

        const currentButton = board.buttons.find(
          (x) => x.id === currentButtonId
        );

        if (currentButton === undefined) {
          throw new Error(
            `Button referenced in Grid but not defined ('${currentButtonId}')`
          );
        }

        let buttonsWide = 0;

        // Look forward to see if this is a long button
        for (let i = columnCount; i < page.grid.columns; i++) {
          const temp = page.grid.order[rowCount][i];
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

        let fontSize =
          currentButton.ext_launchpad_label_font_size ??
          DEFAULT_LABEL_FONT_SIZE;
        const fontStyle =
          currentButton.ext_launchpad_label_font_style ??
          DEFAULT_LABEL_FONT_STYLE;
        const fontName =
          currentButton.ext_launchpad_label_font ?? DEFAULT_LABEL_FONT;
        const labelCasing =
          currentButton.ext_launchpad_label_casing ?? DEFAULT_LABEL_CASING;
        const labelBelow =
          currentButton.ext_launchpad_label_below ?? DEFAULT_LABEL_BELOW;

        const labelText = alterCasing(currentButton.label, labelCasing);

        const fontList = doc.getFontList();

        const selectedFont = fontList[fontName];

        if (!selectedFont || !selectedFont.includes(fontStyle)) {
          throw new Error(
            `Font '${fontName}' with style '${fontStyle}' not found`
          );
        }

        const currentX = columnCount * (buttonDimensions.width + gap) + padding;
        const currentY =
          rowCount * (buttonDimensions.height + gap) +
          padding +
          extraTopPadding;

        const cellWidth =
          buttonDimensions.width * buttonsWide + gap * (buttonsWide - 1);
        const cellHeight = buttonDimensions.height;

        let rectHeight = cellHeight;

        if (labelBelow) {
          const labelHeight = fontSize * POINT_TO_MM;
          const gapBetweenBoxAndLabel = Math.max(labelHeight * 0.2, 2);

          rectHeight = cellHeight - labelHeight - gapBetweenBoxAndLabel;
        }

        // Skip over the extra buttons
        columnCount += buttonsWide - 1;

        doc.setFont(fontName, fontStyle).setFontSize(fontSize);

        if (autoFitLabels) {
          let textAreaWidth = cellWidth - buttonRadius - 2;
          let textDimensions = doc.getTextDimensions(labelText);

          for (let i = fontSize; i > 1; i--) {
            doc.setFontSize(i);
            textDimensions = doc.getTextDimensions(labelText);

            if (textDimensions.w < textAreaWidth) {
              break;
            }
          }
        }

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
            rectHeight,
            buttonRadius,
            buttonRadius,
            "FD"
          )
          .setTextColor(textColor.red, textColor.green, textColor.blue);

        if (currentButton.image_id !== undefined) {
          const image = board.images.find(
            (x) => x.id === currentButton.image_id
          );

          if (image === undefined) {
            throw new Error(
              `Image referenced in Button but not defined ('${currentButton.image_id}')`
            );
          }

          const loadImageStartTime = process.hrtime();
          const isUrl = validateUrl(image.url);
          const imageData = isUrl
            ? await getImageFromNetwork(image.url)
            : getImageFromFile(boardToPdfOptions.rootToImages, image.url);

          const imageProperties = doc.getImageProperties(imageData);
          const [loadImageTotalSeconds, loadImageTotalNanoSeconds] =
            process.hrtime(loadImageStartTime);

          if (boardToPdfOptions.verboseTimingLogs) {
            console.log(
              `Load Image (${board.id} - ${page.id} - ${currentButton.id} - ${image.id}) ${loadImageTotalSeconds}.${loadImageTotalNanoSeconds}s`
            );
          }

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

          if (labelBelow) {
            contentHeight = contentWidth * widthToHeightRatio;
          }

          const maxHeight = cellHeight * CONTENT_PERCENTAGE;

          if (contentHeight > maxHeight) {
            contentHeight = cellHeight * CONTENT_PERCENTAGE;
            let imageHeight = contentHeight - fontHeightInMm - fontImageGap;
            if (labelBelow) {
              imageHeight = contentHeight;
            }
            contentWidth = imageHeight * heightToWidthRatio;
          }

          let imageHeight = contentHeight - fontHeightInMm - fontImageGap;

          if (labelBelow) {
            imageHeight = contentHeight;
          }

          let imageX = currentX + (cellWidth - contentWidth) / 2;
          let imageY = currentY + (rectHeight - contentHeight) / 2;

          let topPadding = (cellHeight - contentHeight) / 2;
          let textX = currentX + cellWidth / 2;
          let textY = currentY + topPadding + imageHeight + fontImageGap;

          if (labelAboveSymbol) {
            textY = imageY;
            imageY = textY + fontHeightInMm + fontImageGap;
          }

          addImageArray.push({
            imageData,
            fileType: imageProperties.fileType,
            imageX,
            imageY,
            contentWidth,
            imageHeight,
            url: image.url,
          });

          if (labelBelow) {
            doc.text(labelText, textX, currentY + cellHeight, {
              baseline: "bottom",
              align: "center",
            });
          } else {
            doc.text(labelText, textX, textY, {
              baseline: "top",
              align: "center",
            });
          }
        } else {
          if (labelBelow) {
            doc.text(
              labelText,
              currentX + cellWidth / 2,
              currentY + cellHeight,
              {
                baseline: "bottom",
                align: "center",
              }
            );
          } else {
            doc.text(
              labelText,
              currentX + cellWidth / 2,
              currentY + cellHeight / 2,
              {
                baseline: "middle",
                align: "center",
              }
            );
          }
        }

        const [buttonTotalSeconds, buttonTotalNanoSeconds] =
          process.hrtime(buttonStartTime);

        if (boardToPdfOptions.verboseTimingLogs) {
          console.log(
            `Button generation (${board.id} - ${page.id} - ${currentButton.id}) ${buttonTotalSeconds}.${buttonTotalNanoSeconds}s`
          );
        }
      }
    }

    const addImageStartTime = process.hrtime();

    const addImagePromises = addImageArray.map(async (options) => {
      doc.addImage(
        options.imageData,
        options.fileType,
        options.imageX,
        options.imageY,
        options.contentWidth,
        options.imageHeight,
        options.url,
        "MEDIUM",
        0
      );
    });

    await Promise.all(addImagePromises);

    const [addImageTotalSeconds, addImageTotalNanoSeconds] =
      process.hrtime(addImageStartTime);

    if (boardToPdfOptions.verboseTimingLogs) {
      console.log(
        `Add Image (${board.id} - ${page.id}) ${addImageTotalSeconds}.${addImageTotalNanoSeconds}s`
      );
    }

    const [pageTotalSeconds, pageTotalNanoSeconds] =
      process.hrtime(pageStartTime);

    if (boardToPdfOptions.verboseTimingLogs) {
      console.log(
        `Page generation (${board.id} - ${page.id}) ${pageTotalSeconds}.${pageTotalNanoSeconds}s`
      );
    }
  }

  if (board.ext_launchpad_options.ext_launchpad_prepend_pdf) {
    const pdfDoc = await PDFDocument.create();

    const pdf = getPdfFromFile(
      boardToPdfOptions.rootToPdfs,
      board.ext_launchpad_options.ext_launchpad_prepend_pdf
    );

    const newPdf = await PDFDocument.load(doc.output("arraybuffer"));
    const prependPdf = await PDFDocument.load(pdf);

    const pagesCopyA = await pdfDoc.copyPages(
      prependPdf,
      prependPdf.getPageIndices()
    );
    pagesCopyA.forEach((page) => pdfDoc.addPage(page));

    const pagesCopyB = await pdfDoc.copyPages(newPdf, newPdf.getPageIndices());
    pagesCopyB.forEach((page) => pdfDoc.addPage(page));

    const output = await pdfDoc.save();

    const [totalSeconds, totalNanoSeconds] = process.hrtime(startTime);

    return {
      numberOfPages: pdfDoc.getPageCount(),
      pdf: Buffer.from(output),
      totalSeconds,
      totalNanoSeconds,
    };
  }

  const [totalSeconds, totalNanoSeconds] = process.hrtime(startTime);

  return {
    pdf: doc.output("arraybuffer"),
    numberOfPages: doc.getNumberOfPages(),
    totalSeconds,
    totalNanoSeconds,
  };
};

export default boardToPdf;
export { FONT_OPTIONS };
