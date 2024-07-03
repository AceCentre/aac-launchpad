import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const wheelsOnTheBus: Template = generateStandardTemplate(
  "Sing wheels on the bus",
  "sing-wheels-on-the-bus",
  {
    intro: [
      ["MORE", "bus", "different", "bus-doors"],
      ["STOP", "go-round-and-round", "like", "children"],
    ],
    stageOne: [
      ["MORE", "LOOK", "sing", "bus-doors"],
      ["STOP", "WANT", "bus", "children"],
      ["DIFFERENT", "HELP", "go-round-and-round", "horn-goes-beep"],
      ["LIKE", "NO", "wow", "uh-oh"],
    ],
    stageTwo: [
      ["ME", "MORE", "LOOK", "QUESTION", "bus-doors", "quiet"],
      ["YOU", "STOP", "WANT", "sing", "children", "loud"],
      ["GO", "DIFFERENT", "HELP", "bus", "horn-goes-beep", "fast"],
      [
        "LIKE",
        "LITTLE",
        "BIG",
        "go-round-and-round",
        "wipers-go-swish",
        "slow",
      ],
      ["WOW", "UH-OH", "NO", "good", "bad", "fun"],
    ],
    eyePointing: [
      ["more", "bus", "bus-doors"],
      ["stop", "go-round-and-round", "children"],
    ],
    handPointing: [
      ["more", "bus", "bus-doors"],
      ["stop", "go-round-and-round", "children"],
    ],
  },
  { includeHighContrast: true }
);
