import { Template } from "types";

export const labelsBelow: Template = {
  templateCategory: "Symbol Charts",
  templateSubcategory: "Symbol Charts",

  templateShortDescription: "",

  templateFeatured: false,

  templateDateCreated: "2022-07-20T12:00:00+01:00",
  templateId: "labels-below",
  templateName: "Labels Below",
  templateDescription:
    "Create a board that uses images and has some labels below the cell",
  templateImageUrl: "choice.png",
  templateVariables: [
    {
      id: "label_below",
      type: "boolean",
      defaultValue: "false",
      name: "Label below",
      description: "Show a label below the cell",
      trueLabel: "Label below",
      falseLabel: "Label in cell",
    },
  ],
  templateVariableGroups: [],

  format: "open-board-0.1",
  id: "labels-below",
  name: "Labels Below",
  locale: "en-GB",
  description_html:
    "Create a board that uses images and has some labels below the cell",

  ext_launchpad_options: {},

  buttons: [
    {
      id: "first",
      label: "Left",
      border_color: "rgb(0,0,0)",
      background_color: "rgb(255,255,255)",
      ext_launchpad_label_color: "rgb(0,0,0)",
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_below: { type: "TemplateItem", id: "label_below" },
      image_id: "leftImage",
    },
    {
      id: "second",
      label: "Right",
      border_color: "rgb(0,0,0)",
      background_color: "rgb(255,255,255)",
      ext_launchpad_label_color: "rgb(0,0,0)",
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_below: true,
    },
    {
      id: "third",
      label: "Left",
      border_color: "rgb(0,0,0)",
      background_color: "rgb(255,255,255)",
      ext_launchpad_label_color: "rgb(0,0,0)",
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      image_id: "leftImage",
    },
    {
      id: "fourth",
      label: "Right",
      border_color: "rgb(0,0,0)",
      background_color: "rgb(255,255,255)",
      ext_launchpad_label_color: "rgb(0,0,0)",
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      image_id: "rightImage",
    },
    {
      id: "fifth",
      label: "Left",
      border_color: "rgb(0,0,0)",
      background_color: "rgb(255,255,255)",
      ext_launchpad_label_color: "rgb(0,0,0)",
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_below: true,
      image_id: "leftImage",
    },
    {
      id: "sixth",
      label: "Right",
      border_color: "rgb(0,0,0)",
      background_color: "rgb(255,255,255)",
      ext_launchpad_label_color: "rgb(0,0,0)",
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      image_id: "rightImage",
    },
    {
      id: "seventh",
      label: "Left",
      border_color: "rgb(0,0,0)",
      background_color: "rgb(255,255,255)",
      ext_launchpad_label_color: "rgb(0,0,0)",
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      image_id: "leftImage",
    },
    {
      id: "eighth",
      label: "Right",
      border_color: "rgb(0,0,0)",
      background_color: "rgb(255,255,255)",
      ext_launchpad_label_color: "rgb(0,0,0)",
      ext_launchpad_label_font_size: 10,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_below: true,
      image_id: "rightImage",
    },
    {
      id: "ninth",
      label: "Left",
      border_color: "rgb(0,0,0)",
      background_color: "rgb(255,255,255)",
      ext_launchpad_label_color: "rgb(0,0,0)",
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      image_id: "leftImage",
    },
  ],

  images: [
    {
      id: "leftImage",
      url: "./left.png",
    },
    {
      id: "rightImage",
      url: "./right.png",
    },
  ],
  pages: [
    {
      id: "first",

      grid: {
        rows: 3,
        columns: 3,
        order: [
          ["first", "second", "third"],
          ["fourth", "fifth", "sixth"],
          ["seventh", "eighth", "ninth"],
        ],
      },
    },
  ],
};
