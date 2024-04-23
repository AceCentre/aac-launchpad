import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const bath: Template = generateStandardTemplate("Bath", "bath", {
  intro: [
    ["MORE", "hot", "cold", "bath-toy"],
    ["STOP", "want", "like", "splash"],
  ],
  stageOne: [
    ["MORE", "LOOK", "play", "bath"],
    ["STOP", "WANT", "bubbles", "bath-toy"],
    ["DIFFERENT", "HELP", "hot", "wash"],
    ["LIKE", "NO", "fold", "splash"],
  ],
  stageTwo: [
    ["ME", "MORE", "LOOK", "QUESTION", "bath", "water"],
    ["YOU", "STOP", "WANT", "play", "bath-toy", "sponge"],
    ["GO", "DIFFERENT", "HELP", "bubbles", "wash", "soap"],
    ["LIKE", "LITTLE", "BIG", "hot", "splash", "shampoo"],
    ["WOW", "UH-OH", "NO", "cold", "fun", "towel"],
  ],
  eyePointing: [
    ["more", "want", "bath-toy"],
    ["stop", "like", "splash"],
  ],
  handPointing: [
    ["more", "want", "bath-toy"],
    ["stop", "like", "splash"],
  ],
});
