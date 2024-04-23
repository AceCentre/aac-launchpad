import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const music: Template = generateStandardTemplate(
  "Listen to music",
  "listen-to-music",
  {
    intro: [
      ["MORE", "listen", "different", "song"],
      ["STOP", "want", "like", "sing"],
    ],
    stageOne: [
      ["MORE", "LOOK", "listen", "song"],
      ["STOP", "WANT", "sing", "music"],
      ["DIFFERENT", "HELP", "good", "bad"],
      ["LIKE", "NO", "wow", "uh-oh"],
    ],
    stageTwo: [
      ["ME", "MORE", "LOOK", "QUESTION", "playlist", "song"],
      ["YOU", "STOP", "WANT", "listen", "make", "music"],
      ["GO", "DIFFERENT", "HELP", "sing", "dance", "loud"],
      ["LIKE", "LITTLE", "BIG", "happy", "sad", "quiet"],
      ["WOW", "UH-OH", "NO", "good", "bad", "favourite"],
    ],
    eyePointing: [
      ["more", "song", "different"],
      ["stop", "like", "sing"],
    ],
    handPointing: [
      ["more", "song", "different"],
      ["stop", "like", "sing"],
    ],
  }
);
