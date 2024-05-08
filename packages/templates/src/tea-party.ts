import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const teaParty: Template = generateStandardTemplate(
  "Tea Party",
  "tea-party",
  {
    intro: [
      ["MORE", "pour", "tea", "milk"],
      ["STOP", "want", "biscuit", "sugar"],
    ],
    stageOne: [
      ["MORE", "LOOK", "pour", "tea-party"],
      ["STOP", "WANT", "give", "milk"],
      ["DIFFERENT", "HELP", "tea", "sugar"],
      ["LIKE", "NO", "biscuit", "happy"],
    ],
    stageTwo: [
      ["ME", "MORE", "LOOK", "QUESTION", "tea-party", "cup"],
      ["YOU", "STOP", "WANT", "pour", "milk", "plate"],
      ["GO", "DIFFERENT", "HELP", "give", "sugar", "eat"],
      ["LIKE", "LITTLE", "BIG", "tea", "cake", "drink"],
      ["WOW", "UH-OH", "NO", "biscuit", "happy", "afternoon"],
    ],
    eyePointing: [
      ["more", "pour", "tea"],
      ["stop", "want", "biscuit"],
    ],
    handPointing: [
      ["more", "pour", "tea"],
      ["stop", "want", "biscuit"],
    ],
  }
);
