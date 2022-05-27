import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { typeDefs } from "./type-def";
import { ALL_TEMPLATES } from "templates";
import express, { Request } from "express";
import http from "http";
import { Template, AllTemplateVariable } from "types";
import boardToPdf from "board-to-pdf";
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
      return ALL_TEMPLATES.map(addTypenameToTemplate);
    },
  },

  Mutation: {
    generateBoard: async (
      _: undefined,
      input: GenerateBoardInput,
      context: any
    ) => {
      console.log({
        context,
        captured: process.env["COLLECT_ANALYTICS"] === "true",
        distinctId: context.distinctId,
        event: "generate-board",
        properties: {
          board: input.templateId,
        },
      });
      if (process.env["COLLECT_ANALYTICS"] === "true")
        client.capture({
          distinctId: context.distinctId,
          event: "generate-board",
          properties: {
            board: input.templateId,
          },
        });

      const template = ALL_TEMPLATES.find(
        (x) => x.templateId === input.templateId
      );

      if (!template) {
        throw new Error(`Could not find template with id: ${input.templateId}`);
      }

      const board = templateToBoard(template, input.answers);

      const rootToImages = path.join(__dirname, "../private");
      const pdf = await boardToPdf(board, { rootToImages });

      const fileHash = crypto
        .createHash("sha256")
        .update(JSON.stringify(input))
        .digest("hex");

      pdf.save(path.join("./public/boards", `${fileHash}.pdf`));

      const fileLocation = new URL(
        `/boards/${fileHash}.pdf`,
        getBaseUrl()
      ).toString();

      return {
        success: true,
        message: "Board generated!",
        fileLocation,
      };
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
  console.log("customSessionMiddlewar All cookies", req.cookies);
  if (req.cookies[COOKIE_NAME]) {
    console.log("skipping setting a cookie");
    next();
  } else {
    console.log("setting a cookie");
    res.cookie(COOKIE_NAME, crypto.randomUUID(), {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });
    next();
  }
};

async function setupServer() {
  const app = express();

  const upload = multer({ dest: "private/", fileFilter });

  app.use(cookieParser());
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(customSessionMiddleware);

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

  app.get("/boards/:id", (req, res) => {
    const date = new Date();

    res.download(req.params.id, `launchpad-${date.toISOString()}.pdf`, {
      root: "./public/boards",
    });
  });

  app.use(express.static("public"));

  const httpServer = http.createServer(app);
  const port = process.env.PORT || 4000;

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    context: ({ req }) => {
      console.log("Setting a context of:", {
        distinctId: req.cookies[COOKIE_NAME],
      });

      return { distinctId: req.cookies[COOKIE_NAME] };
    },
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });
  await server.start();
  server.applyMiddleware({ app, path: "/" });
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));

  console.log(`🚀 Server ready at ${getBaseUrl()}${server.graphqlPath}`);
}

setupServer();

const CLEAR_INTERVAL = 10 * 60 * 1000; // 10 minutes
const MIN_STORAGE_TIME = 60000; // 60 Seconds

setInterval(async () => {
  // Get the files then wait a while,
  // this is incase the user only just got the download link
  const filesToDelete = fs.readdirSync("./public/boards");
  await new Promise((res) => setTimeout(res, MIN_STORAGE_TIME));

  // Delete the files
  for (const file of filesToDelete) {
    if (file.includes("sample.pdf")) continue;

    const filePath = path.join("./public/boards", file);
    fs.unlinkSync(filePath);
    console.log(`🗑  Deleting: ${file}`);
  }
}, CLEAR_INTERVAL);

setInterval(async () => {
  // Get the files then wait a while,
  // this is incase the user only just got the download link
  const filesToDelete = fs.readdirSync("./private");
  await new Promise((res) => setTimeout(res, MIN_STORAGE_TIME));

  // Delete the files
  for (const file of filesToDelete) {
    if (file.includes("left.png")) continue;
    if (file.includes("right.png")) continue;

    const filePath = path.join("./private", file);
    fs.unlinkSync(filePath);
    console.log(`🗑  Deleting: ${file}`);
  }
}, CLEAR_INTERVAL);
