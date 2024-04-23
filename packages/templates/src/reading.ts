import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const reading: Template = generateStandardTemplate(
  "Reading",
  "reading",
  {
    intro: [
      ["MORE", "look", "different", "read"],
      ["STOP", "uh-oh", "like", "turn-page"],
    ],
    stageOne: [
      ["MORE", "LOOK", "read", "story-book"],
      ["STOP", "WANT", "turn-page", "picture"],
      ["DIFFERENT", "HELP", "good", "bad"],
      ["LIKE", "NO", "wow", "uh-oh"],
    ],
    stageTwo: [
      ["ME", "MORE", "LOOK", "QUESTION", "new", "story-book"],
      ["YOU", "STOP", "WANT", "read", "character", "magazine"],
      ["GO", "DIFFERENT", "HELP", "turn-page", "picture", "funny"],
      ["LIKE", "LITTLE", "BIG", "choose", "bedtime", "scary"],
      ["WOW", "UH-OH", "NO", "good", "bad", "favourite"],
    ],
    eyePointing: [
      ["more", "different", "read"],
      ["stop", "like", "turn-page"],
    ],
    handPointing: [
      ["more", "different", "read"],
      ["stop", "like", "turn-page"],
    ],
  }
);
