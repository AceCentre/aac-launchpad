import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const balloons: Template = generateStandardTemplate(
  "Balloons",
  "balloons",
  {
    intro: [
      ["MORE", "look", "let-it-go", "balloons"],
      ["STOP", "uh-oh", "like", "blow"],
    ],
    stageOne: [
      ["MORE", "LOOK", "colour", "balloons"],
      ["STOP", "WANT", "pretty", "blow"],
      ["DIFFERENT", "HELP", "let-it-go", "loud"],
      ["LIKE", "NO", "wow", "uh-oh"],
    ],
    stageTwo: [
      ["ME", "MORE", "LOOK", "QUESTION", "balloons", "pretty"],
      ["YOU", "STOP", "WANT", "colour", "blow", "loud"],
      ["GO", "DIFFERENT", "HELP", "tie-knot", "hold", "fast"],
      ["LIKE", "LITTLE", "BIG", "pop", "throw", "slow"],
      ["WOW", "UH-OH", "NO", "up", "catch", "fun"],
    ],
    eyePointing: [
      ["more", "balloons", "blow"],
      ["stop", "uh-oh", "let-it-go"],
    ],
    handPointing: [
      ["more", "balloons", "blow"],
      ["stop", "uh-oh", "let-it-go"],
    ],
  },
  { includeHighContrast: true }
);
