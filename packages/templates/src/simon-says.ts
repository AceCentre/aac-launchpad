import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const simonSays: Template = generateStandardTemplate(
  "Simon Says",
  "simon-says",
  {
    intro: [
      ["MORE", "jump", "fall-over", "simon-says"],
      ["STOP", "uh-oh", "like", "sing"],
    ],
    stageOne: [
      ["MORE", "LOOK", "jump", "simon-says"],
      ["STOP", "WANT", "fall-over", "sing"],
      ["DIFFERENT", "HELP", "silly-face", "run"],
      ["LIKE", "NO", "wow", "uh-oh"],
    ],
    stageTwo: [
      ["ME", "MORE", "LOOK", "QUESTION", "simon-says", "quiet"],
      ["YOU", "STOP", "WANT", "jump", "sing", "loud"],
      ["GO", "DIFFERENT", "HELP", "fall-over", "run", "fast"],
      ["LIKE", "LITTLE", "BIG", "silly-face", "blow-raspberry", "slow"],
      ["WOW", "UH-OH", "NO", "good", "bad", "fun"],
    ],
    eyePointing: [
      ["more", "simon-says", "jump"],
      ["stop", "fall-over", "sing"],
    ],
    handPointing: [
      ["more", "simon-says", "jump"],
      ["stop", "fall-over", "sing"],
    ],
  }
);

