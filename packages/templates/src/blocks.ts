import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const blocks: Template = generateStandardTemplate("Blocks", "blocks", {
  intro: [
    ["MORE", "look", "tower", "block"],
    ["STOP", "uh-oh", "big", "knock-it-down"],
  ],
  stageOne: [
    ["MORE", "LOOK", "tower", "block"],
    ["STOP", "WANT", "house", "make"],
    ["DIFFERENT", "HELP", "big", "knock-it-down"],
    ["LIKE", "NO", "wow", "uh-oh"],
  ],
  stageTwo: [
    ["ME", "MORE", "LOOK", "QUESTION", "block", "yellow"],
    ["YOU", "STOP", "WANT", "make", "circle", "red"],
    ["GO", "DIFFERENT", "HELP", "tower", "triangle", "blue"],
    ["LIKE", "LITTLE", "BIG", "house", "bridge", "green"],
    ["WOW", "UH-OH", "NO", "knock-it-down", "fun", "brown"],
  ],
  eyePointing: [
    ["more", "block", "tower"],
    ["stop", "uh-oh", "knock-it-down"],
  ],
  handPointing: [
    ["more", "block", "tower"],
    ["stop", "uh-oh", "knock-it-down"],
  ],
});
