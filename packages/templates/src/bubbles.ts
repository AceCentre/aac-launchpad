import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const bubbles: Template = generateStandardTemplate(
  "Bubbles",
  "bubbles",
  {
    intro: [
      ["MORE", "look", "pop", "bubbles"],
      ["STOP", "uh-oh", "like", "blow"],
    ],
    stageOne: [
      ["MORE", "LOOK", "pretty", "bubbles"],
      ["STOP", "WANT", "blow", "little"],
      ["DIFFERENT", "HELP", "pop", "big"],
      ["LIKE", "NO", "wow", "uh-oh"],
    ],
    stageTwo: [
      ["ME", "MORE", "LOOK", "QUESTION", "bubbles", "bubble-mix"],
      ["YOU", "STOP", "WANT", "make", "blow", "bubble-wand"],
      ["GO", "DIFFERENT", "HELP", "pretty", "hold", "fast"],
      ["LIKE", "LITTLE", "BIG", "pop", "pour", "slow"],
      ["WOW", "UH-OH", "NO", "fun", "lots", "up"],
    ],
    eyePointing: [
      ["more", "bubbles", "blow"],
      ["stop", "uh-oh", "pop"],
    ],
    handPointing: [
      ["more", "bubbles", "blow"],
      ["stop", "uh-oh", "pop"],
    ],
  }
);
