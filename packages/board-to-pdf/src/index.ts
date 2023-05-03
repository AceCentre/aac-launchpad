/* eslint-disable no-loop-func */
import { Board, Casing, Image, Option } from "types";
import { ImageProperties, jsPDF } from "jspdf";
import path from "path";
import fs from "fs";
import { URL } from "url";
import axios from "axios";
import { initialiseFonts, FONT_OPTIONS } from "./fonts/fonts";
import pdftk from "node-pdftk";

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

const SPACE_RESERVED_FOR_ROW_LABEL = 24;

const calculateButtonSize = (
  pageWidth: number,
  pageHeight: number,
  horizontalPadding: number,
  verticalPadding: number,
  gap: number,
  rows: number,
  columns: number,
  withRowLabels: boolean
): ButtonDimensions => {
  const widthLostToPadding = horizontalPadding * 2;
  const widthDistanceLostToGap = (columns - 1) * gap;
  const totalButtonWidth =
    pageWidth - widthLostToPadding - widthDistanceLostToGap;
  const buttonWidth = totalButtonWidth / columns;

  const heightLostToPadding = verticalPadding * 2;
  const heightLostToGap = (rows - 1) * gap;
  const totalButtonHeight = pageHeight - heightLostToGap - heightLostToPadding;
  const buttonHeight = totalButtonHeight / rows;

  if (withRowLabels) {
    const spacePerButton = SPACE_RESERVED_FOR_ROW_LABEL / columns;
    return {
      width: buttonWidth - spacePerButton,
      height: buttonHeight,
    };
  } else {
    return { width: buttonWidth, height: buttonHeight };
  }
};

export const LOWER_CASE_OPTION = {
  label: "Lowercase",
  value: "lower",
  description: "Convert the text to all lowercase",
};

export const UPPER_CASE_OPTION = {
  label: "Uppercase",
  value: "upper",
  description: "Convert the text to all uppercase",
};

export const CAPITAL_CASE_OPTION = {
  label: "Capital Case",
  value: "capital",
  description: "Uppercase the first letter of each word",
};

export const SENTENCE_CASING = {
  label: "Sentence Case",
  value: "sentence",
  description: "Uppercase the first letter of each sentence",
};

export const CASING_OPTIONS: Array<Option> = [
  {
    label: "No change",
    value: "no-change",
    description: "Use the default casing",
  },
  UPPER_CASE_OPTION,
  LOWER_CASE_OPTION,
  CAPITAL_CASE_OPTION,
];

export const alterCasing = (rawLabel: string, casingType: Casing): string => {
  const capitalCaseWord = (word: string): string => {
    if (word === "") return "";

    return word.replace(word[0], word[0].toUpperCase());
  };

  if (casingType === "no-change") {
    return rawLabel;
  }

  if (casingType === "sentence") {
    return rawLabel
      .toLowerCase()
      .split(" ")
      .map((x, index) => {
        if (index === 0) return capitalCaseWord(x);
        return x;
      })
      .join(" ");
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
      .map(capitalCaseWord)
      .join(" ")
      .split("\n")
      .map(capitalCaseWord)
      .join("\n");
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

  if (board.pages.length === 0) {
    throw new Error("You must have at least one page");
  }

  const initialPage = board.pages[0];

  // Default export is a4 paper, portrait, using millimeters for units
  const doc = new jsPDF({
    orientation: initialPage.orientation ?? "landscape",
  });

  const options = board.ext_launchpad_options;

  let horizontalPadding = DEFAULT_PADDING;
  let verticalPadding = DEFAULT_PADDING;

  if (typeof options.padding === "number") {
    horizontalPadding = options.padding;
    verticalPadding = options.padding;
  } else if (
    options.padding !== undefined &&
    "horizontal" in options.padding &&
    "vertical" in options.padding
  ) {
    horizontalPadding = options.padding.horizontal;
    verticalPadding = options.padding.vertical;
  }

  const gap = options.gap ?? DEFAULT_GAP;
  const buttonRadius = options.button_radius ?? DEFAULT_BUTTON_RADIUS;
  const documentButtonBorderWidth =
    options.button_border_width ?? DEFAULT_BUTTON_BORDER_WIDTH;
  const addPageNumbers = options.use_page_numbers ?? false;

  const labelAboveSymbol = options.invert_symbol_and_label ?? false;
  const autoFitLabels = options.autofit_label_text ?? false;

  let firstPage = true;
  let pageNumber = 1;
  for (const page of board.pages) {
    const currentPageOrientation = page.orientation ?? "landscape";
    const withRowLabels = page.ext_launchpad_with_row_labels ?? false;
    const currentPageWidth =
      currentPageOrientation === "landscape" ? WIDTH : HEIGHT;
    const currentPageHeight =
      currentPageOrientation === "landscape" ? HEIGHT : WIDTH;

    const pageStartTime = process.hrtime();
    // The first page doesn't need added as its there by default.
    if (firstPage) {
      firstPage = false;
    } else {
      doc.addPage("a4", currentPageOrientation);
    }

    let documentHeight = currentPageHeight;
    let extraTopPadding = 0;

    if (options.full_background_color) {
      const fullBackgroundColor = getRGB(options.full_background_color);

      doc
        .setFillColor(
          fullBackgroundColor.red,
          fullBackgroundColor.green,
          fullBackgroundColor.blue
        )
        .rect(0, 0, currentPageWidth, currentPageHeight, "F");
    }

    if (page.ext_launchpad_title_shown_on_board) {
      doc.setFont(DEFAULT_LABEL_FONT, DEFAULT_LABEL_FONT_STYLE);

      const titleHeight = doc.getFontSize() * POINT_TO_MM;

      if (options.text_color_on_background) {
        const textColourOnBackground = getRGB(options.text_color_on_background);
        doc.setTextColor(
          textColourOnBackground.red,
          textColourOnBackground.green,
          textColourOnBackground.blue
        );
      }

      doc.text(
        page.ext_launchpad_title_shown_on_board,
        currentPageWidth / 2,
        10,
        {
          baseline: "top",
          align: "center",
        }
      );

      documentHeight = documentHeight - verticalPadding - titleHeight;
      extraTopPadding += 10 + titleHeight;
    } else if (options.title_shown_on_board) {
      doc.setFont(DEFAULT_LABEL_FONT, DEFAULT_LABEL_FONT_STYLE);

      const titleHeight = doc.getFontSize() * POINT_TO_MM;

      if (options.text_color_on_background) {
        const textColourOnBackground = getRGB(options.text_color_on_background);
        doc.setTextColor(
          textColourOnBackground.red,
          textColourOnBackground.green,
          textColourOnBackground.blue
        );
      }

      doc.text(options.title_shown_on_board, currentPageWidth / 2, 10, {
        baseline: "top",
        align: "center",
      });

      documentHeight = documentHeight - verticalPadding - titleHeight;
      extraTopPadding += 10 + titleHeight;
    }

    if (options.copyright_notice && !options.use_ace_branding) {
      doc
        .setFontSize(10)
        .text(
          options.copyright_notice,
          currentPageWidth - horizontalPadding,
          currentPageHeight - verticalPadding,
          {
            baseline: "bottom",
            align: "right",
          }
        );

      const fontInMm = doc.getFontSize() * POINT_TO_MM;

      documentHeight = documentHeight - 2 - fontInMm;
    }

    if (addPageNumbers) {
      doc
        .setFontSize(10)
        .text(
          "Page " + pageNumber,
          currentPageWidth - 8,
          currentPageHeight - 8,
          {
            baseline: "bottom",
            align: "right",
          }
        );
    }

    if (options.use_ace_branding === true) {
      const logoImageData = getImageFromFile(
        __dirname,
        "../../../ace-logo.png"
      );
      const logoProperties = doc.getImageProperties(logoImageData);

      const scale = 0.15;
      const logoWidth = logoProperties.width * scale;
      const logoHeight = logoProperties.height * scale;

      await doc.addImage(
        logoImageData,
        logoProperties.fileType,
        horizontalPadding,
        currentPageHeight - logoHeight - 2,
        logoWidth,
        logoHeight,
        "ace-logo",
        "FAST",
        0
      );

      doc
        .setFontSize(10)
        .text(
          "A free resource created by the charity acecentre.org.uk",
          horizontalPadding + logoWidth + 2,
          currentPageHeight - logoHeight / 2 - 2,
          {
            baseline: "top",
            align: "left",
          }
        );

      if (options.copyright_notice) {
        doc
          .setFontSize(10)
          .text(
            options.copyright_notice,
            currentPageWidth - horizontalPadding,
            currentPageHeight - logoHeight / 2 - 2,
            {
              baseline: "top",
              align: "right",
            }
          );
      }

      // Something funky is happening here but this seems to fix it.
      // Problem for another day
      // I suspect the units are messed up
      documentHeight = documentHeight - 10;
    }

    const buttonDimensions = calculateButtonSize(
      currentPageWidth,
      documentHeight,
      horizontalPadding,
      verticalPadding,
      gap,
      page.grid.rows,
      page.grid.columns,
      withRowLabels
    );

    let addImageArray = [];
    let loadImagesPromises = [];
    let loadedImages: {
      [key: string]: {
        imageData: Buffer;
        imageProperties: ImageProperties;
        image: Image;
      };
    } = {};

    // Go through the grid to find all images used to load them all at the same time
    const loadImagesStartTime = process.hrtime();
    for (let rowCount = 0; rowCount < page.grid.rows; rowCount++) {
      for (
        let columnCount = 0;
        columnCount < page.grid.columns;
        columnCount++
      ) {
        loadImagesPromises.push(
          (async () => {
            const currentButtonId = page.grid.order[rowCount][columnCount];
            if (currentButtonId === null) {
              return;
            }

            const currentButton = board.buttons.find(
              (x) => x.id === currentButtonId
            );

            if (currentButton === undefined) {
              throw new Error(
                `Button referenced in Grid but not defined ('${currentButtonId}')`
              );
            }

            if (currentButton.image_id !== undefined) {
              const image = board.images.find(
                (x) => x.id === currentButton.image_id
              );
              if (image === undefined) {
                throw new Error(
                  `Image referenced in Button but not defined (image: '${currentButton.image_id}', button: ${currentButtonId}, row: ${rowCount}, column: ${columnCount})`
                );
              }
              const isUrl = validateUrl(image.url);
              const imageData = isUrl
                ? await getImageFromNetwork(image.url)
                : getImageFromFile(boardToPdfOptions.rootToImages, image.url);
              const imageProperties = doc.getImageProperties(imageData);
              loadedImages[currentButtonId] = {
                imageData,
                imageProperties,
                image,
              };
            }
          })()
        );
      }
    }

    await Promise.all(loadImagesPromises);

    const [loadImagesTotalSeconds, loadImagesTotalNanoSeconds] =
      process.hrtime(loadImagesStartTime);

    if (boardToPdfOptions.verboseTimingLogs) {
      console.log(
        `Load Image (${board.id} - ${page.id}) ${loadImagesTotalSeconds}.${loadImagesTotalNanoSeconds}s`
      );
    }

    for (let rowCount = 0; rowCount < page.grid.rows; rowCount++) {
      // Draw the row label for this row
      if (withRowLabels) {
        const label = rowCount + 1;

        const currentX = horizontalPadding + SPACE_RESERVED_FOR_ROW_LABEL / 2;

        const currentY =
          rowCount * (buttonDimensions.height + gap) +
          verticalPadding +
          extraTopPadding;

        doc
          .setFont(DEFAULT_LABEL_FONT, DEFAULT_LABEL_FONT_STYLE)
          .setFontSize(30);

        if (options.text_color_on_background) {
          const textColourOnBackground = getRGB(
            options.text_color_on_background
          );
          doc.setTextColor(
            textColourOnBackground.red,
            textColourOnBackground.green,
            textColourOnBackground.blue
          );
        }

        doc.text(
          String(label),
          currentX,
          currentY + buttonDimensions.height / 2,
          {
            baseline: "middle",
            align: "center",
          }
        );
      }

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
        const buttonBorderWidth =
          currentButton.ext_button_border_width ?? documentButtonBorderWidth;

        const labelText = alterCasing(currentButton.label, labelCasing);

        const fontList = doc.getFontList();

        const selectedFont = fontList[fontName];

        if (!selectedFont || !selectedFont.includes(fontStyle)) {
          throw new Error(
            `Font '${fontName}' with style '${fontStyle}' not found`
          );
        }

        const spaceForLabels = withRowLabels ? SPACE_RESERVED_FOR_ROW_LABEL : 0;

        const currentX =
          columnCount * (buttonDimensions.width + gap) +
          horizontalPadding +
          spaceForLabels;
        const currentY =
          rowCount * (buttonDimensions.height + gap) +
          verticalPadding +
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
          const currentImage = loadedImages[currentButtonId];

          // The content will max be n% wide or tall
          const CONTENT_PERCENTAGE = 0.8;
          const fontHeightInMm = doc.getFontSize() * POINT_TO_MM;
          const fontImageGap = fontHeightInMm * 0.2;

          const widthToHeightRatio =
            currentImage.imageProperties.height /
            currentImage.imageProperties.width;
          const heightToWidthRatio =
            currentImage.imageProperties.width /
            currentImage.imageProperties.height;

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
            imageData: currentImage.imageData,
            fileType: currentImage.imageProperties.fileType,
            imageX,
            imageY,
            contentWidth,
            imageHeight,
            url: currentImage.image.url,
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
            if (labelText.split("\n").length === 1) {
              doc.text(
                labelText,
                currentX + cellWidth / 2,
                currentY + cellHeight / 2,
                {
                  baseline: "middle",
                  align: "center",
                }
              );
            } else if (labelText.split("\n").length === 2) {
              const [firstLine, secondLine] = labelText.split("\n");

              doc.text(
                firstLine.trim(),
                currentX + cellWidth / 2,
                currentY + cellHeight / 2,
                {
                  baseline: "bottom",
                  align: "center",
                }
              );
              doc.text(
                secondLine.trim(),
                currentX + cellWidth / 2,
                currentY + cellHeight / 2,
                {
                  baseline: "top",
                  align: "center",
                }
              );
            } else {
              throw new Error(
                `Strings can currently only have one new line ${labelText}`
              );
            }
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
        "FAST",
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
    pageNumber++;
  }

  if (
    board.ext_launchpad_options.ext_launchpad_prepend_pdf &&
    board.ext_launchpad_options.ext_launchpad_prepend_pdf !== undefined
  ) {
    const prependPdfName =
      board.ext_launchpad_options.ext_launchpad_prepend_pdf;

    const prependStartTime = process.hrtime();

    const buffer: Buffer = await new Promise((resolve, reject) => {
      pdftk
        .input({
          A: path.join(boardToPdfOptions.rootToPdfs, prependPdfName),
          B: Buffer.from(doc.output("arraybuffer")),
        })
        .cat("A B")
        .output()
        .then((buffer) => resolve(buffer))
        .catch((error) => reject(error));
    });

    const [totalSeconds, totalNanoSeconds] = process.hrtime(startTime);

    const [prependTotalSeconds, prependTotalNanoSeconds] =
      process.hrtime(prependStartTime);

    if (boardToPdfOptions.verboseTimingLogs) {
      console.log(
        `Page generation (${board.id} - ${board.ext_launchpad_options.ext_launchpad_prepend_pdf}) ${prependTotalSeconds}.${prependTotalNanoSeconds}s`
      );
    }

    return {
      // This breaks down if we ever prepend more than one page
      numberOfPages: doc.getNumberOfPages() + 1,
      pdf: buffer,
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
