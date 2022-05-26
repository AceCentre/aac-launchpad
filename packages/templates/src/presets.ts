import { Template } from "types";

export const presetExample: Template = {
  templateVariables: [
    {
      id: "firstLabel",
      description: "The label of the first tile",
      type: "freeText",
      name: "FreeText",
      defaultValue: "First tile",
      hidden: true,
      maxLength: 20,
    },
    {
      id: "backgroundColor",
      description: "The color of the background",
      type: "color",
      name: "Background Color",
      defaultValue: "rgb(0,0,0)",
      hidden: true,
    },
    {
      id: "textColor",
      description: "The color of the text",
      type: "color",
      name: "Text Color",
      defaultValue: "rgb(255,0,0)",
      hidden: true,
    },
    {
      id: "borderColor",
      description: "The color of the border",
      type: "color",
      name: "Border Color",
      defaultValue: "rgb(255,0,0)",
    },
    {
      id: "colorPreset",
      description: "The color preset",
      type: "preset",
      name: "Color Preset",
      defaultValue: "black-white",
      presets: [
        {
          label: "Black and White",
          value: "black-white",
          description: "A black and white theme",
          variableValues: [
            { id: "backgroundColor", value: "rgb(255,255,255)" },
            { id: "borderColor", value: "rgb(0,0,0)" },
            { id: "textColor", value: "rgb(0,0,0)" },
          ],
        },
        {
          label: "High Contrast",
          value: "high-contrast",
          description: "A high contrast theme",
          variableValues: [
            { id: "backgroundColor", value: "rgb(0,0,0)" },
            { id: "borderColor", value: "rgb(255,255,0)" },
            { id: "textColor", value: "rgb(255,255,0)" },
          ],
        },
      ],
    },
  ],
  templateVariableGroups: [],

  templateDescription: "Create simple board using presets",
  templateName: "Presets Example",
  templateId: "preset-example",
  templateImageUrl: "single-tile.png",

  format: "open-board-0.1",
  id: "presets-example",
  locale: "en-GB",
  name: "Presets Example",
  description_html: "Create simple board using presets",
  ext_launchpad_options: {},
  buttons: [
    {
      id: "first",
      label: { id: "firstLabel", type: "TemplateItem" },

      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
    },
    {
      id: "second",
      label: "Second",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
    },
    {
      id: "third",
      label: "Third",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
    },
    {
      id: "fourth",
      label: "Fourth",
      border_color: { id: "borderColor", type: "TemplateItem" },
      background_color: { id: "backgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "textColor", type: "TemplateItem" },
    },
  ],
  images: [],
  pages: [
    {
      id: "first",
      grid: {
        rows: 2,
        columns: 2,
        order: [
          ["first", "second"],
          ["third", "fourth"],
        ],
      },
    },
  ],
};
