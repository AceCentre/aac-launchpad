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
    {
      id: "help",
      url: "./symbols/pcs/help.png",
    },
    {
      id: "want",
      url: "./symbols/pcs/want.png",
    },
    {
      id: "like",
      url: "./symbols/pcs/like.png",
    },
    {
      id: "queen-elizabeth",
      url: "./symbols/pcs/queen-elizabeth.png",
    },
    {
      id: "stop",
      url: "./symbols/pcs/stop.png",
    },
    {
      id: "different",
      url: "./symbols/pcs/different.png",
    },
    {
      id: "look",
      url: "./symbols/pcs/look.png",
    },
    {
      id: "dont-like",
      url: "./symbols/pcs/dont-like.png",
    },
    {
      id: "jubilee",
      url: "./symbols/pcs/jubilee.png",
    },
    {
      id: "celebrate",
      url: "./symbols/pcs/celebrate.png",
    },
    {
      id: "street-party",
      url: "./symbols/pcs/street-party.png",
    },
    {
      id: "concert",
      url: "./symbols/pcs/concert.png",
    },
    {
      id: "parade",
      url: "./symbols/pcs/parade.png",
    },
    {
      id: "palace",
      url: "./symbols/pcs/palace.png",
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
    {
      id: "help",
      label: "help",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      image_id: "help",
    },
    {
      id: "want",
      label: "want",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      image_id: "want",
    },
    {
      id: "like",
      label: "like",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      image_id: "like",
    },
    {
      id: "queen-elizabeth",
      label: "Queen Elizabeth",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      image_id: "queen-elizabeth",
    },
    {
      id: "stop",
      label: "stop",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      image_id: "stop",
    },
    {
      id: "different",
      label: "different",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      image_id: "different",
    },
    {
      id: "look",
      label: "look",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      image_id: "look",
    },
    {
      id: "dont-like",
      label: "don't like",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      image_id: "dont-like",
    },
    {
      id: "jubilee",
      label: "Jubilee",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      image_id: "jubilee",
    },
    {
      id: "celebrate",
      label: "celebrate",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      image_id: "celebrate",
    },
    {
      id: "street-party",
      label: "street party",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      image_id: "street-party",
    },
    {
      id: "street-party",
      label: "street party",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      image_id: "street-party",
    },
    {
      id: "concert",
      label: "concert",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      image_id: "concert",
    },
    {
      id: "parade",
      label: "parade",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      image_id: "parade",
    },
    {
      id: "palace",
      label: "palace",
      border_color: "rgb(0, 0, 0)",
      background_color: "rgb(255, 255, 255)",
      image_id: "palace",
    },
  ],

  pages: [
    {
      id: "first",
      grid: {
        rows: 3,
        columns: 5,
        order: [
          ["more", "help", "want", "like", "queen-elizabeth"],
          ["stop", "different", "look", "dont-like", "jubilee"],
          ["celebrate", "street-party", "concert", "parade", "palace"],
        ],
      },
    },
  ],
};
