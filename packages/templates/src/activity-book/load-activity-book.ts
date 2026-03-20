import fs from "fs";
import path from "path";
import { GuideTemplate } from "types";

const guidesDir = __dirname;

/** Gear for sorting: explicit gear, deprecated level, or last (unknown). */
function effectiveGear(g: GuideTemplate): number {
  if (typeof g.gear === "number") return g.gear;
  if (typeof g.level === "number") return g.level;
  return 99;
}

/**
 * Activity-book guides in PDF / UI order: Gear 1 → 5, then title within each gear.
 */
export function loadAllGuides(): GuideTemplate[] {
  const guides = fs
    .readdirSync(guidesDir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const content = fs.readFileSync(path.join(guidesDir, file), "utf-8");
      return JSON.parse(content) as GuideTemplate;
    });

  return guides.sort((a, b) => {
    const ga = effectiveGear(a);
    const gb = effectiveGear(b);
    if (ga !== gb) return ga - gb;
    return (a.title || a.templateId).localeCompare(b.title || b.templateId, undefined, {
      sensitivity: "base",
    });
  });
}
