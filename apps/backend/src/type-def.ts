import { gql } from "apollo-server-express";

export const typeDefs = gql`
  interface TemplateVariable {
    id: String!
    description: String!
    type: String!
    name: String!
    defaultValue: String!
    hidden: Boolean
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
    defaultValue: String!
    hidden: Boolean
  }

  type PresetVariableValue {
    id: String!
    value: String!
  }

  type Preset {
    value: String!
    label: String!
    description: String!
    variableValues: [PresetVariableValue!]!
  }

  type PresetTemplateVariable implements TemplateVariable {
    id: String!
    description: String!
    type: String!
    name: String!
    defaultValue: String!
    hidden: Boolean
    presets: [Preset!]!
  }

  type FreeTextTemplateVariable implements TemplateVariable {
    id: String!
    name: String!
    description: String!
    type: String!
    maxLength: Int!
    defaultValue: String!
    hidden: Boolean
  }

  type BooleanTemplateVariable implements TemplateVariable {
    id: String!
    name: String!
    description: String!
    type: String!
    defaultValue: String!
    trueLabel: String!
    falseLabel: String!
    hidden: Boolean
  }

  type ImageUrlTemplateVariable implements TemplateVariable {
    id: String!
    name: String!
    description: String!
    type: String!
    defaultValue: String!
    hidden: Boolean
  }

  type NumberTemplateVariable implements TemplateVariable {
    id: String!
    name: String!
    description: String!
    type: String!
    min: Int!
    max: Int!
    defaultValue: String!
    hidden: Boolean
  }

  type ColorTemplateVariable implements TemplateVariable {
    id: String!
    name: String!
    description: String!
    type: String!
    defaultValue: String!
    hidden: Boolean
  }

  union TemplateVariableType =
      OptionTemplateVariable
    | FreeTextTemplateVariable
    | NumberTemplateVariable
    | ColorTemplateVariable
    | ImageUrlTemplateVariable
    | PresetTemplateVariable
    | BooleanTemplateVariable

  type TemplateVariableGroup {
    id: String!
    variables: [String!]
    name: String!
    description: String!
    openByDefault: Boolean!
  }

  type Template {
    templateName: String!
    templateDescription: String!
    templateDateCreated: String!
    templateFeatured: Boolean!
    templateCategory: String!
    templateSubcategory: String!
    templateVariables: [TemplateVariableType]!
    templateVariableGroups: [TemplateVariableGroup]!
    templateId: String!
    templateShortDescription: String!
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
