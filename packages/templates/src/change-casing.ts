import { CASING_OPTIONS } from "board-to-pdf";
import { Template } from "types";

export const changeCasing: Template = {
  templateCategory: "Symbol Charts",
  templateFeatured: false,

  templateVariables: [
    {
      id: "casing",
      description: "Change the casing of the label",
      name: "Label casing",
      defaultValue: "no-change",
      type: "option",
      options: CASING_OPTIONS,
    },
  ],
  templateVariableGroups: [],
  templateDateCreated: "2022-07-20T12:00:00+01:00",

  templateDescription:
    "Create a single tile board that allows you to change casing",
  templateName: "Change Casing",
  templateId: "change-casing",
  templateImageUrl: "single-tile.png",

  format: "open-board-0.1",
  id: "change-casing",
  locale: "en-GB",
  name: "Change Casing",
  description_html:
    "Create a single tile board that allows you to change casing",
  ext_launchpad_options: {},
  images: [],
  buttons: [
    {
      id: "main",
      label: "this is a upper case sentence",
      border_color: "rgb(0, 0, 55)",
      background_color: "rgb(255, 0, 0)",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
    },
  ],
  pages: [
    {
      id: "first",
      grid: {
        rows: 1,
        columns: 1,
        order: [["main"]],
      },
    },
  ],
};
