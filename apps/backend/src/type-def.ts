import { gql } from "apollo-server-express";

export const typeDefs = gql`
  interface TemplateVariable {
    id: String!
    description: String!
    type: String!
    name: String!
  }

  type Option {
    value: String!
    label: String!
    description: String!
  }

  type OptionTemplateVariable implements TemplateVariable {
    id: String!
    name: String!
    description: String!
    type: String!
    options: [Option]!
  }

  type FreeTextTemplateVariable implements TemplateVariable {
    id: String!
    name: String!
    description: String!
    type: String!
    maxLength: Int!
  }

  type NumberTemplateVariable implements TemplateVariable {
    id: String!
    name: String!
    description: String!
    type: String!
    min: Int!
    max: Int!
  }

  type ColorTemplateVariable implements TemplateVariable {
    id: String!
    name: String!
    description: String!
    type: String!
  }

  union TemplateVariableType =
      OptionTemplateVariable
    | FreeTextTemplateVariable
    | NumberTemplateVariable
    | ColorTemplateVariable

  type Template {
    templateName: String!
    templateDescription: String!
    templateVariables: [TemplateVariableType]!
    templateId: String!
    templateImageUrl: String!
  }

  type Query {
    templates: [Template]!
  }

  type BoardResult {
    success: Boolean!
    message: String!
    fileLocation: String!
  }

  input AnswerInput {
    id: String!
    value: String!
  }

  type Mutation {
    generateBoard(templateId: String!, answers: [AnswerInput!]!): BoardResult!
  }
`;
