import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const mrPotatoHead: Template = generateStandardTemplate(
  "Mr Potato Head",
  "mr-potato-head",
  {
    intro: [
      ["MORE", "look", "different", "mr-potato-head"],
      ["STOP", "want", "put-on", "take-off"],
    ],
    stageOne: [
      ["MORE", "LOOK", "put-on", "mr-potato-head"],
      ["STOP", "WANT", "take-off", "silly"],
      ["DIFFERENT", "HELP", "good", "bad"],
      ["LIKE", "NO", "wow", "uh-oh"],
    ],
    stageTwo: [
      ["ME", "MORE", "LOOK", "QUESTION", "eyes", "mr-potato-head"],
      ["YOU", "STOP", "WANT", "hat", "nose", "put-on"],
      ["GO", "DIFFERENT", "HELP", "hair", "mouth", "take-off"],
      ["LIKE", "LITTLE", "BIG", "shoes", "arm", "silly"],
      ["WOW", "UH-OH", "NO", "good", "bad", "fun"],
    ],
    eyePointing: [
      ["more", "different", "mr-potato-head"],
      ["stop", "put-on", "take-off"],
    ],
    handPointing: [
      ["more", "different", "mr-potato-head"],
      ["stop", "put-on", "take-off"],
    ],
  }
);
