import { Template } from "types";

import { generateStandardTemplate } from "./shared/generate-standard-template";

export const kerplunk: Template = generateStandardTemplate(
  "Kerplunk",
  "kerplunk",
  {
    intro: [
      ["MORE", "look", "play", "kerplunk"],
      ["STOP", "uh-oh", "fall-over", "marble"],
    ],
    stageOne: [
      ["MORE", "LOOK", "play", "kerplunk"],
      ["STOP", "WANT", "fall-over", "marble"],
      ["DIFFERENT", "HELP", "pull", "wooden-stick"],
      ["LIKE", "NO", "wow", "uh-oh"],
    ],
    stageTwo: [
      ["ME", "MORE", "LOOK", "QUESTION", "kerplunk", "turn"],
      ["YOU", "STOP", "WANT", "play", "marble", "win"],
      ["GO", "DIFFERENT", "HELP", "fall-over", "wooden-stick", "lose"],
      ["LIKE", "LITTLE", "BIG", "push", "count", "some"],
      ["WOW", "UH-OH", "NO", "pull", "fun", "lots"],
    ],
    eyePointing: [
      ["more", "fall-over", "kerplunk"],
      ["stop", "uh-oh", "marble"],
    ],
    handPointing: [
      ["more", "fall-over", "kerplunk"],
      ["stop", "uh-oh", "marble"],
    ],
  }
);
