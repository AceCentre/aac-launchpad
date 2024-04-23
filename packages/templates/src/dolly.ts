import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const dolly: Template = generateStandardTemplate("Dolly", "dolly", {
  intro: [
    ["MORE", "look", "bottle", "dolly"],
    ["STOP", "change-clothes", "like", "bath"],
  ],
  stageOne: [
    ["MORE", "LOOK", "bottle", "dolly"],
    ["STOP", "WANT", "clothes", "bath"],
    ["DIFFERENT", "HELP", "bed", "hug"],
    ["LIKE", "NO", "happy", "sad"],
  ],
  stageTwo: [
    ["ME", "MORE", "LOOK", "QUESTION", "bed", "dolly"],
    ["YOU", "STOP", "WANT", "bottle", "hungry", "wash"],
    ["GO", "DIFFERENT", "HELP", "food", "tired", "change"],
    ["LIKE", "LITTLE", "BIG", "clothes", "love", "hug"],
    ["WOW", "UH-OH", "NO", "nappy", "happy", "sad"],
  ],
  eyePointing: [
    ["more", "bottle", "dolly"],
    ["stop", "like", "bath"],
  ],
  handPointing: [
    ["more", "bottle", "dolly"],
    ["stop", "like", "bath"],
  ],
});
