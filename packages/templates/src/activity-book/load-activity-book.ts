import fs from "fs";
import path from "path";
import { GuideTemplate } from "types";

const guidesDir = __dirname;

export function loadAllGuides(): GuideTemplate[] {
  return fs
    .readdirSync(guidesDir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const content = fs.readFileSync(path.join(guidesDir, file), "utf-8");
      return JSON.parse(content) as GuideTemplate;
    });
}
