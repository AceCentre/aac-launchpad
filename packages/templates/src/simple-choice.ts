import { Template } from "types";

export const simpleChoice: Template = {
  templateCategory: "Symbol Charts",
  templateFeatured: false,

  templateId: "simple-choice",
  templateDateCreated: "2022-07-20T12:00:00+01:00",
  templateName: "Choice between two options",
  templateDescription:
    "Create a board that allows you to choose between two custom options",
  templateImageUrl: "choice.png",
  templateVariables: [
    {
      id: "leftLabel",
      description: "Text for the left choice",
      type: "freeText",
      name: "Left Label",
      defaultValue: "Left",
      maxLength: 20,
    },
    {
      id: "rightLabel",
      description: "Text for the right choice",
      type: "freeText",
      name: "Right Label",
      defaultValue: "Right",
      maxLength: 20,
    },
    {
      id: "leftBorderColor",
      name: "Left Border Color",
      description: "The color of the border for the left box",
      type: "color",
      defaultValue: "rgb(0,0,0)",
    },
    {
      id: "leftBackgroundColor",
      name: "Left Background Color",
      description: "The color of the background for the left box",
      type: "color",
      defaultValue: "rgb(255,0,0)",
    },
    {
      id: "leftTextColor",
      name: "Left Text Color",
      description: "The color of the text in the left box",
      type: "color",
      defaultValue: "rgb(255,255,255)",
    },
    {
      id: "rightBorderColor",
      name: "Right Border Color",
      description: "The color of the border for the right box",
      type: "color",
      defaultValue: "rgb(0,0,0)",
    },
    {
      id: "rightBackgroundColor",
      name: "Right Background Color",
      description: "The color of the background for the right box",
      type: "color",
      defaultValue: "rgb(0,0,200)",
    },
    {
      id: "rightTextColor",
      name: "Right Text Color",
      description: "The color of the text in the right box",
      type: "color",
      defaultValue: "rgb(255,255,255)",
    },
  ],
  templateVariableGroups: [],

  format: "open-board-0.1",
  id: "simple-choice",
  name: "Choice between two options",
  locale: "en-GB",
  description_html: "A board that allows you to choose between two options",

  ext_launchpad_options: {},
  images: [],
  buttons: [
    {
      id: "left",
      label: { id: "leftLabel", type: "TemplateItem" },
      border_color: { id: "leftBorderColor", type: "TemplateItem" },
      background_color: { id: "leftBackgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "leftTextColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "right",
      label: { id: "rightLabel", type: "TemplateItem" },
      border_color: { id: "rightBorderColor", type: "TemplateItem" },
      background_color: { id: "rightBackgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "rightTextColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
  ],

  pages: [
    {
      id: "first",
      grid: {
        rows: 1,
        columns: 2,
        order: [["left", "right"]],
      },
    },
  ],
};
