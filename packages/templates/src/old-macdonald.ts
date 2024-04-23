import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const oldMacdonald: Template = generateStandardTemplate(
  "Singing Old MacDonald",
  "old-macdonald",
  {
    intro: [
      ["MORE", "old-macdonald", "different", "sheep"],
      ["STOP", "cow", "like", "pig"],
    ],
    stageOne: [
      ["MORE", "LOOK", "sing", "sheep"],
      ["STOP", "WANT", "old-macdonald", "pig"],
      ["DIFFERENT", "HELP", "cow", "horse"],
      ["LIKE", "NO", "wow", "uh-oh"],
    ],
    stageTwo: [
      ["ME", "MORE", "LOOK", "QUESTION", "sheep", "sound"],
      ["YOU", "STOP", "WANT", "sing", "pig", "loud"],
      ["GO", "DIFFERENT", "HELP", "old-macdonald", "horse", "fast"],
      ["LIKE", "LITTLE", "BIG", "cow", "dog", "slow"],
      ["WOW", "UH-OH", "NO", "good", "bad", "fun"],
    ],
    eyePointing: [
      ["more", "old-macdonald", "sheep"],
      ["stop", "cow", "pig"],
    ],
    handPointing: [
      ["more", "old-macdonald", "sheep"],
      ["stop", "cow", "pig"],
    ],
  }
);
