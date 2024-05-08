import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const colours: Template = generateStandardTemplate(
  "Colours",
  "colours",
  {
    intro: [
      ["MORE", "yellow", "purple", "blue"],
      ["STOP", "red", "like", "green"],
    ],
    stageOne: [
      ["MORE", "LOOK", "colour", "pink"],
      ["STOP", "WANT", "yellow", "purple"],
      ["DIFFERENT", "HELP", "orange", "blue"],
      ["LIKE", "NO", "red", "green"],
    ],
    stageTwo: [
      ["ME", "MORE", "LOOK", "QUESTION", "pink", "black"],
      ["YOU", "STOP", "WANT", "colour", "purple", "silver"],
      ["GO", "DIFFERENT", "HELP", "yellow", "blue", "white"],
      ["LIKE", "LITTLE", "BIG", "orange", "green", "light"],
      ["WOW", "UH-OH", "NO", "red", "brown", "dark"],
    ],
    eyePointing: [
      ["more", "yellow", "blue"],
      ["stop", "red", "green"],
    ],
    handPointing: [
      ["more", "yellow", "blue"],
      ["stop", "red", "green"],
    ],
  }
);
