import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const gardening: Template = generateStandardTemplate(
  "Gardening",
  "gardening",
  {
    intro: [
      ["MORE", "look", "weed", "water-plants"],
      ["STOP", "plant", "like", "grow"],
    ],
    stageOne: [
      ["MORE", "LOOK", "plant", "garden"],
      ["STOP", "WANT", "weed", "gardening"],
      ["DIFFERENT", "HELP", "water-plants", "grow"],
      ["LIKE", "NO", "wow", "uh-oh"],
    ],
    stageTwo: [
      ["ME", "MORE", "LOOK", "QUESTION", "seed", "garden"],
      ["YOU", "STOP", "WANT", "plant", "pretty", "gardening"],
      ["GO", "DIFFERENT", "HELP", "grass", "weed", "grow"],
      ["LIKE", "LITTLE", "BIG", "flower", "water-plants", "dig"],
      ["WOW", "UH-OH", "NO", "vegetable", "mow", "favourite"],
    ],
    eyePointing: [
      ["more", "look", "water-plants"],
      ["stop", "like", "plant"],
    ],
    handPointing: [
      ["more", "look", "water-plants"],
      ["stop", "like", "plant"],
    ],
  }
);
