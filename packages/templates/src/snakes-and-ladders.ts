import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const snakesAndLadders: Template = generateStandardTemplate(
  "Snakes and Ladders",
  "snakes-and-ladders",
  {
    intro: [
      ["MORE", "look", "roll-dice", "snake"],
      ["STOP", "uh-oh", "play", "ladder"],
    ],
    stageOne: [
      ["MORE", "LOOK", "roll-dice", "play"],
      ["STOP", "WANT", "go", "snake"],
      ["DIFFERENT", "HELP", "turn", "ladder"],
      ["LIKE", "NO", "wow", "uh-oh"],
    ],
    stageTwo: [
      ["ME", "MORE", "LOOK", "QUESTION", "game", "turn"],
      ["YOU", "STOP", "WANT", "play", "snake", "win"],
      ["GO", "DIFFERENT", "HELP", "up", "ladder", "lose"],
      ["LIKE", "LITTLE", "BIG", "down", "count", "roll-dice"],
      ["WOW", "UH-OH", "NO", "cross", "fun", "move-my-piece"],
    ],
    eyePointing: [
      ["more", "roll-dice", "snake"],
      ["stop", "uh-oh", "ladder"],
    ],
    handPointing: [
      ["more", "roll-dice", "snake"],
      ["stop", "uh-oh", "ladder"],
    ],
  }
);
