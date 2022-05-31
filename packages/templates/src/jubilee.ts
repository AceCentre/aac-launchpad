import { Template } from "types";

export const jubilee: Template = {
  templateVariables: [],
  templateDescription: "A board with about the Queen's Jubilee",
  templateName: "Jubilee Chart",
  templateId: "jubilee",
  templateImageUrl: "jubilee.png",
  templateVariableGroups: [],

  format: "open-board-0.1",
  id: "jubilee",
  locale: "en-GB",
  name: "Jubilee Chart",
  description_html: "A board with about the Queen's Jubilee",
  ext_launchpad_options: {},
  images: [
    {
      id: "more",
      url: "./symbols/pcs/more.png",
    },
  ],
  buttons: [
    {
      id: "more",
      label: "more, again",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      image_id: "more",
    },
  ],

  pages: [
    {
      id: "first",
      grid: {
        rows: 1,
        columns: 1,
        order: [["more"]],
      },
    },
  ],
};
