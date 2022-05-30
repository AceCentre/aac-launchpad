import boardToPdf from "..";
import path from "path";
import { readFileSync } from "fs";
import { Board } from "types";
import { fromBuffer } from "pdf2pic";
import { toMatchImage } from "jest-image-matcher";
import { rmSync, mkdirSync } from "fs";

expect.extend({ toMatchImage });

jest.setTimeout(10000);

beforeAll(() => {
  try {
    rmSync(path.join(__dirname, "./temp"), { recursive: true });
  } catch (error: any) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }
  mkdirSync(path.join(__dirname, "./temp"));
});

afterAll(() => {
  try {
    rmSync(path.join(__dirname, "./temp"), { recursive: true });
  } catch (error: any) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }
});

it("alphabet-chart", async () => {
  const rawBoard: Board = JSON.parse(
    readFileSync(path.join(__dirname, "./boards/alphabet-chart.obf")).toString()
  );
  const { pdf } = await boardToPdf(rawBoard, {
    rootToImages: path.join(__dirname, "./images"),
    rootToPdfs: path.join(__dirname, "./pdfs"),
  });
  const output = Buffer.from(pdf);
  const prep = fromBuffer(output, {
    density: 500,
    saveFilename: rawBoard.id,
    savePath: path.join(__dirname, "./temp"),
    format: "png",
    width: 3508,
    height: 2480,
  });
  if (prep.bulk === undefined) {
    throw new Error(`Failed to get screenshot for: ${rawBoard.id}`);
  }
  await prep.bulk([1]);

  const source = readFileSync(
    path.join(__dirname, "./screenshots/alphabet-chart.1.png")
  );
  const result = readFileSync(
    path.join(__dirname, "./temp/alphabet-chart.1.png")
  );

  expect(source).toMatchImage(result, {
    diffPath: `./${rawBoard.id}-diff.png`,
  });
});

it("change-casing", async () => {
  const rawBoard: Board = JSON.parse(
    readFileSync(path.join(__dirname, "./boards/change-casing.obf")).toString()
  );
  const { pdf } = await boardToPdf(rawBoard, {
    rootToImages: path.join(__dirname, "./images"),
    rootToPdfs: path.join(__dirname, "./pdfs"),
  });
  const output = Buffer.from(pdf);
  const prep = fromBuffer(output, {
    density: 500,
    saveFilename: rawBoard.id,
    savePath: path.join(__dirname, "./temp"),
    format: "png",
    width: 3508,
    height: 2480,
  });
  if (prep.bulk === undefined) {
    throw new Error(`Failed to get screenshot for: ${rawBoard.id}`);
  }
  await prep.bulk([1]);

  const source = readFileSync(
    path.join(__dirname, "./screenshots/change-casing.1.png")
  );
  const result = readFileSync(
    path.join(__dirname, "./temp/change-casing.1.png")
  );

  expect(source).toMatchImage(result, {
    diffPath: `./${rawBoard.id}-diff.png`,
  });
});

it("font-picker", async () => {
  const rawBoard: Board = JSON.parse(
    readFileSync(path.join(__dirname, "./boards/font-picker.obf")).toString()
  );
  const { pdf } = await boardToPdf(rawBoard, {
    rootToImages: path.join(__dirname, "./images"),
    rootToPdfs: path.join(__dirname, "./pdfs"),
  });
  const output = Buffer.from(pdf);
  const prep = fromBuffer(output, {
    density: 500,
    saveFilename: rawBoard.id,
    savePath: path.join(__dirname, "./temp"),
    format: "png",
    width: 3508,
    height: 2480,
  });
  if (prep.bulk === undefined) {
    throw new Error(`Failed to get screenshot for: ${rawBoard.id}`);
  }
  await prep.bulk([1]);

  const source = readFileSync(
    path.join(__dirname, "./screenshots/font-picker.1.png")
  );
  const result = readFileSync(path.join(__dirname, "./temp/font-picker.1.png"));

  expect(source).toMatchImage(result, {
    diffPath: `./${rawBoard.id}-diff.png`,
  });
});

it("multiple-pages", async () => {
  const rawBoard: Board = JSON.parse(
    readFileSync(path.join(__dirname, "./boards/multiple-pages.obf")).toString()
  );
  const { pdf } = await boardToPdf(rawBoard, {
    rootToImages: path.join(__dirname, "./images"),
    rootToPdfs: path.join(__dirname, "./pdfs"),
  });
  const output = Buffer.from(pdf);
  const prep = fromBuffer(output, {
    density: 500,
    saveFilename: rawBoard.id,
    savePath: path.join(__dirname, "./temp"),
    format: "png",
    width: 3508,
    height: 2480,
  });
  if (prep.bulk === undefined) {
    throw new Error(`Failed to get screenshot for: ${rawBoard.id}`);
  }
  await prep.bulk([1, 2]);

  const sourceFirst = readFileSync(
    path.join(__dirname, "./screenshots/multiple-pages.1.png")
  );
  const resultFirst = readFileSync(
    path.join(__dirname, "./temp/multiple-pages.1.png")
  );

  const sourceSecond = readFileSync(
    path.join(__dirname, "./screenshots/multiple-pages.2.png")
  );
  const resultSecond = readFileSync(
    path.join(__dirname, "./temp/multiple-pages.2.png")
  );

  expect(sourceFirst).toMatchImage(resultFirst);
  expect(sourceSecond).toMatchImage(resultSecond);
});

it("presets-example", async () => {
  const rawBoard: Board = JSON.parse(
    readFileSync(
      path.join(__dirname, "./boards/presets-example.obf")
    ).toString()
  );
  const { pdf } = await boardToPdf(rawBoard, {
    rootToImages: path.join(__dirname, "./images"),
    rootToPdfs: path.join(__dirname, "./pdfs"),
  });
  const output = Buffer.from(pdf);
  const prep = fromBuffer(output, {
    density: 500,
    saveFilename: rawBoard.id,
    savePath: path.join(__dirname, "./temp"),
    format: "png",
    width: 3508,
    height: 2480,
  });
  if (prep.bulk === undefined) {
    throw new Error(`Failed to get screenshot for: ${rawBoard.id}`);
  }
  await prep.bulk([1]);

  const source = readFileSync(
    path.join(__dirname, "./screenshots/presets-example.1.png")
  );
  const result = readFileSync(
    path.join(__dirname, "./temp/presets-example.1.png")
  );

  expect(source).toMatchImage(result, {
    diffPath: `./${rawBoard.id}-diff.png`,
  });
});

it("simple-choice", async () => {
  const rawBoard: Board = JSON.parse(
    readFileSync(path.join(__dirname, "./boards/simple-choice.obf")).toString()
  );
  const { pdf } = await boardToPdf(rawBoard, {
    rootToImages: path.join(__dirname, "./images"),
    rootToPdfs: path.join(__dirname, "./pdfs"),
  });
  const output = Buffer.from(pdf);
  const prep = fromBuffer(output, {
    density: 500,
    saveFilename: rawBoard.id,
    savePath: path.join(__dirname, "./temp"),
    format: "png",
    width: 3508,
    height: 2480,
  });
  if (prep.bulk === undefined) {
    throw new Error(`Failed to get screenshot for: ${rawBoard.id}`);
  }
  await prep.bulk([1]);

  const source = readFileSync(
    path.join(__dirname, "./screenshots/simple-choice.1.png")
  );
  const result = readFileSync(
    path.join(__dirname, "./temp/simple-choice.1.png")
  );

  expect(source).toMatchImage(result, {
    diffPath: `./${rawBoard.id}-diff.png`,
  });
});

it("with-images", async () => {
  const rawBoard: Board = JSON.parse(
    readFileSync(path.join(__dirname, "./boards/with-images.obf")).toString()
  );
  const { pdf } = await boardToPdf(rawBoard, {
    rootToImages: path.join(__dirname, "./images"),
    rootToPdfs: path.join(__dirname, "./pdfs"),
  });
  const output = Buffer.from(pdf);
  const prep = fromBuffer(output, {
    density: 500,
    saveFilename: rawBoard.id,
    savePath: path.join(__dirname, "./temp"),
    format: "png",
    width: 3508,
    height: 2480,
  });
  if (prep.bulk === undefined) {
    throw new Error(`Failed to get screenshot for: ${rawBoard.id}`);
  }
  await prep.bulk([1]);

  const source = readFileSync(
    path.join(__dirname, "./screenshots/with-images.1.png")
  );
  const result = readFileSync(path.join(__dirname, "./temp/with-images.1.png"));

  expect(source).toMatchImage(result, {
    diffPath: `./${rawBoard.id}-diff.png`,
  });
});

it("with-four-images", async () => {
  const rawBoard: Board = JSON.parse(
    readFileSync(
      path.join(__dirname, "./boards/with-four-images.obf")
    ).toString()
  );

  const { pdf } = await boardToPdf(rawBoard, {
    rootToImages: path.join(__dirname, "./images"),
    rootToPdfs: path.join(__dirname, "./pdfs"),
  });

  const output = Buffer.from(pdf);
  const prep = fromBuffer(output, {
    density: 500,
    saveFilename: rawBoard.id,
    savePath: path.join(__dirname, "./temp"),
    format: "png",
    width: 3508,
    height: 2480,
  });
  if (prep.bulk === undefined) {
    throw new Error(`Failed to get screenshot for: ${rawBoard.id}`);
  }
  await prep.bulk([1]);

  const source = readFileSync(
    path.join(__dirname, "./screenshots/with-four-images.1.png")
  );
  const result = readFileSync(
    path.join(__dirname, "./temp/with-four-images.1.png")
  );

  expect(source).toMatchImage(result, {
    diffPath: `./${rawBoard.id}-diff.png`,
  });
});

it("labels-below", async () => {
  const rawBoard: Board = JSON.parse(
    readFileSync(path.join(__dirname, "./boards/labels-below.obf")).toString()
  );

  const { pdf } = await boardToPdf(rawBoard, {
    rootToImages: path.join(__dirname, "./images"),
    rootToPdfs: path.join(__dirname, "./pdfs"),
  });

  const output = Buffer.from(pdf);
  const prep = fromBuffer(output, {
    density: 500,
    saveFilename: rawBoard.id,
    savePath: path.join(__dirname, "./temp"),
    format: "png",
    width: 3508,
    height: 2480,
  });
  if (prep.bulk === undefined) {
    throw new Error(`Failed to get screenshot for: ${rawBoard.id}`);
  }
  await prep.bulk([1]);

  const source = readFileSync(
    path.join(__dirname, "./screenshots/labels-below.1.png")
  );
  const result = readFileSync(
    path.join(__dirname, "./temp/labels-below.1.png")
  );

  expect(source).toMatchImage(result, {
    diffPath: `./${rawBoard.id}-diff.png`,
  });
});

it("prepend-pdf", async () => {
  const rawBoard: Board = JSON.parse(
    readFileSync(path.join(__dirname, "./boards/prepend-pdf.obf")).toString()
  );
  const { pdf } = await boardToPdf(rawBoard, {
    rootToImages: path.join(__dirname, "./images"),
    rootToPdfs: path.join(__dirname, "./pdfs"),
  });
  const output = Buffer.from(pdf);
  const prep = fromBuffer(output, {
    density: 500,
    saveFilename: rawBoard.id,
    savePath: path.join(__dirname, "./temp"),
    format: "png",
    width: 3508,
    height: 2480,
  });
  if (prep.bulk === undefined) {
    throw new Error(`Failed to get screenshot for: ${rawBoard.id}`);
  }
  await prep.bulk([1, 2]);

  const sourceFirst = readFileSync(
    path.join(__dirname, "./screenshots/prepend-pdf.1.png")
  );
  const resultFirst = readFileSync(
    path.join(__dirname, "./temp/prepend-pdf.1.png")
  );

  const sourceSecond = readFileSync(
    path.join(__dirname, "./screenshots/prepend-pdf.2.png")
  );
  const resultSecond = readFileSync(
    path.join(__dirname, "./temp/prepend-pdf.2.png")
  );

  expect(sourceFirst).toMatchImage(resultFirst);
  expect(sourceSecond).toMatchImage(resultSecond);
});
