import { gql } from "apollo-server";

export const typeDefs = gql`
  type Template {
    templateName: String
  }

  type Query {
    templates: [Template]
  }
`;
