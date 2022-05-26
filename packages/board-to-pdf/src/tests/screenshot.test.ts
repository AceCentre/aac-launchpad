import boardToPdf from "..";
import path from "path";
import { readFileSync } from "fs";
import { Board } from "types";
import { fromBuffer } from "pdf2pic";
import { toMatchImage } from "jest-image-matcher";

expect.extend({ toMatchImage });

it("alphabet-chart", async () => {
  const source = readFileSync(
    path.join(__dirname, "./screenshots/alphabet-chart.1.png")
  );
  const rawBoard: Board = JSON.parse(
    readFileSync(path.join(__dirname, "./boards/alphabet-chart.obf")).toString()
  );
  const pdf = await boardToPdf(rawBoard, {
    rootToImages: path.join(__dirname, "./images"),
  });
  const output = Buffer.from(pdf.output("arraybuffer"));
  const prep = fromBuffer(output, {
    density: 500,
    saveFilename: rawBoard.id,
    savePath: ".",
    format: "png",
    width: 3508,
    height: 2480,
  });

  if (prep.bulk === undefined) {
    throw new Error(`Failed to get screenshot for: ${rawBoard.id}`);
  }

  const [result]: Array<any> = await prep.bulk([1], true);

  expect(result.base64).toMatchImage(source, { diffPath: "diff.png" });
});
