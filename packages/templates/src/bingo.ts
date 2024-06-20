import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const bingo: Template = generateStandardTemplate(
  "Bingo",
  "bingo",
  {
    intro: [
      ["MORE", "look", "play", "bingo"],
      ["STOP", "wow", "uh-oh", "fun"],
    ],
    stageOne: [
      ["MORE", "LOOK", "play", "bingo"],
      ["STOP", "WANT", "1-line", "house"],
      ["DIFFERENT", "HELP", "2-lines", "fun"],
      ["LIKE", "NO", "wow", "uh-oh"],
    ],
    stageTwo: [
      ["ME", "MORE", "LOOK", "QUESTION", "bingo", "bingo-game"],
      ["YOU", "STOP", "WANT", "play", "lucky", "win"],
      ["GO", "DIFFERENT", "HELP", "1-line", "lose", "board"],
      ["LIKE", "LITTLE", "BIG", "2-lines", "count", "book"],
      ["WOW", "UH-OH", "NO", "house", "fun", "dauber"],
    ],
    eyePointing: [
      ["more", "play", "bingo"],
      ["stop", "uh-oh", "fun"],
    ],
    handPointing: [
      ["more", "play", "bingo"],
      ["stop", "uh-oh", "fun"],
    ],
  },
  { includeHighContrast: false }
);
