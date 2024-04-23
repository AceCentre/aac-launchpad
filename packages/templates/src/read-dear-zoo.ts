import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const readDearZoo: Template = generateStandardTemplate(
  "Read Dear Zoo",
  "read-dear-zoo",
  {
    intro: [
      ["MORE", "look", "different", "dear-zoo"],
      ["STOP", "uh-oh", "like", "pet"],
    ],
    stageOne: [
      ["MORE", "LOOK", "read", "dear-zoo"],
      ["STOP", "WANT", "turn-page", "pet"],
      ["DIFFERENT", "HELP", "good", "bad"],
      ["LIKE", "NO", "wow", "uh-oh"],
    ],
    stageTwo: [
      ["ME", "MORE", "LOOK", "QUESTION", "elephant", "dear-zoo"],
      ["YOU", "STOP", "WANT", "read", "giraffe", "snake"],
      ["GO", "DIFFERENT", "HELP", "turn-page", "lion", "monkey"],
      ["LIKE", "LITTLE", "BIG", "pet", "camel", "frog"],
      ["WOW", "UH-OH", "NO", "good", "bad", "puppy"],
    ],
    eyePointing: [
      ["more", "different", "dear-zoo"],
      ["stop", "like", "pet"],
    ],
    handPointing: [
      ["more", "different", "dear-zoo"],
      ["stop", "like", "pet"],
    ],
  }
);
