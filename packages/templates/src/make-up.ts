import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const makeUp: Template = generateStandardTemplate("Make Up", "make-up", {
  intro: [
    ["MORE", "look", "different", "make-up"],
    ["STOP", "want", "like", "colour"],
  ],
  stageOne: [
    ["MORE", "LOOK", "mirror", "make-up"],
    ["STOP", "WANT", "pretty", "colour"],
    ["DIFFERENT", "HELP", "good", "bad"],
    ["LIKE", "NO", "wow", "uh-oh"],
  ],
  stageTwo: [
    ["ME", "MORE", "LOOK", "QUESTION", "mirror", "make-up"],
    ["YOU", "STOP", "WANT", "colour", "pretty", "foundation"],
    ["GO", "DIFFERENT", "HELP", "put-on", "eye-shadow", "concealer"],
    ["LIKE", "LITTLE", "BIG", "take-off", "mascara", "blusher"],
    ["WOW", "UH-OH", "NO", "good", "bad", "lipstick"],
  ],
  eyePointing: [
    ["more", "different", "make-up"],
    ["stop", "like", "colour"],
  ],
  handPointing: [
    ["more", "different", "make-up"],
    ["stop", "like", "colour"],
  ],
});
