# AAC Launchpad

Conveniently create high quality AAC resources.

Visit the GraphQL Playground to get started: https://aac-launchpad-2mtuk.ondigitalocean.app/

## Building the application

```bash
# Install the dependencies
yarn install

# Build the packages
yarn build

# Install the CLI
npm i -g ./apps/cli

# Run the CLI anywhere
launchpad

# Automatically build on any changes
# Hosts the graphql server at http://localhost:4000/
yarn dev
```

## Glossary

- Board - A completed OBF file
- Template - An OBF file with template variables not filled in, it also must specify the variables required and what they do

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `logger`: isomorphic logger (a small wrapper around console.log)
- `scripts`: Jest and eslint configurations
- `tsconfig`: tsconfig.json;s used throughout the monorepo
- `templates`: Stores the static templates
- `types`: Type definitions for the monorepo
- `template-to-board`: Converts a template and result into a board
- `board-to-pdf`: Converts a board to a PDF
- `cli`: The CLI to create templates
- `graphql`: The GraphQL api to create templates

## Attribution

- Thanks to Braille Institute for the [Atkinson Hyperlegible Font](https://brailleinstitute.org/freefont)
- Thanks to the [OpenDyslexic font](https://opendyslexic.org/) project.
- Thanks to Google fonts for [Comic Neue](https://fonts.google.com/specimen/Comic+Neue)
