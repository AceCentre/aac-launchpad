import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { typeDefs } from "./type-def";
import { WEB_TEMPLATES } from "templates";
import { GUIDE_TEMPLATES } from "templates";
import express, { Request } from "express";
import http from "http";
import { Template, AllTemplateVariable, Result } from "types";
import boardToPdf from "board-to-pdf";
import { guideToPdf } from "board-to-pdf";
import templateToBoard from "template-to-board";
import crypto from "crypto";
import path from "path";
import fs from "fs";
import multer from "multer";
import cors from "cors";
import cookieParser from "cookie-parser";
import PostHog from "posthog-node";
import { onShutdown } from "node-graceful-shutdown";

const client = new PostHog("phc_Nlj20BgEB3vtw36wCPHFpTTVqpmvEzfD3IrG5zw7B2h");

// Helper function to resolve preset values
const getResults = (
  template: Template,
  templateResults: any,
  presetOverrides: any
): Array<Result> => {
  // First, resolve preset values
  const resolvedPresets: { [key: string]: string } = {};

  for (const variable of template.templateVariables) {
    if (variable.type === "preset" && templateResults[variable.id]) {
      const presetValue = templateResults[variable.id];
      const presetVariable = variable as any; // Cast to access presets

      const selectedPreset = presetVariable.presets.find(
        (preset: any) => preset.value === presetValue
      );

      if (selectedPreset) {
        // Apply all variable values from the selected preset
        for (const presetVarValue of selectedPreset.variableValues) {
          resolvedPresets[presetVarValue.id] = presetVarValue.value;
        }
      }
    }
  }

  return template.templateVariables
    .sort((a, b) => {
      if (a.type === "preset" && b.type !== "preset") {
        return 1;
      }
      if (a.type !== "preset" && b.type !== "preset") {
        return -1;
      }
      return 0;
    })
    .map((currentVariable) => {
      // If the user gave an explicit answer use that
      if (templateResults[currentVariable.id]) {
        return {
          id: currentVariable.id,
          value: templateResults[currentVariable.id],
        };
      }

      // If there was a preset answer give that
      if (presetOverrides[currentVariable.id]) {
        return {
          id: currentVariable.id,
          value: presetOverrides[currentVariable.id],
        };
      }

      // If there was a resolved preset value use that
      if (resolvedPresets[currentVariable.id]) {
        return {
          id: currentVariable.id,
          value: resolvedPresets[currentVariable.id],
        };
      }

      // Otherwise use the default value
      return {
        id: currentVariable.id,
        value: currentVariable.defaultValue,
      };
    });
};

onShutdown(async () => {
  client.shutdown();
});

const templateMap: any = {
  option: "OptionTemplateVariable",
  freeText: "FreeTextTemplateVariable",
  number: "NumberTemplateVariable",
  color: "ColorTemplateVariable",
  imageUrl: "ImageUrlTemplateVariable",
  preset: "PresetTemplateVariable",
  boolean: "BooleanTemplateVariable",
};

const addTypenameToTemplate = (template: Template): any => {
  return {
    ...template,
    templateVariables: template.templateVariables.map(
      (templateVariable: AllTemplateVariable) => {
        return {
          ...templateVariable,
          __typename: templateMap[templateVariable.type],
        };
      }
    ),
  };
};

type GenerateBoardInput = {
  templateId: string;
  answers: Array<{ id: string; value: string }>;
};

const resolvers = {
  Template: {
    templateImageUrl: (template: Template): String => {
      return new URL(template.templateImageUrl, getBaseUrl()).toString();
    },
  },
  Query: {
    templates: () => {
      return WEB_TEMPLATES.map(addTypenameToTemplate);
    },
    template: (_: null, { id }: { id: string }) => {
      return WEB_TEMPLATES.map(addTypenameToTemplate).find(
        (x: { templateId: string }) => x.templateId === id
      );
    },
  },

  Mutation: {
    generateBoard: async (
      _: undefined,
      input: GenerateBoardInput,
      context: any
    ) => {
      const mutationStartTime = process.hrtime();

      let analyticsProperties: { [key: string]: string } = {};
      const keysToCollect = ["language", "symbol-system", "grid"];

      const hashable: GenerateBoardInput = {
        templateId: input.templateId,
        answers: input.answers.sort((a, b) => a.id.localeCompare(b.id)),
      };

      const fileHash =
        input.templateId +
        "--" +
        crypto
          .createHash("sha256")
          .update(JSON.stringify(hashable))
          .digest("hex");
      const fileLocation = new URL(
        `/boards/${fileHash}.pdf`,
        getBaseUrl()
      ).toString();

      // Technically, this is vulnerable to a timing attack. I think the data we are risking
      // is probably okay just now. Lets just make sure people dont enter their passwords into the
      // boxes at the bottom.
      if (fs.existsSync(path.join("./public/boards", `${fileHash}.pdf`))) {
        console.log("Board served from cache!", fileHash);

        const [mutationSeconds, mutationNanoSeconds] =
          process.hrtime(mutationStartTime);

        const fullTimeInMs =
          mutationSeconds * 1000 + mutationNanoSeconds / 1000000;

        console.log({
          context,
          captured: process.env["COLLECT_ANALYTICS"] === "true",
          distinctId: context.distinctId,
          event: "generate-board",
          properties: {
            timeTaken: fullTimeInMs,
            board: input.templateId,
            fullGeneration: false,
            ...analyticsProperties,
          },
        });

        if (process.env["COLLECT_ANALYTICS"] === "true")
          client.capture({
            distinctId: context.distinctId,
            event: "generate-board",
            properties: {
              timeTaken: fullTimeInMs,
              board: input.templateId,
              fullGeneration: false,
              ...analyticsProperties,
            },
          });

        console.log("Board served from cache!", fileHash);
        return {
          success: true,
          message: "Board generated!",
          fileLocation,
        };
      } else {
        console.log("Board not in cache!", fileHash);
      }

      for (const currentAnswer of input.answers) {
        if (keysToCollect.includes(currentAnswer.id)) {
          analyticsProperties[currentAnswer.id] = currentAnswer.value;
        }
      }

      const template = WEB_TEMPLATES.find(
        (x) => x.templateId === input.templateId
      );

      if (!template) {
        throw new Error(`Could not find template with id: ${input.templateId}`);
      }

      // Convert answers to a map for getResults
      const templateResults: { [key: string]: string } = {};
      for (const answer of input.answers) {
        templateResults[answer.id] = answer.value;
      }

      // Process preset values using getResults
      const results = getResults(template, templateResults, {});

      const board = templateToBoard(template, results);

      const rootToImages = path.join(__dirname, "../private");
      const rootToPdfs = path.join(__dirname, "../public");
      const { pdf, totalNanoSeconds, totalSeconds } = await boardToPdf(board, {
        rootToImages,
        rootToPdfs,
        verboseTimingLogs: true,
      });

      console.log(
        `Board generation (${board.id}) ${totalSeconds}.${totalNanoSeconds}s`
      );

      const writeStartTime = process.hrtime();

      // Ensure the boards directory exists
      const boardsDir = path.join("./public/boards");
      if (!fs.existsSync(boardsDir)) {
        fs.mkdirSync(boardsDir, { recursive: true });
      }

      fs.writeFileSync(
        path.join("./public/boards", `${fileHash}.pdf`),
        Buffer.from(pdf)
      );

      const [writeSeconds, writeNanoSeconds] = process.hrtime(writeStartTime);

      console.log(
        `Write to disk took (${board.id}) ${writeSeconds}.${writeNanoSeconds}s`
      );

      const [mutationSeconds, mutationNanoSeconds] =
        process.hrtime(mutationStartTime);

      console.log(
        `Mutation took (${board.id}) ${mutationSeconds}.${mutationNanoSeconds}s`
      );

      const fullTimeInMs =
        mutationSeconds * 1000 + mutationNanoSeconds / 1000000;

      console.log({
        context,
        captured: process.env["COLLECT_ANALYTICS"] === "true",
        distinctId: context.distinctId,
        event: "generate-board",
        properties: {
          timeTaken: fullTimeInMs,
          board: input.templateId,
          fullGeneration: true,
          ...analyticsProperties,
        },
      });

      if (process.env["COLLECT_ANALYTICS"] === "true")
        client.capture({
          distinctId: context.distinctId,
          event: "generate-board",
          properties: {
            timeTaken: fullTimeInMs,
            board: input.templateId,
            fullGeneration: true,
            ...analyticsProperties,
          },
        });

      return {
        success: true,
        message: "Board generated!",
        fileLocation,
      };
    },

    generateGuide: async (
      _: undefined,
      input: { templateId: string },
      context: any
    ) => {
      const mutationStartTime = process.hrtime();

      const fileHash = `guide-${input.templateId}-${crypto
        .randomBytes(8)
        .toString("hex")}`;
      const fileLocation = new URL(
        `/boards/${fileHash}.pdf`,
        getBaseUrl()
      ).toString();

      // Check if guide already exists in cache
      if (fs.existsSync(path.join("./public/boards", `${fileHash}.pdf`))) {
        console.log("Guide served from cache!", fileHash);
        return {
          success: true,
          message: "Guide generated!",
          fileLocation,
        };
      }

      const guide = GUIDE_TEMPLATES.find(
        (x) => x.templateId === input.templateId
      );

      if (!guide) {
        throw new Error(`Could not find guide with id: ${input.templateId}`);
      }

      console.log(`Generating guide: ${guide.title}`);

      try {
        const pdfBuffer = await guideToPdf(guide, {
          rootToImages: path.join(__dirname, "../public"),
        });
        const boardsDir = path.join("./public/boards");
        if (!fs.existsSync(boardsDir)) {
          fs.mkdirSync(boardsDir, { recursive: true });
        }
        fs.writeFileSync(
          path.join(boardsDir, `${fileHash}.pdf`),
          pdfBuffer
        );

        const [mutationSeconds, mutationNanoSeconds] =
          process.hrtime(mutationStartTime);
        const fullTimeInMs =
          mutationSeconds * 1000 + mutationNanoSeconds / 1000000;

        console.log(`Guide generation (${guide.title}) took ${fullTimeInMs}ms`);

        return {
          success: true,
          message: "Guide generated!",
          fileLocation,
        };
      } catch (error) {
        console.error(`Error generating guide ${input.templateId}:`, error);
        throw new Error(
          `Failed to generate guide: ${(error as Error).message}`
        );
      }
    },
  },
};

const getBaseUrl = () => {
  if (process.env.BASE_URL) {
    return process.env.BASE_URL;
  }

  return "http://localhost:4000";
};

const ACCEPTED_MIME_TYPES = ["image/jpeg", "image/png"];

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
): void => {
  const mimeType = file.mimetype.toLowerCase();

  if (ACCEPTED_MIME_TYPES.includes(mimeType)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const COOKIE_NAME = "launchpad-session";

// This is NOT secure, so don't do anything important based on this session token
// This should only be used for analytics which are totally anon so it doesn't
// really matter if a user is spoofed.
const customSessionMiddleware = (req: any, res: any, next: any) => {
  if (req.cookies[COOKIE_NAME]) {
    req[COOKIE_NAME] = req.cookies[COOKIE_NAME];
    next();
  } else {
    const uuid = crypto.randomUUID();
    res.cookie(COOKIE_NAME, uuid, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
      sameSite: "None",
      domain: "aac-launchpad-2mtuk.ondigitalocean.app",
      secure: true,
    });
    req[COOKIE_NAME] = uuid;
    next();
  }
};

async function setupServer() {
  const app = express();

  const upload = multer({
    dest: "private/",
    fileFilter,
    limits: {
      fileSize: 50 * 1024 * 1024, // 50MB limit
      files: 2, // Maximum 2 files (userPhoto and devicePhoto)
    },
  });

  app.use(
    cors({
      origin: [
        "http://localhost:3000",
        "https://acecentre.org.uk",
        "https://www.acecentre.org.uk",
      ],
      credentials: true,
    })
  );
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(customSessionMiddleware);

  // Error handling middleware for multer
  app.use((error: any, req: any, res: any, next: any) => {
    if (error instanceof multer.MulterError) {
      if (error.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({
          success: false,
          error: "File too large. Maximum size is 50MB.",
        });
      }
      if (error.code === "LIMIT_FILE_COUNT") {
        return res.status(400).json({
          success: false,
          error: "Too many files uploaded.",
        });
      }
      return res.status(400).json({
        success: false,
        error: "File upload error: " + error.message,
      });
    }
    next(error);
  });

  app.post("/image-upload", upload.single("image"), (req, res) => {
    if (!req.file) {
      return res.send({
        success: false,
      });
    } else {
      return res.send({
        success: true,
        name: req.file.filename,
      });
    }
  });

  app.post(
    "/api/upload-photos",
    upload.fields([
      { name: "userPhoto", maxCount: 1 },
      { name: "devicePhoto", maxCount: 1 },
    ]),
    (req, res) => {
      try {
        const files = req.files as {
          [fieldname: string]: Express.Multer.File[];
        };
        const uploadedPaths: { [key: string]: string } = {};

        console.log("Uploaded files:", files);

        if (files.userPhoto && files.userPhoto[0]) {
          uploadedPaths.userPhotoPath = files.userPhoto[0].path;
          console.log("User photo saved to:", files.userPhoto[0].path);
          console.log(
            "User photo exists:",
            fs.existsSync(files.userPhoto[0].path)
          );
        }

        if (files.devicePhoto && files.devicePhoto[0]) {
          uploadedPaths.devicePhotoPath = files.devicePhoto[0].path;
          console.log("Device photo saved to:", files.devicePhoto[0].path);
          console.log(
            "Device photo exists:",
            fs.existsSync(files.devicePhoto[0].path)
          );
        }

        console.log("Returning paths:", uploadedPaths);

        res.json({
          success: true,
          paths: uploadedPaths,
        });
      } catch (error) {
        console.error("Error uploading photos:", error);
        res.status(500).json({
          success: false,
          error: "Failed to upload photos",
        });
      }
    }
  );

  app.get("/test-cors", (req, res) => {
    res.json({ ok: true });
  });

  app.get("/boards/:id", (req, res) => {
    const date = new Date();

    const boardId = req.params.id.split("--")[0];

    res.download(req.params.id, `${boardId}-${date.toISOString()}.pdf`, {
      root: "./public/boards",
    });
  });

  app.get("/boards/:id.docx", (req, res) => {
    const date = new Date();
    const boardId = req.params.id.split("--")[0];

    res.download(
      req.params.id + ".docx",
      `${boardId}-${date.toISOString()}.docx`,
      {
        root: "./public/boards",
      }
    );
  });

  app.get("/boards/:id.zip", (req, res) => {
    const date = new Date();
    const boardId = req.params.id.split("--")[0];

    res.download(
      req.params.id + ".zip",
      `${boardId}-${date.toISOString()}.zip`,
      {
        root: "./public/boards",
      }
    );
  });

  app.get("/api/activity-book", (req, res) => {
    try {
      const guides = GUIDE_TEMPLATES.map((guide) => ({
        templateId: guide.templateId,
        title: guide.title,
        activityType: guide.activityType,
        category: guide.category,
        badgeText: guide.badgeText,
        mainImage: guide.mainImage,
        sections: guide.sections,
        tooltipText: (guide as any).tooltipText, // Include tooltipText from guide data
      }));

      res.json(guides);
    } catch (error) {
      console.error("Error fetching guides:", error);
      res.status(500).json({ error: "Failed to fetch guides" });
    }
  });

  app.get("/api/activity-book/categories", (req, res) => {
    try {
      const categories = Array.from(
        new Set(GUIDE_TEMPLATES.map((guide) => guide.category))
      ).filter(Boolean);
      res.json(categories);
    } catch (error) {
      console.error("Error fetching guide categories:", error);
      res.status(500).json({ error: "Failed to fetch guide categories" });
    }
  });

  app.get("/api/activity-book/switches", (req, res) => {
    try {
      const switchesDir = path.join(
        __dirname,
        "../public/activity-book/switches"
      );
      const files = fs.readdirSync(switchesDir);
      const imageFiles = files.filter(
        (file) =>
          file.toLowerCase().endsWith(".png") ||
          file.toLowerCase().endsWith(".jpg") ||
          file.toLowerCase().endsWith(".jpeg")
      );

      const switchImages = imageFiles.map((file) => ({
        filename: file,
        displayName: file.replace(/\.(png|jpg|jpeg)$/i, "").replace(/_/g, " "),
        path: `activity-book/switches/${file}`,
      }));

      res.json(switchImages);
    } catch (error) {
      console.error("Error fetching switch images:", error);
      res.status(500).json({ error: "Failed to fetch switch images" });
    }
  });

  app.post("/api/activity-book/with-cover", async (req, res) => {
    try {
      const { templateId, userName } = req.body;

      if (!templateId) {
        return res.status(400).json({ error: "templateId is required" });
      }

      const guide = GUIDE_TEMPLATES.find((g) => g.templateId === templateId);
      if (!guide) {
        return res.status(404).json({ error: "Guide not found" });
      }

      // Import the function dynamically to avoid circular dependencies
      const { generateCoverPagePdf, guideToPdf } = await import("board-to-pdf");

      // Debug logging
      console.log("Photo paths received:", {
        userPhotoPath: req.body.userPhotoPath,
        devicePhotoPath: req.body.devicePhotoPath,
        userName: userName,
      });

      // Generate the cover PDF (2 pages) and activity book, then merge into one PDF
      const coverPdfBuffer = await generateCoverPagePdf({
        userName,
        activityBookTitle: guide.title,
        activityBookLevel: guide.badgeText,
        activityBookCategory: guide.category,
        userPhotoPath: req.body.userPhotoPath,
        devicePhotoPath: req.body.devicePhotoPath,
      });

      // Generate the activity book PDF
      const activityBookPdf = await guideToPdf(guide, {
        rootToImages: path.resolve(__dirname, "../public"),
      });

      // Merge the cover PDF (2 pages) with the activity book PDF
      const { PDFDocument } = await import("pdf-lib");
      const mergedPdf = await PDFDocument.create();

      // Load and copy cover pages (2 pages)
      const coverPdf = await PDFDocument.load(coverPdfBuffer);
      const coverPages = await mergedPdf.copyPages(
        coverPdf,
        coverPdf.getPageIndices()
      );
      coverPages.forEach((page) => mergedPdf.addPage(page));

      // Load and copy activity book pages
      const activityPdf = await PDFDocument.load(activityBookPdf);
      const activityPages = await mergedPdf.copyPages(
        activityPdf,
        activityPdf.getPageIndices()
      );
      activityPages.forEach((page) => mergedPdf.addPage(page));

      // Save the merged PDF
      const mergedPdfBytes = await mergedPdf.save();

      // Generate unique filename
      const fileHash = `activity-book-with-cover-${templateId}-${crypto
        .randomBytes(8)
        .toString("hex")}`;

      // Save the merged PDF file - ensure directory exists
      const boardsDir = path.join("./public/boards");
      if (!fs.existsSync(boardsDir)) {
        fs.mkdirSync(boardsDir, { recursive: true });
      }
      const pdfPath = path.join(boardsDir, `${fileHash}.pdf`);
      fs.writeFileSync(pdfPath, Buffer.from(mergedPdfBytes));

      res.json({
        success: true,
        message: "Activity book with cover generated!",
        pdfLocation: new URL(
          `/boards/${fileHash}.pdf`,
          getBaseUrl()
        ).toString(),
      });
    } catch (error) {
      console.error("Error generating activity book with cover:", error);
      res.status(500).json({
        error: "Failed to generate activity book with cover",
        details: error instanceof Error ? error.message : "Unknown error",
      });
    }
  });

  app.post("/api/activity-book/bulk-download", async (req, res) => {
    try {
      const {
        templateIds,
        userName,
        userPhotoPath,
        devicePhotoPath,
        selectedSwitchImage,
      } = req.body;

      if (
        !templateIds ||
        !Array.isArray(templateIds) ||
        templateIds.length === 0
      ) {
        return res.status(400).json({ error: "templateIds array is required" });
      }

      // Generate the cover PDF (2 pages) and activity guides, then merge into one PDF
      const { generateCoverPagePdf, guideToPdf } = await import("board-to-pdf");
      const { PDFDocument } = await import("pdf-lib");

      console.log("Starting PDF generation...");

      // Create the final merged PDF
      const finalPdf = await PDFDocument.create();
      console.log("Created PDF document");

      // Add cover pages (2 pages) FIRST
      console.log("Generating cover PDF...");
      const coverPdfBuffer = await generateCoverPagePdf({
        userName: userName || "My",
        activityBookTitle: "Switch Activity Book",
        activityBookLevel: "Mixed",
        activityBookCategory: "Switch Activities",
        userPhotoPath,
        devicePhotoPath,
      });
      console.log("Cover PDF generated, size:", coverPdfBuffer.length, "bytes");

      console.log("Loading cover PDF into final document...");
      const coverPdf = await PDFDocument.load(coverPdfBuffer);
      const coverPages = await finalPdf.copyPages(
        coverPdf,
        coverPdf.getPageIndices()
      );
      coverPages.forEach((page) => finalPdf.addPage(page));
      console.log("Cover pages added to final PDF");

      // Generate and add all guide PDFs
      console.log("Generating activity guide PDFs...");
      for (const templateId of templateIds) {
        const guide = GUIDE_TEMPLATES.find((g) => g.templateId === templateId);
        if (!guide) {
          console.log(`Guide not found: ${templateId}`);
          continue;
        }

        console.log(`Processing guide: ${guide.title}`);

        // Create a modified guide with the selected switch image
        // Skip replacement for set-switches (all-turn-it.png, it-click-on.png, etc.)
        const modifiedGuide = selectedSwitchImage
          ? {
              ...guide,
              sections: guide.sections.map((section) => ({
                ...section,
                image:
                  section.image && section.image.includes("set-switches")
                    ? section.image // Keep set-switch images unchanged
                    : section.image
                    ? selectedSwitchImage
                    : section.image,
              })),
            }
          : guide;

        const pdfBuffer = await guideToPdf(modifiedGuide, {
          rootToImages: path.join(__dirname, "../public"),
        });
        console.log(
          `Guide PDF generated for ${guide.title}, size:`,
          pdfBuffer.length,
          "bytes"
        );

        console.log(`Loading guide PDF into final document...`);
        const guidePdf = await PDFDocument.load(pdfBuffer);
        const guidePages = await finalPdf.copyPages(
          guidePdf,
          guidePdf.getPageIndices()
        );
        guidePages.forEach((page) => finalPdf.addPage(page));
        console.log(`Guide pages added to final PDF: ${guide.title}`);
      }

      // Save the final merged PDF
      console.log("Saving final PDF...");
      const finalPdfBuffer = Buffer.from(await finalPdf.save());
      console.log("Final PDF saved, size:", finalPdfBuffer.length, "bytes");

      // Generate unique filename for the PDF
      const pdfHash = `activity-book-with-customization-${crypto
        .randomBytes(8)
        .toString("hex")}`;

      // Ensure boards directory exists before writing
      const boardsDir = path.join("./public/boards");
      if (!fs.existsSync(boardsDir)) {
        fs.mkdirSync(boardsDir, { recursive: true });
      }
      const pdfPath = path.join(boardsDir, `${pdfHash}.pdf`);

      // Save the PDF file
      fs.writeFileSync(pdfPath, finalPdfBuffer);

      console.log(
        `PDF created: ${pdfHash}.pdf (${finalPdfBuffer.length} bytes)`
      );

      res.json({
        success: true,
        message: "PDF created successfully!",
        pdfLocation: new URL(`/boards/${pdfHash}.pdf`, getBaseUrl()).toString(),
      });
    } catch (error: any) {
      console.error("Error creating PDF:", error);
      console.error("Error details:", {
        message: error?.message || "Unknown error",
        stack: error?.stack,
        name: error?.name,
      });
      res.status(500).json({
        success: false,
        error: "Failed to create PDF",
      });
    }
  });

  app.use(express.static("public"));

  const httpServer = http.createServer(app);
  const port = process.env.PORT || 4000;

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    context: ({ req }: { req: any }) => {
      return { distinctId: req[COOKIE_NAME] };
    },
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });
  await server.start();
  // server.applyMiddleware({ app, path: "/" });  remove 227
  server.applyMiddleware({
    app,
    path: "/",
    cors: {
      origin: [
        "http://localhost:3000",
        "https://acecentre.org.uk",
        "https://www.acecentre.org.uk",
      ],
      credentials: true,
    },
  });
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));

  console.log(`🚀 Server ready at ${getBaseUrl()}${server.graphqlPath}`);
}

setupServer();

const CLEAR_INTERVAL = 60 * 60 * 1000; // 60 minutes
const MIN_STORAGE_TIME = 60000; // 60 Seconds

// setInterval(async () => {
//   // Get the files then wait a while,
//   // this is incase the user only just got the download link
//   const filesToDelete = fs.readdirSync("./public/boards");
//   await new Promise((res) => setTimeout(res, MIN_STORAGE_TIME));

//   // Delete the files
//   for (const file of filesToDelete) {
//     if (file.includes("sample.pdf")) continue;

//     const filePath = path.join("./public/boards", file);
//     fs.unlinkSync(filePath);
//     console.log(`🗑  Deleting: ${file}`);
//   }
// }, CLEAR_INTERVAL);

setInterval(async () => {
  // Get the files then wait a while,
  // this is incase the user only just got the download link
  const filesToDelete = fs.readdirSync("./private");
  await new Promise((res) => setTimeout(res, MIN_STORAGE_TIME));

  // Delete the files
  for (const file of filesToDelete) {
    if (file.includes("left.png")) continue;
    if (file.includes("right.png")) continue;
    if (file.includes("front-page.pdf")) continue;
    if (file.includes("symbols")) continue;
    if (file.includes("blank")) continue;

    const filePath = path.join("./private", file);
    fs.unlinkSync(filePath);
    console.log(`🗑  Deleting: ${file}`);
  }
}, CLEAR_INTERVAL);
