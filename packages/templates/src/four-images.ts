import { Template } from "types";

export const fourImages: Template = {
  templateCategory: "Symbol Charts",
  templateSubcategory: "Symbol Charts",
  templateShortDescription: "",

  templateFeatured: false,

  templateDateCreated: "2022-07-20T12:00:00+01:00",
  templateId: "with-four-images",
  templateName: "Four cell with images",
  templateDescription: "Create a board that uses images",
  templateImageUrl: "choice.png",
  templateVariables: [],
  templateVariableGroups: [],

  format: "open-board-0.1",
  id: "with-four-images",
  name: "Create a board with images",
  locale: "en-GB",
  description_html: "A board that allows you to choose between four options",

  ext_launchpad_options: {},

  buttons: [
    {
      id: "up",
      label: "Up",
      border_color: "rgb(0,0,0)",
      background_color: "rgb(255,255,255)",
      ext_launchpad_label_color: "rgb(0,0,0)",
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      image_id: "upImage",
    },
    {
      id: "down",
      label: "Down",
      border_color: "rgb(0,0,0)",
      background_color: "rgb(255,255,255)",
      ext_launchpad_label_color: "rgb(0,0,0)",
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      image_id: "downImage",
    },
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
      id: "upImage",
      url: "https://www.pinclipart.com/picdir/big/111-1115959_up-arrow-image-up-arrow-with-transparent-background.png",
    },
    {
      id: "downImage",
      url: "https://toppng.com/uploads/preview/down-arrow-black-arrow-down-11562910488ntpji5lifi.png",
    },
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
        rows: 2,
        columns: 2,
        order: [
          ["left", "down"],
          ["up", "right"],
        ],
      },
    },
  ],
};
