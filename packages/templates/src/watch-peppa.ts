import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const watchPeppa: Template = generateStandardTemplate(
  "Watch Peppa",
  "watch-peppa",
  {
    intro: [
      ["MORE", "look", "different", "peppa-pig"],
      ["STOP", "uh-oh", "like", "funny"],
    ],
    stageOne: [
      ["MORE", "LOOK", "watch", "peppa-pig"],
      ["STOP", "WANT", "choose", "funny"],
      ["DIFFERENT", "HELP", "good", "bad"],
      ["LIKE", "NO", "wow", "uh-oh"],
    ],
    stageTwo: [
      ["ME", "MORE", "LOOK", "QUESTION", "mummy-pig", "peppa-pig"],
      ["YOU", "STOP", "WANT", "watch", "daddy-pig", "george-pig"],
      ["GO", "DIFFERENT", "HELP", "friend", "silly", "funny"],
      ["LIKE", "LITTLE", "BIG", "choose", "sad", "naughty"],
      ["WOW", "UH-OH", "NO", "good", "bad", "favourite"],
    ],
    eyePointing: [
      ["more", "look", "peppa-pig"],
      ["stop", "uh-oh", "funny"],
    ],
    handPointing: [
      ["more", "look", "peppa-pig"],
      ["stop", "uh-oh", "funny"],
    ],
  }
);
