import { Template } from "types";

export const withImages: Template = {
  templateId: "with-images",
  templateName: "Two cell with images",
  templateDescription: "Create a board that uses images",
  templateImageUrl: "choice.png",
  templateVariables: [],

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
      url: "./left.png",
    },
    {
      id: "rightImage",
      url: "./right.png",
    },
  ],

  grid: {
    rows: 1,
    columns: 2,
    order: [["left", "right"]],
  },
};
