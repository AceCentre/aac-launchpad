import { Template } from "types";

import { generateStandardTemplate } from "./shared/generate-standard-template";

export const chatAboutTv: Template = generateStandardTemplate(
  "Chat about TV",
  "chat-about-tv",
  {
    intro: [
      ["MORE", "look", "different", "tv"],
      ["STOP", "want", "like", "program"],
    ],
    stageOne: [
      ["MORE", "LOOK", "watch", "tv"],
      ["STOP", "WANT", "choose", "program"],
      ["DIFFERENT", "HELP", "good", "bad"],
      ["LIKE", "NO", "wow", "uh-oh"],
    ],
    stageTwo: [
      ["ME", "MORE", "LOOK", "QUESTION", "film", "tv"],
      ["YOU", "STOP", "WANT", "watch", "cartoon", "program"],
      ["GO", "DIFFERENT", "HELP", "remote", "silly", "funny"],
      ["LIKE", "LITTLE", "BIG", "choose", "sad", "scary"],
      ["WOW", "UH-OH", "NO", "good", "bad", "favourite"],
    ],
    eyePointing: [
      ["more", "different", "tv"],
      ["stop", "like", "program"],
    ],
    handPointing: [
      ["more", "different", "tv"],
      ["stop", "like", "program"],
    ],
  }
);
