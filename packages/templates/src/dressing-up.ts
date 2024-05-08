import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const dressingUp: Template = generateStandardTemplate(
  "Dressing Up",
  "dressing-up",
  {
    intro: [
      ["MORE", "look", "like", "costume"],
      ["STOP", "change-clothes", "wow", "mask"],
    ],
    stageOne: [
      ["MORE", "LOOK", "change", "costume"],
      ["STOP", "WANT", "cape", "mask"],
      ["DIFFERENT", "HELP", "wand", "hat"],
      ["LIKE", "NO", "wow", "crown"],
    ],
    stageTwo: [
      ["ME", "MORE", "LOOK", "QUESTION", "mirror", "costume"],
      ["YOU", "STOP", "WANT", "colour", "great", "mask"],
      ["GO", "DIFFERENT", "HELP", "put-on", "photo", "hat"],
      ["LIKE", "LITTLE", "BIG", "take-off", "cape", "crown"],
      ["WOW", "UH-OH", "NO", "dress-up", "wand", "favourite"],
    ],
    eyePointing: [
      ["more", "different", "costume"],
      ["stop", "like", "mask"],
    ],
    handPointing: [
      ["more", "different", "costume"],
      ["stop", "like", "mask"],
    ],
  }
);
