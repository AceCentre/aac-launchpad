import { Template } from "types";

export const withImages: Template = {
  templateCategory: "Symbol Charts",
  templateSubcategory: "Symbol Charts",
  templateShortDescription: "",

  templateFeatured: false,

  templateDateCreated: "2022-07-20T12:00:00+01:00",
  templateId: "with-images",
  templateName: "Two cell with images",
  templateDescription: "Create a board that uses images",
  templateImageUrl: "choice.png",
  templateVariables: [
    {
      id: "rightImage",
      type: "imageUrl",
      name: "Right image",
      defaultValue: "./right.png",
      description: "URL or path for image on the right hand side",
    },
    {
      id: "leftImage",
      type: "imageUrl",
      name: "Left image",
      defaultValue: "./left.png",
      description: "URL or path for image on the left hand side",
    },
  ],
  templateVariableGroups: [],

  format: "open-board-0.1",
  id: "with-images",
  name: "Create a board with images",
  locale: "en-GB",
  description_html: "A board that allows you to choose between two options",

  ext_launchpad_options: {},

  buttons: [
    {
      id: "left",
      label: "Left",
      border_color: "rgb(0,0,0)",
      background_color: "rgb(255,255,255)",
      ext_launchpad_label_color: "rgb(0,0,0)",
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      image_id: "leftImage",
    },
    {
      id: "right",
      label: "Right",
      border_color: "rgb(0,0,0)",
      background_color: "rgb(255,255,255)",
      ext_launchpad_label_color: "rgb(0,0,0)",
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      image_id: "rightImage",
    },
  ],

  images: [
    {
      id: "leftImage",
      url: { type: "TemplateItem", id: "leftImage" },
    },
    {
      id: "rightImage",
      url: { type: "TemplateItem", id: "rightImage" },
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
