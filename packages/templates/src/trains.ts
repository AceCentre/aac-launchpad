import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const trains: Template = generateStandardTemplate("Trains", "trains", {
  intro: [
    ["MORE", "look", "go", "train"],
    ["STOP", "crash", "like", "station"],
  ],
  stageOne: [
    ["MORE", "LOOK", "go", "train"],
    ["STOP", "WANT", "crash", "station"],
    ["DIFFERENT", "HELP", "fast", "slow"],
    ["LIKE", "NO", "wow", "uh-oh"],
  ],
  stageTwo: [
    ["ME", "MORE", "LOOK", "QUESTION", "station", "train"],
    ["YOU", "STOP", "WANT", "make", "track", "carriage"],
    ["GO", "DIFFERENT", "HELP", "crash", "bridge", "fast"],
    ["LIKE", "LITTLE", "BIG", "passenger", "tunnel", "slow"],
    ["WOW", "UH-OH", "NO", "good", "bad", "fun"],
  ],
  eyePointing: [
    ["more", "go", "train"],
    ["stop", "crash", "station"],
  ],
  handPointing: [
    ["more", "go", "train"],
    ["stop", "crash", "station"],
  ],
});
