import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const artsAndCrafts: Template = generateStandardTemplate(
  "Art",
  "arts-and-craft",
  {
    intro: [
      ["MORE", "look", "different", "colour"],
      ["STOP", "paint", "like", "picture"],
    ],
    stageOne: [
      ["MORE", "LOOK", "colour", "show"],
      ["STOP", "WANT", "paint", "make"],
      ["DIFFERENT", "HELP", "felt-tips", "picture"],
      ["LIKE", "NO", "wow", "uh-oh"],
    ],
    stageTwo: [
      ["ME", "MORE", "LOOK", "QUESTION", "show", "pretty"],
      ["YOU", "STOP", "WANT", "colour", "make", "rubbish"],
      ["GO", "DIFFERENT", "HELP", "paint", "glue", "paper"],
      ["LIKE", "LITTLE", "BIG", "felt-tips", "cut", "picture"],
      ["WOW", "UH-OH", "NO", "crayons", "glitter", "card"],
    ],
    eyePointing: [
      ["more", "different", "colour"],
      ["stop", "like", "picture"],
    ],
    handPointing: [
      ["more", "different", "colour"],
      ["stop", "like", "picture"],
    ],
  }
);
