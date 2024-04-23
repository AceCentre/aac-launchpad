import { Template } from "types";
import { generateStandardTemplate } from "./shared/generate-standard-template";

export const playWithDoctorKit: Template = generateStandardTemplate(
  "Play with Doctor Kit",
  "play-with-doctor-kit",
  {
    intro: [
      ["MORE", "look", "different", "help"],
      ["STOP", "listen", "like", "call-ambulance"],
    ],
    stageOne: [
      ["MORE", "LOOK", "listen", "doctor"],
      ["STOP", "WANT", "pain", "plaster"],
      ["DIFFERENT", "HELP", "need", "medicine"],
      ["LIKE", "NO", "uh-oh", "call-ambulance"],
    ],
    stageTwo: [
      ["ME", "MORE", "LOOK", "QUESTION", "doctor", "heartbeat"],
      ["YOU", "STOP", "WANT", "listen", "need", "plaster"],
      ["GO", "DIFFERENT", "HELP", "pain", "breathing", "medicine"],
      ["LIKE", "LITTLE", "BIG", "sick", "bed", "temperature"],
      ["WOW", "UH-OH", "NO", "good", "bad", "call-ambulance"],
    ],
    eyePointing: [
      ["more", "look", "help"],
      ["stop", "listen", "call-ambulance"],
    ],
    handPointing: [
      ["more", "look", "help"],
      ["stop", "listen", "call-ambulance"],
    ],
  }
);
