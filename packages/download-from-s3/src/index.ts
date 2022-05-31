import { GetObjectCommand, ListObjectsCommand, S3 } from "@aws-sdk/client-s3";
import { rmSync, mkdirSync, writeFileSync } from "fs";
import path from "path";
import "dotenv/config";

const streamToString = (stream: any) => {
  return new Promise((resolve, reject) => {
    const chunks: any = [];
    stream.on("data", (chunk: any) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks)));
  });
};

(async () => {
  const symbolsFolder = path.join(
    __dirname,
    "../../../apps/backend/private/symbols"
  );

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
  mkdirSync(path.join(symbolsFolder, "./uncompressed-widgit"));
  mkdirSync(path.join(symbolsFolder, "./uncompressed-pcs"));

  const s3Client = new S3({
    endpoint: "https://fra1.digitaloceanspaces.com/",
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.ACCESS_KEY_ID as any,
      secretAccessKey: process.env.SECRET_ACCESS_KEY as any,
    },
  });

  const { Contents } = await s3Client.send(
    new ListObjectsCommand({ Bucket: "launchpad-symbols" })
  );

  if (Contents === undefined) {
    throw new Error("Contents is undefined");
  }

  for (const content of Contents) {
    if (
      content !== undefined &&
      content.Size !== undefined &&
      content.Key !== undefined &&
      content.Size > 0
    ) {
      const response = await s3Client.send(
        new GetObjectCommand({ Bucket: "launchpad-symbols", Key: content.Key })
      );

      const data: any = await streamToString(response.Body);
      writeFileSync(path.join(symbolsFolder, content.Key), data);
    }
  }
})();
