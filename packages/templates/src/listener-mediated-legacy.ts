import { Template } from "types";

// Legacy template to handle old URLs that reference the old listener-mediated template
// This template redirects to the ABC version for backward compatibility
export const listenerMediatedLegacy: Template = {
  templateFeatured: false,
  templateCategory: "Listener Mediated",
  templateSubcategory: "Listener Mediated",
  templateShortDescription:
    "Create a listener mediated chart with ABC letter arrangement (Legacy)",

  templateVariables: [
    {
      id: "redirect-notice",
      description:
        "This template has been replaced. Please use the new Listener Mediated ABC or Frequency templates.",
      name: "Notice",
      type: "freeText",
      defaultValue:
        "This template has been replaced. Please use the new Listener Mediated ABC or Frequency templates.",
      maxLength: 200,
    },
  ],
  templateVariableGroups: [],
  templateId: "listener-mediated-launchpad", // Old template ID for backward compatibility
  templateDateCreated: "2022-07-20T12:00:00+01:00",
  templateDescription:
    "Create a listener mediated chart with ABC letter arrangement (Legacy - Use new ABC or Frequency templates)",
  templateName: "Listener Mediated Template (Legacy)",
  templateImageUrl: "listener-mediated1.png",

  format: "open-board-0.1",
  id: "listener-mediated-launchpad",
  locale: "en-GB",
  name: "Listener Mediated Template (Legacy)",
  description_html:
    "Listener Mediated board (Legacy - Use new ABC or Frequency templates)",
  ext_launchpad_options: {
    ext_launchpad_prepend_pdf: "./listener-mediated-chart-cover.pdf",
    use_page_numbers: false,
    use_ace_branding: true,
    padding: 10,
    gap: { id: "gap", type: "TemplateItem" },
    row_gap: { id: "row-gap", type: "TemplateItem" },
    button_radius: 0,
    button_border_width: { id: "border-width", type: "TemplateItem" },
    text_color_on_background: {
      id: "textColorOnBackground",
      type: "TemplateItem",
    },
    full_background_color: { id: "fullBackgroundColor", type: "TemplateItem" },
    font_size: { id: "font-size", type: "TemplateItem" },
    autofit_label_text: true,
  },
  buttons: [
    {
      id: "redirect-notice",
      label:
        "This template has been replaced. Please use the new Listener Mediated ABC or Frequency templates.",
      border_color: "rgb(255,0,0)",
      background_color: "rgb(255,255,255)",
      ext_launchpad_label_color: "rgb(255,0,0)",
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: "capital",
      ext_launchpad_label_font: "helvetica",
    },
  ],
  images: [],
  pages: [
    {
      id: "legacy-notice",
      grid: {
        rows: 1,
        columns: 1,
        order: [["redirect-notice"]],
      },
    },
  ],
};








