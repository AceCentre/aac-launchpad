import { ButtonWithTemplateItems } from "types";
import { Tile } from "./tiles";

export const generateButtons = (
  tiles: Array<Tile>
): Array<ButtonWithTemplateItems> => {
  const buttons: Array<ButtonWithTemplateItems> = tiles.map((tile) => ({
    id: tile.key,
    image_id: tile.key,
    ext_launchpad_label_color: { type: "TemplateItem", id: "label-colour" },
    ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    border_color: "rgb(0, 0, 0)",
    ext_button_border_width: {
      type: "TemplateItem",
      id: tile.isCore ? "core-border" : "non-core-border",
    },
    background_color: { type: "TemplateItem", id: "cell-colour" },
    label: tile.label,
  }));

  const eyePointing: ButtonWithTemplateItems = {
    id: "eyePointing",
    label:
      "Carefully cut round the dotted lines and discard this central section.\nAfter laminating (especially if using a mat laminate pouch), cut out\nthe central section a second time so that there is a window through\nwhich the communication partner and learner can make eye contact.",
    border_color: "rgb(0, 0, 0)",
    background_color: "rgb(255, 255, 255)",
    ext_button_border_width: 1,
    dashed_line: true,
    ext_launchpad_label_font_size: 200,
  };

  return [...buttons, eyePointing];
};
