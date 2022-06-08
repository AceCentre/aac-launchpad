import { Template } from "types";

export const gridOptions: Template = {
  templateVariables: [
    {
      id: "rows",
      type: "number",
      min: 1,
      max: 10,
      description: "rows",
      defaultValue: "1",
      name: "rows",
      hidden: true,
    },
    {
      id: "columns",
      type: "number",
      min: 1,
      max: 10,
      description: "columns",
      defaultValue: "1",
      name: "columns",
      hidden: true,
    },
    {
      id: "order",
      type: "freeText",
      maxLength: 9999,
      description: "orders",
      defaultValue: '[["left"]]',
      name: "orders",
      hidden: true,
    },
    {
      id: "grid",
      type: "preset",
      description: "Grid Layout",
      defaultValue: '[["left"]]',
      name: "Grid Layout",
      presets: [
        {
          value: "single",
          label: "Single",
          description: "Single",
          variableValues: [
            {
              id: "rows",
              value: "1",
            },
            {
              id: "columns",
              value: "1",
            },
            {
              id: "order",
              value: '[["left"]]',
            },
          ],
        },
        {
          value: "double",
          label: "Double",
          description: "Double",
          variableValues: [
            {
              id: "rows",
              value: "1",
            },
            {
              id: "columns",
              value: "2",
            },
            {
              id: "order",
              value: '[["left", "right"]]',
            },
          ],
        },
      ],
    },
  ],
  templateDescription: "Choose grid options",
  templateName: "Grid Options",
  templateId: "grid-options",
  templateImageUrl: "single-tile.png",
  templateVariableGroups: [],

  format: "open-board-0.1",
  id: "grid-options",
  locale: "en-GB",
  name: "Grid Options",
  description_html: "Choose grid options",
  ext_launchpad_options: {},
  images: [],
  buttons: [
    {
      id: "left",
      label: "left",
      border_color: "rgb(0, 0, 55)",
      background_color: "rgb(255, 0, 0)",
    },
    {
      id: "right",
      label: "right",
      border_color: "rgb(0, 0, 55)",
      background_color: "rgb(255, 0, 0)",
    },
  ],

  pages: [
    {
      id: "first",
      grid: {
        rows: { type: "TemplateItem", id: "rows" },
        columns: { type: "TemplateItem", id: "columns" },
        order: { type: "TemplateItem", id: "order" },
      },
    },
  ],
};
