# AAC Launchpad

Conveniently create high quality AAC resources

## Glossary

- Board - A completed OBF file
- Template - An OBF file with template variables not filled in, it also must specify the variables required and what they do

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `api`: an [Express](https://expressjs.com/) server
- `logger`: isomorphic logger (a small wrapper around console.log)
- `scripts`: Jest and eslint configurations
- `tsconfig`: tsconfig.json;s used throughout the monorepo
- `templates`: Stores the static templates
- `types`: Type definitions for the monorepo
- `board-to-pdf`: Converts a board to a PDF

### Utilities

This turborepo has some additional tools already setup for you:

- [Typescript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
