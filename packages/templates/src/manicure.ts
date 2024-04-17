import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const manicure: Template = generateStandardTemplate(
  "Manicure",
  "manicure",
  {
    intro: [
      ["MORE", "nail-varnish", "different", "nails"],
      ["STOP", "want", "like", "colour"],
    ],
    stageOne: [
      ["MORE", "LOOK", "nail-varnish", "nails"],
      ["STOP", "WANT", "pretty", "colour"],
      ["DIFFERENT", "HELP", "cut", "file"],
      ["LIKE", "NO", "wow", "uh-oh"],
    ],
    stageTwo: [
      ["ME", "MORE", "LOOK", "QUESTION", "nail-varnish", "nails"],
      ["YOU", "STOP", "WANT", "colour", "pretty", "pattern"],
      ["GO", "DIFFERENT", "HELP", "put-on", "cut", "gel"],
      ["LIKE", "LITTLE", "BIG", "take-off", "file", "light"],
      ["WOW", "UH-OH", "NO", "good", "bad", "broken"],
    ],
    eyePointing: [
      ["more", "different", "nail-varnish"],
      ["stop", "like", "colour"],
    ],
    handPointing: [
      ["more", "different", "nail-varnish"],
      ["stop", "like", "colour"],
    ],
  }
);
