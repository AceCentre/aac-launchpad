import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const lookAtPhotos: Template = generateStandardTemplate(
  "Look at Photos",
  "look-at-photos",
  {
    intro: [
      ["MORE", "look", "different", "photo"],
      ["STOP", "want", "like", "take-picture"],
    ],
    stageOne: [
      ["MORE", "LOOK", "selfie", "photo"],
      ["STOP", "WANT", "pretty", "take-picture"],
      ["DIFFERENT", "HELP", "good", "bad"],
      ["LIKE", "NO", "wow", "uh-oh"],
    ],
    stageTwo: [
      ["ME", "MORE", "LOOK", "QUESTION", "selfie", "photo"],
      ["YOU", "STOP", "WANT", "make", "pretty", "take-picture"],
      ["GO", "DIFFERENT", "HELP", "show", "silly", "funny"],
      ["LIKE", "LITTLE", "BIG", "delete", "embarrassing", "next"],
      ["WOW", "UH-OH", "NO", "good", "bad", "favourite"],
    ],
    eyePointing: [
      ["more", "different", "photo"],
      ["stop", "like", "take-picture"],
    ],
    handPointing: [
      ["more", "different", "photo"],
      ["stop", "like", "take-picture"],
    ],
  },
  { includeHighContrast: true }
);
