import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { typeDefs } from "./type-def";
import { ALL_TEMPLATES } from "templates";
import express from "express";
import http from "http";
import { Template, AllTemplateVariable } from "types";
import boardToPdf from "board-to-pdf";
import templateToBoard from "template-to-board";
import crypto from "crypto";
import path from "path";
import fs from "fs";

const templateMap: any = {
  option: "OptionTemplateVariable",
  freeText: "FreeTextTemplateVariable",
  number: "NumberTemplateVariable",
  color: "ColorTemplateVariable",
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
    generateBoard: async (_: undefined, input: GenerateBoardInput) => {
      const template = ALL_TEMPLATES.find(
        (x) => x.templateId === input.templateId
      );

      if (!template) {
        throw new Error(`Could not find template with id: ${input.templateId}`);
      }

      const board = templateToBoard(template, input.answers);
      const pdf = boardToPdf(board);

      const fileHash = crypto
        .createHash("sha256")
        .update(JSON.stringify(input))
        .digest("hex");

      fs.writeFileSync(
        path.join("./public/boards", `${fileHash}.pdf`),
        pdf.output()
      );

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

async function setupServer() {
  const app = express();

  app.get("/boards/:id", (req, res) => {
    const date = new Date();

    const files = fs.readdirSync("./public/boards");

    console.log({ files, fileName: req.params.id });

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
