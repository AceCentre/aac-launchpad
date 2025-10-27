import { GetObjectCommand, ListObjectsCommand, S3 } from "@aws-sdk/client-s3";
import { rmSync, mkdirSync, writeFileSync } from "fs";
import path from "path";
import dotenv from "dotenv";

// Load .env file from the project root
dotenv.config({ path: path.join(__dirname, "../../../.env") });

const streamToString = (stream: any) => {
  return new Promise((resolve, reject) => {
    const chunks: any = [];
    stream.on("data", (chunk: any) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks)));
  });
};

(async () => {
  let symbolsFolder = path.join(
    __dirname,
    "../../../apps/backend/private/symbols"
  );

  if (process.argv.includes("--examples")) {
    symbolsFolder = path.join(__dirname, "../../../examples/symbols");
  }

  try {
    rmSync(symbolsFolder, { recursive: true });
  } catch (error: any) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }

  mkdirSync(symbolsFolder);
  mkdirSync(path.join(symbolsFolder, "./widgit"));
  mkdirSync(path.join(symbolsFolder, "./pcs"));
  mkdirSync(path.join(symbolsFolder, "./pcs-uncompressed"));
  mkdirSync(path.join(symbolsFolder, "./widgit-uncompressed"));
  mkdirSync(path.join(symbolsFolder, "./pcs-high-contrast"));

  console.log("accessKeyId", !!process.env.ACCESS_KEY_ID);
  console.log("secretAccessKey", !!process.env.SECRET_ACCESS_KEY);

  const s3Client = new S3({
    endpoint: "https://fra1.digitaloceanspaces.com/",
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.ACCESS_KEY_ID as any,
      secretAccessKey: process.env.SECRET_ACCESS_KEY as any,
    },
  });

  let allContents: Array<any> = [];
  let loopingKeys = true;
  let localNextMarker: string | undefined = undefined;

  while (loopingKeys) {
    const result: any = await s3Client.send(
      new ListObjectsCommand({
        Bucket: "launchpad-symbols",
        MaxKeys: 10000,
        Marker: localNextMarker,
      })
    );

    const Contents = result.Contents;
    const NextMarker: string | undefined = result.NextMarker;

    localNextMarker = NextMarker;

    if (!Contents) {
      return;
    }

    allContents = [...allContents, ...Contents];

    if (!NextMarker) {
      loopingKeys = false;
    }
  }

  if (allContents === undefined) {
    throw new Error("Contents is undefined");
  }

  for (const content of allContents) {
    if (
      content !== undefined &&
      content.Size !== undefined &&
      content.Key !== undefined &&
      content.Size > 20 // Sometimes a folder is bigger than 0
    ) {
      console.log("Success", content.Key);
      const response = await s3Client.send(
        new GetObjectCommand({ Bucket: "launchpad-symbols", Key: content.Key })
      );

      const data: any = await streamToString(response.Body);
      writeFileSync(path.join(symbolsFolder, content.Key), data);
    } else {
      console.log("Failure", content);
    }
  }
})();
