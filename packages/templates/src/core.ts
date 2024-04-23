import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const core: Template = generateStandardTemplate("Core Words", "core", {
  intro: [
    ["more", "look", "different", "help"],
    ["stop", "want", "like", "no"],
  ],
  stageOne: [
    ["me", "more", "look", "question"],
    ["you", "stop", "want", "little"],
    ["go", "different", "help", "big"],
    ["like", "wow", "uh-oh", "no"],
  ],
  stageTwo: [
    ["he", "me", "more", "look", "have", "question"],
    ["she", "you", "stop", "want", "do", "turn"],
    ["we", "go", "different", "help", "can", "this"],
    ["they", "like", "little", "big", "first", "next"],
    ["it", "wow", "uh-oh", "good", "bad", "no"],
  ],
  eyePointing: [
    ["more", "look", "different"],
    ["stop", "want", "like"],
  ],
  handPointing: [
    ["more", "look", "different"],
    ["stop", "want", "like"],
  ],
});
