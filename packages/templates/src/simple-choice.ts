import { Template } from "types";

export const simpleChoice: Template = {
  templateId: "simple-choice",
  templateName: "Choice between two options",
  templateDescription:
    "Create a board that allows you to choose between two custom options",
  templateImageUrl: "choice.png",
  templateVariables: [],

  format: "open-board-0.1",
  id: "simple-choice",
  name: "Choice between two options",
  locale: "en-GB",
  description_html: "A board that allows you to choose between two options",

  ext_launchpad_options: {},

  buttons: [
    {
      id: "left",
      label: "left",
      border_color: "rgb(0,0,0)",
      background_color: "rgb(0,0,0)",
      ext_launchpad_label_color: "rgb(255,255,255)",
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
    {
      id: "right",
      label: "right",
      border_color: "rgb(0,0,0)",
      background_color: "rgb(0,0,0)",
      ext_launchpad_label_color: "rgb(255,255,255)",
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
    },
  ],

  grid: {
    rows: 1,
    columns: 2,
    order: [["left", "right"]],
  },
};
