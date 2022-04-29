import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { typeDefs } from "./type-def";
import { ALL_TEMPLATES } from "templates";

const templateMap: any = {
  option: "OptionTemplateVariable",
  freeText: "FreeTextTemplateVariable",
  number: "NumberTemplateVariable",
  color: "ColorTemplateVariable",
};

const resolvers = {
  Query: {
    templates: () => {
      console.log("RESOLVING");

      return ALL_TEMPLATES.map((template) => {
        return {
          ...template,
          templateVariables: template.templateVariables.map(
            (templateVariable) => {
              return {
                ...templateVariable,
                __typename: templateMap[templateVariable.type],
              };
            }
          ),
        };
      });
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
