import {
  CAPITAL_CASE_OPTION,
  FONT_OPTIONS,
  LOWER_CASE_OPTION,
  SENTENCE_CASING,
  UPPER_CASE_OPTION,
} from "board-to-pdf";
import { Template } from "types";

export const alphabetChart: Template = {
  templateFeatured: false,
  templateCategory: "Alphabet Charts",
  templateSubcategory: "Alphabet Charts",
  templateShortDescription: "Create an alphabet chart with custom colors",

  templateVariables: [
    {
      id: "colorScheme",
      description:
        "Pick a colour theme for the charts to be displayed in. The theme you pick should be easy to see for whoever is using the chart.",
      defaultValue: "basic",
      name: "Colour Scheme",
      type: "preset",
      presets: [
        {
          value: "basic",
          description: "Black and White",
          label: "Black and White",
          variableValues: [
            { id: "textColorOnBackground", value: "rgb(0,0,0)" },
            {
              id: "fullBackgroundColor",
              value: "rgb(255,255,255)",
            },
            {
              id: "numberBackgroundColor",
              value: "rgb(255,255,255)",
            },
            {
              id: "consonantBackgroundColor",
              value: "rgb(255,255,255)",
            },
            {
              id: "vowelBackgroundColor",
              value: "rgb(255,255,255)",
            },
            {
              id: "punctuationBackgroundColor",
              value: "rgb(255,255,255)",
            },
            {
              id: "commandBackgroundColor",
              value: "rgb(255,255,255)",
            },
            {
              id: "emptySpaceBackgroundColor",
              value: "rgb(255,255,255)",
            },

            {
              id: "numberTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "consonantTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "vowelTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "punctuationTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "commandTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "emptySpaceTextColor",
              value: "rgb(0,0,0)",
            },

            {
              id: "numberBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "consonantBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "vowelBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "punctuationBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "commandBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "emptySpaceBorderColor",
              value: "rgb(0,0,0)",
            },
          ],
        },
        {
          value: "high-contrast-one",
          description: "High Contrast",
          label: "High Contrast (Yellow on Black)",
          variableValues: [
            { id: "textColorOnBackground", value: "rgb(255,255,0)" },
            {
              id: "fullBackgroundColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "numberBackgroundColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "consonantBackgroundColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "vowelBackgroundColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "punctuationBackgroundColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "commandBackgroundColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "emptySpaceBackgroundColor",
              value: "rgb(0,0,0)",
            },

            {
              id: "numberTextColor",
              value: "rgb(255,255,0)",
            },
            {
              id: "consonantTextColor",
              value: "rgb(255,255,0)",
            },
            {
              id: "vowelTextColor",
              value: "rgb(255,255,0)",
            },
            {
              id: "punctuationTextColor",
              value: "rgb(255,255,0)",
            },
            {
              id: "commandTextColor",
              value: "rgb(255,255,0)",
            },
            {
              id: "emptySpaceTextColor",
              value: "rgb(255,255,0)",
            },

            {
              id: "numberBorderColor",
              value: "rgb(255,255,0)",
            },
            {
              id: "consonantBorderColor",
              value: "rgb(255,255,0)",
            },
            {
              id: "vowelBorderColor",
              value: "rgb(255,255,0)",
            },
            {
              id: "punctuationBorderColor",
              value: "rgb(255,255,0)",
            },
            {
              id: "commandBorderColor",
              value: "rgb(255,255,0)",
            },
            {
              id: "emptySpaceBorderColor",
              value: "rgb(255,255,0)",
            },
          ],
        },
        {
          value: "high-contrast-two",
          description: "High Contrast",
          label: "High Contrast (Black on Yellow)",
          variableValues: [
            { id: "textColorOnBackground", value: "rgb(0,0,0)" },
            {
              id: "fullBackgroundColor",
              value: "rgb(255,255,0)",
            },
            {
              id: "numberBackgroundColor",
              value: "rgb(255,255,0)",
            },
            {
              id: "consonantBackgroundColor",
              value: "rgb(255,255,0)",
            },
            {
              id: "vowelBackgroundColor",
              value: "rgb(255,255,0)",
            },
            {
              id: "punctuationBackgroundColor",
              value: "rgb(255,255,0)",
            },
            {
              id: "commandBackgroundColor",
              value: "rgb(255,255,0)",
            },
            {
              id: "emptySpaceBackgroundColor",
              value: "rgb(255,255,0)",
            },

            {
              id: "numberTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "consonantTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "vowelTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "punctuationTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "commandTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "emptySpaceTextColor",
              value: "rgb(0,0,0)",
            },

            {
              id: "numberBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "consonantBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "vowelBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "punctuationBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "commandBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "emptySpaceBorderColor",
              value: "rgb(0,0,0)",
            },
          ],
        },
        {
          value: "green-with-highlights",
          description: "Green",
          label: "Green",
          variableValues: [
            { id: "textColorOnBackground", value: "rgb(255,255,255)" },

            {
              id: "fullBackgroundColor",
              value: "rgb(55,126,34)",
            },
            {
              id: "numberBackgroundColor",
              value: "rgb(232,240,215)",
            },
            {
              id: "consonantBackgroundColor",
              value: "rgb(255,255,255)",
            },
            {
              id: "vowelBackgroundColor",
              value: "rgb(255,255,255)",
            },
            {
              id: "punctuationBackgroundColor",
              value: "rgb(232,240,215)",
            },
            {
              id: "commandBackgroundColor",
              value: "rgb(232,240,215)",
            },
            {
              id: "emptySpaceBackgroundColor",
              value: "rgb(255,255,255)",
            },

            {
              id: "numberTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "consonantTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "vowelTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "punctuationTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "commandTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "emptySpaceTextColor",
              value: "rgb(0,0,0)",
            },

            {
              id: "numberBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "consonantBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "vowelBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "punctuationBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "commandBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "emptySpaceBorderColor",
              value: "rgb(0,0,0)",
            },
          ],
        },
        {
          value: "purple-with-highlights",
          description: "Purple",
          label: "Purple",
          variableValues: [
            { id: "textColorOnBackground", value: "rgb(255,255,255)" },

            {
              id: "fullBackgroundColor",
              value: "rgb(68,8,125)",
            },
            {
              id: "numberBackgroundColor",
              value: "rgb(249,219,253)",
            },
            {
              id: "consonantBackgroundColor",
              value: "rgb(255,255,255)",
            },
            {
              id: "vowelBackgroundColor",
              value: "rgb(255,255,255)",
            },
            {
              id: "punctuationBackgroundColor",
              value: "rgb(249,219,253)",
            },
            {
              id: "commandBackgroundColor",
              value: "rgb(249,219,253)",
            },
            {
              id: "emptySpaceBackgroundColor",
              value: "rgb(255,255,255)",
            },

            {
              id: "numberTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "consonantTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "vowelTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "punctuationTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "commandTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "emptySpaceTextColor",
              value: "rgb(0,0,0)",
            },

            {
              id: "numberBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "consonantBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "vowelBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "punctuationBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "commandBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "emptySpaceBorderColor",
              value: "rgb(0,0,0)",
            },
          ],
        },
        {
          value: "blue-with-highlights",
          description: "Blue",
          label: "Blue",
          variableValues: [
            { id: "textColorOnBackground", value: "rgb(255,255,255)" },

            {
              id: "fullBackgroundColor",
              value: "rgb(60,70,108)",
            },
            {
              id: "numberBackgroundColor",
              value: "rgb(216,220,233)",
            },
            {
              id: "consonantBackgroundColor",
              value: "rgb(255,255,255)",
            },
            {
              id: "vowelBackgroundColor",
              value: "rgb(255,255,255)",
            },
            {
              id: "punctuationBackgroundColor",
              value: "rgb(216,220,233)",
            },
            {
              id: "commandBackgroundColor",
              value: "rgb(216,220,233)",
            },
            {
              id: "emptySpaceBackgroundColor",
              value: "rgb(255,255,255)",
            },

            {
              id: "numberTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "consonantTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "vowelTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "punctuationTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "commandTextColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "emptySpaceTextColor",
              value: "rgb(0,0,0)",
            },

            {
              id: "numberBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "consonantBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "vowelBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "punctuationBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "commandBorderColor",
              value: "rgb(0,0,0)",
            },
            {
              id: "emptySpaceBorderColor",
              value: "rgb(0,0,0)",
            },
          ],
        },
      ],
    },
    {
      id: "empty-cell-one-text",
      description:
        "This is the text that will appear in the first empty space on any chart. Leave blank to fill in on the printed version",
      name: "First Empty Space Label",
      defaultValue: "",
      type: "freeText",
      maxLength: 100,
    },
    {
      id: "empty-cell-two-text",
      description:
        "This is the text that will appear in the second empty space on any chart. Leave blank to fill in on the printed version",
      name: "Second Empty Space Label",
      defaultValue: "",
      type: "freeText",
      maxLength: 100,
    },
    {
      id: "empty-cells",
      description: "What would you like to appear in the empty cells",
      name: "Empty Spaces",
      defaultValue: "empty",
      type: "preset",
      presets: [
        {
          value: "empty",
          label: "Leave Empty",
          description: "Leave cells blank and fill them in later",
          variableValues: [
            {
              id: "empty-cell-one-text",
              value: "",
            },
            {
              id: "empty-cell-two-text",
              value: "",
            },
          ],
        },
        {
          value: "yes-no",
          label: "Yes / No",
          description: "Use Yes on the left and No on the right",
          variableValues: [
            {
              id: "empty-cell-one-text",
              value: "Yes",
            },
            {
              id: "empty-cell-two-text",
              value: "No",
            },
          ],
        },
        {
          value: "no-yes",
          label: "No / Yes",
          description: "Use No on the left and Yes on the right",
          variableValues: [
            {
              id: "empty-cell-one-text",
              value: "No",
            },
            {
              id: "empty-cell-two-text",
              value: "Yes",
            },
          ],
        },
      ],
    },
    {
      id: "space-text",
      description: "Label that will appear instead of the Space command",
      name: "Space Label",
      defaultValue: "SPACE",
      type: "freeText",
      maxLength: 18,
    },
    {
      id: "start-again-text",
      description: "Label that will appear instead of the Start Again command",
      name: "Start Again Label",
      defaultValue: "START AGAIN",
      type: "freeText",
      maxLength: 18,
    },
    {
      id: "delete-text",
      description: "Label that will appear instead of the Delete command",
      name: "Delete Label",
      defaultValue: "DELETE",
      type: "freeText",
      maxLength: 18,
    },
    {
      id: "casing",
      description:
        "Pick if you want the letters to appear in all capital letters or in all lower case letters.",
      name: "Label Casing",
      defaultValue: "capital",
      type: "option",
      options: [UPPER_CASE_OPTION, LOWER_CASE_OPTION],
    },
    {
      id: "command-casing",
      description:
        "Pick if you want the commands to appear in upper or lower case.",
      name: "Command Casing",
      defaultValue: "capital",
      type: "option",
      options: [
        CAPITAL_CASE_OPTION,
        UPPER_CASE_OPTION,
        LOWER_CASE_OPTION,
        SENTENCE_CASING,
      ],
    },

    {
      id: "fullBackgroundColor",
      description: "Pick the background colour used behind the chart.",
      type: "color",
      name: "Background Color",
      defaultValue: "rgb(255,255,255)",
    },
    {
      id: "numberBackgroundColor",
      description: "Pick the background colour used on cells with numbers",
      type: "color",
      name: "Number Background Color",
      defaultValue: "rgb(255,255,255)",
    },
    {
      id: "consonantBackgroundColor",
      description: "Pick the background colour used on cells with consonants",
      type: "color",
      name: "Consonant Background Color",
      defaultValue: "rgb(255,255,255)",
    },
    {
      id: "vowelBackgroundColor",
      description: "Pick the background colour used on cells with vowels",
      type: "color",
      name: "Vowel Background Color",
      defaultValue: "rgb(255,255,255)",
    },
    {
      id: "punctuationBackgroundColor",
      description: "Pick the background colour used on cells with punctuation",
      type: "color",
      name: "Punctuation Background Color",
      defaultValue: "rgb(255,255,255)",
    },
    {
      id: "commandBackgroundColor",
      description: "Pick the background colour used on cells with commands",
      type: "color",
      name: "Command Background Color",
      defaultValue: "rgb(255,255,255)",
    },
    {
      id: "emptySpaceBackgroundColor",
      description: "Pick the background colour used on empty cells",
      type: "color",
      name: "Empty Background Color",
      defaultValue: "rgb(255,255,255)",
    },

    {
      id: "numberTextColor",
      description: "Pick the colour of the numbers on the chart",
      type: "color",
      name: "Number Colour",
      defaultValue: "rgb(255,255,255)",
    },
    {
      id: "consonantTextColor",
      description: "Pick the colour of the consonants on the chart",
      type: "color",
      name: "Consonant Colour",
      defaultValue: "rgb(255,255,255)",
    },
    {
      id: "vowelTextColor",
      description: "Pick the colour of the vowel on the chart",
      type: "color",
      name: "Vowel Colour",
      defaultValue: "rgb(255,255,255)",
    },
    {
      id: "punctuationTextColor",
      description: "Pick the colour of the punctuation on the chart",
      type: "color",
      name: "Punctuation Colour",
      defaultValue: "rgb(255,255,255)",
    },
    {
      id: "commandTextColor",
      description: "Pick the colour of the commands on the chart",
      type: "color",
      name: "Commands Colour",
      defaultValue: "rgb(255,255,255)",
    },
    {
      id: "emptySpaceTextColor",
      description: "The color of the background",
      type: "color",
      name: "Background Color",
      defaultValue: "rgb(255,255,255)",
      hidden: true,
    },

    {
      id: "numberBorderColor",
      description: "Pick the border colour of the cells with numbers",
      type: "color",
      name: "Numbers Border Colour",
      defaultValue: "rgb(255,255,255)",
    },
    {
      id: "consonantBorderColor",
      description: "Pick the border colour of the cells with consonants",
      type: "color",
      name: "Consonants Border Colour",
      defaultValue: "rgb(255,255,255)",
    },
    {
      id: "vowelBorderColor",
      description: "Pick the border colour of the cells with vowels",
      type: "color",
      name: "Vowel Border Colour",
      defaultValue: "rgb(255,255,255)",
    },
    {
      id: "punctuationBorderColor",
      description: "Pick the border colour of the cells with punctuation",
      type: "color",
      name: "Punctuation Border Colour",
      defaultValue: "rgb(255,255,255)",
    },
    {
      id: "commandBorderColor",
      description: "Pick the border colour of the cells with commands",
      type: "color",
      name: "Commands Border Colour",
      defaultValue: "rgb(255,255,255)",
    },
    {
      id: "emptySpaceBorderColor",
      description: "Pick the border colour of the empty cells",
      type: "color",
      name: "Empty Cell Border Colour",
      defaultValue: "rgb(255,255,255)",
    },

    {
      id: "gap",
      description: "The gap between cells",
      type: "number",
      name: "Spacing",
      defaultValue: "2",
      max: 10,
      min: 0,
    },
    {
      id: "border-width",
      description: "The thickness of the border",
      type: "number",
      name: "Border Thickness",
      defaultValue: "0.5",
      max: 10,
      min: 0,
    },

    {
      type: "option",
      id: "font",
      description: "Choose the font used in the file",
      name: "Font",
      defaultValue: "helvetica",
      options: FONT_OPTIONS,
    },
    {
      type: "color",
      id: "textColorOnBackground",
      description: "Pick the colour of the title and encoding on the chart.",
      name: "Colour of the title and encoding",
      defaultValue: "rgb(0,0,0)",
    },
  ],
  templateVariableGroups: [
    {
      id: "advanced-options",
      variables: ["gap", "command-casing", "border-width"],
      name: "More options",
      description: "Edit advanced options about the chart",
      openByDefault: false,
    },
    {
      id: "label-options",
      variables: [
        "delete-text",
        "start-again-text",
        "space-text",
        "empty-cell-one-text",
        "empty-cell-two-text",
      ],
      name: "Labels",
      description: "Edit the labels that appear on the chart",
      openByDefault: false,
    },
    {
      openByDefault: false,
      name: "Background colours",
      id: "background-colours",
      description: "Change the background colour of each cell type",
      variables: [
        "fullBackgroundColor",
        "numberBackgroundColor",
        "consonantBackgroundColor",
        "vowelBackgroundColor",
        "punctuationBackgroundColor",
        "commandBackgroundColor",
        "emptySpaceBackgroundColor",
      ],
    },
    {
      openByDefault: false,
      name: "Border Colours",
      id: "border-colours",
      description: "Change the border colour of each cell type",
      variables: [
        "numberBorderColor",
        "consonantBorderColor",
        "vowelBorderColor",
        "punctuationBorderColor",
        "commandBorderColor",
        "emptySpaceBorderColor",
      ],
    },
    {
      openByDefault: false,
      name: "Text Colours",
      id: "text-colours",
      description: "Change the background text of each cell type",
      variables: [
        "numberTextColor",
        "consonantTextColor",
        "vowelTextColor",
        "punctuationTextColor",
        "commandTextColor",
        "emptySpaceTextColor",
        "textColorOnBackground",
      ],
    },
  ],
  templateId: "alphabet-chart-launchpad",
  templateDateCreated: "2022-07-20T12:00:00+01:00",
  templateDescription: "Create an alphabet chart with custom colors",
  templateName: "Alphabet Chart Template",
  templateImageUrl: "alphabet-chart1.png",

  format: "open-board-0.1",
  id: "alphabet-chart-launchpad",
  locale: "en-GB",
  name: "Alphabet Chart",
  description_html: "Alphabet board to allow individuals to spell",
  ext_launchpad_options: {
    ext_launchpad_prepend_pdf: "./alphabet-chart-cover.pdf",

    use_page_numbers: true,
    use_ace_branding: true,
    padding: 10,
    gap: { id: "gap", type: "TemplateItem" },
    button_radius: 0,
    button_border_width: { id: "border-width", type: "TemplateItem" },
    text_color_on_background: {
      id: "textColorOnBackground",
      type: "TemplateItem",
    },
    full_background_color: { id: "fullBackgroundColor", type: "TemplateItem" },
  },
  buttons: [
    {
      id: "1",
      label: "1",
      border_color: { id: "numberBorderColor", type: "TemplateItem" },
      background_color: { id: "numberBackgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: {
        id: "numberTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "2",
      label: "2",
      border_color: { id: "numberBorderColor", type: "TemplateItem" },
      background_color: { id: "numberBackgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: {
        id: "numberTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "3",
      label: "3",
      border_color: { id: "numberBorderColor", type: "TemplateItem" },
      background_color: { id: "numberBackgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: {
        id: "numberTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "4",
      label: "4",
      border_color: { id: "numberBorderColor", type: "TemplateItem" },
      background_color: { id: "numberBackgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: {
        id: "numberTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "5",
      label: "5",
      border_color: { id: "numberBorderColor", type: "TemplateItem" },
      background_color: { id: "numberBackgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: {
        id: "numberTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "6",
      label: "6",
      border_color: { id: "numberBorderColor", type: "TemplateItem" },
      background_color: { id: "numberBackgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: {
        id: "numberTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "7",
      label: "7",
      border_color: { id: "numberBorderColor", type: "TemplateItem" },
      background_color: { id: "numberBackgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: {
        id: "numberTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "8",
      label: "8",
      border_color: { id: "numberBorderColor", type: "TemplateItem" },
      background_color: { id: "numberBackgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: {
        id: "numberTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "9",
      label: "9",
      border_color: { id: "numberBorderColor", type: "TemplateItem" },
      background_color: { id: "numberBackgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: {
        id: "numberTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "0",
      label: "0",
      border_color: { id: "numberBorderColor", type: "TemplateItem" },
      background_color: { id: "numberBackgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: {
        id: "numberTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "a",
      label: "A",
      border_color: { id: "vowelBorderColor", type: "TemplateItem" },
      background_color: { id: "vowelBackgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "vowelTextColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "b",
      label: "B",
      border_color: { id: "consonantBorderColor", type: "TemplateItem" },
      background_color: {
        id: "consonantBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "consonantTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "c",
      label: "C",
      border_color: { id: "consonantBorderColor", type: "TemplateItem" },
      background_color: {
        id: "consonantBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "consonantTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "d",
      label: "D",
      border_color: { id: "consonantBorderColor", type: "TemplateItem" },
      background_color: {
        id: "consonantBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "consonantTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "e",
      label: "E",
      border_color: { id: "vowelBorderColor", type: "TemplateItem" },
      background_color: { id: "vowelBackgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "vowelTextColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "f",
      label: "F",
      border_color: { id: "consonantBorderColor", type: "TemplateItem" },
      background_color: {
        id: "consonantBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "consonantTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "g",
      label: "G",
      border_color: { id: "consonantBorderColor", type: "TemplateItem" },
      background_color: {
        id: "consonantBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "consonantTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "h",
      label: "H",
      border_color: { id: "consonantBorderColor", type: "TemplateItem" },
      background_color: {
        id: "consonantBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "consonantTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "i",
      label: "I",
      border_color: { id: "vowelBorderColor", type: "TemplateItem" },
      background_color: { id: "vowelBackgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "vowelTextColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "j",
      label: "J",
      border_color: { id: "consonantBorderColor", type: "TemplateItem" },
      background_color: {
        id: "consonantBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "consonantTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "k",
      label: "K",
      border_color: { id: "consonantBorderColor", type: "TemplateItem" },
      background_color: {
        id: "consonantBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "consonantTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "l",
      label: "L",
      border_color: { id: "consonantBorderColor", type: "TemplateItem" },
      background_color: {
        id: "consonantBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "consonantTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "m",
      label: "M",
      border_color: { id: "consonantBorderColor", type: "TemplateItem" },
      background_color: {
        id: "consonantBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "consonantTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "n",
      label: "N",
      border_color: { id: "consonantBorderColor", type: "TemplateItem" },
      background_color: {
        id: "consonantBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "consonantTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "o",
      label: "O",
      border_color: { id: "vowelBorderColor", type: "TemplateItem" },
      background_color: { id: "vowelBackgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "vowelTextColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "p",
      label: "P",
      border_color: { id: "consonantBorderColor", type: "TemplateItem" },
      background_color: {
        id: "consonantBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "consonantTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "q",
      label: "Q",
      border_color: { id: "consonantBorderColor", type: "TemplateItem" },
      background_color: {
        id: "consonantBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "consonantTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "r",
      label: "R",
      border_color: { id: "consonantBorderColor", type: "TemplateItem" },
      background_color: {
        id: "consonantBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "consonantTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "s",
      label: "S",
      border_color: { id: "consonantBorderColor", type: "TemplateItem" },
      background_color: {
        id: "consonantBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "consonantTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "t",
      label: "T",
      border_color: { id: "consonantBorderColor", type: "TemplateItem" },
      background_color: {
        id: "consonantBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "consonantTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "u",
      label: "U",
      border_color: { id: "vowelBorderColor", type: "TemplateItem" },
      background_color: { id: "vowelBackgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: { id: "vowelTextColor", type: "TemplateItem" },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "v",
      label: "V",
      border_color: { id: "consonantBorderColor", type: "TemplateItem" },
      background_color: {
        id: "consonantBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "consonantTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "w",
      label: "W",
      border_color: { id: "consonantBorderColor", type: "TemplateItem" },
      background_color: {
        id: "consonantBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "consonantTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "x",
      label: "X",
      border_color: { id: "consonantBorderColor", type: "TemplateItem" },
      background_color: {
        id: "consonantBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "consonantTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "y",
      label: "Y",
      border_color: { id: "consonantBorderColor", type: "TemplateItem" },
      background_color: {
        id: "consonantBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "consonantTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "z",
      label: "Z",
      border_color: { id: "consonantBorderColor", type: "TemplateItem" },
      background_color: {
        id: "consonantBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "consonantTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: ",",
      label: ",",
      border_color: { id: "punctuationBorderColor", type: "TemplateItem" },
      background_color: {
        id: "punctuationBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "punctuationTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: ".",
      label: ".",
      border_color: { id: "punctuationBorderColor", type: "TemplateItem" },
      background_color: {
        id: "punctuationBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "punctuationTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "?",
      label: "?",
      border_color: { id: "punctuationBorderColor", type: "TemplateItem" },
      background_color: {
        id: "punctuationBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "punctuationTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "!",
      label: "!",
      border_color: { id: "punctuationBorderColor", type: "TemplateItem" },
      background_color: {
        id: "punctuationBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "punctuationTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 30,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "delete",
      label: { id: "delete-text", type: "TemplateItem" },
      border_color: { id: "commandBorderColor", type: "TemplateItem" },
      background_color: { id: "commandBackgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: {
        id: "commandTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 20,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: {
        type: "TemplateItem",
        id: "command-casing",
      },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "delete-letter",
      label: "DELETE\nLETTER",
      border_color: { id: "commandBorderColor", type: "TemplateItem" },
      background_color: { id: "commandBackgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: {
        id: "commandTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 20,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: {
        type: "TemplateItem",
        id: "command-casing",
      },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "space",
      label: { id: "space-text", type: "TemplateItem" },
      border_color: { id: "commandBorderColor", type: "TemplateItem" },
      background_color: { id: "commandBackgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: {
        id: "commandTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 20,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: {
        type: "TemplateItem",
        id: "command-casing",
      },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "start-again",
      label: { id: "start-again-text", type: "TemplateItem" },
      border_color: { id: "commandBorderColor", type: "TemplateItem" },
      background_color: { id: "commandBackgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: {
        id: "commandTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 20,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: {
        type: "TemplateItem",
        id: "command-casing",
      },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "start-again-new-line",
      label: "START\nAGAIN",
      border_color: { id: "commandBorderColor", type: "TemplateItem" },
      background_color: { id: "commandBackgroundColor", type: "TemplateItem" },
      ext_launchpad_label_color: {
        id: "commandTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 20,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: {
        type: "TemplateItem",
        id: "command-casing",
      },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },

    {
      id: "empty-cell-one",
      label: {
        id: "empty-cell-one-text",
        type: "TemplateItem",
      },
      border_color: { id: "emptySpaceBorderColor", type: "TemplateItem" },
      background_color: {
        id: "emptySpaceBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "emptySpaceTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 20,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "empty-cell-two",
      label: {
        id: "empty-cell-two-text",
        type: "TemplateItem",
      },
      border_color: { id: "emptySpaceBorderColor", type: "TemplateItem" },
      background_color: {
        id: "emptySpaceBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "emptySpaceTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 20,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "empty-cell-three",
      label: "",
      border_color: { id: "emptySpaceBorderColor", type: "TemplateItem" },
      background_color: {
        id: "emptySpaceBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "emptySpaceTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 20,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
    {
      id: "empty-cell-four",
      label: "",
      border_color: { id: "emptySpaceBorderColor", type: "TemplateItem" },
      background_color: {
        id: "emptySpaceBackgroundColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_color: {
        id: "emptySpaceTextColor",
        type: "TemplateItem",
      },
      ext_launchpad_label_font_size: 20,
      ext_launchpad_label_font_style: "bold",
      ext_launchpad_label_casing: { type: "TemplateItem", id: "casing" },
      ext_launchpad_label_font: { type: "TemplateItem", id: "font" },
    },
  ],
  images: [],
  pages: [
    {
      id: "abc-with-numbers",
      grid: {
        rows: 5,
        columns: 10,
        order: [
          ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
          ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
          ["k", "l", "m", "n", "o", "p", "q", "r", "s", "t"],
          ["u", "v", "w", "x", "y", "z", ",", ".", "?", "!"],
          [
            "delete",
            "delete",
            "delete",
            "space",
            "space",
            "space",
            "space",
            "start-again",
            "start-again",
            "start-again",
          ],
        ],
      },
    },
    {
      id: "abc-no-numbers",
      grid: {
        rows: 4,
        columns: 10,
        order: [
          ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
          ["k", "l", "m", "n", "o", "p", "q", "r", "s", "t"],
          ["u", "v", "w", "x", "y", "z", ",", ".", "?", "!"],
          [
            "delete",
            "delete",
            "delete",
            "space",
            "space",
            "space",
            "space",
            "start-again",
            "start-again",
            "start-again",
          ],
        ],
      },
    },
    {
      id: "abc-with-numbers-and-spaces",
      grid: {
        rows: 6,
        columns: 10,
        order: [
          ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
          ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
          ["k", "l", "m", "n", "o", "p", "q", "r", "s", "t"],
          ["u", "v", "w", "x", "y", "z", ",", ".", "?", "!"],
          [
            "delete",
            "delete",
            "delete",
            "space",
            "space",
            "space",
            "space",
            "start-again",
            "start-again",
            "start-again",
          ],
          [
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
          ],
        ],
      },
    },
    {
      id: "abc-no-numbers-and-spaces",

      grid: {
        rows: 5,
        columns: 10,
        order: [
          ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
          ["k", "l", "m", "n", "o", "p", "q", "r", "s", "t"],
          ["u", "v", "w", "x", "y", "z", ",", ".", "?", "!"],
          [
            "delete",
            "delete",
            "delete",
            "space",
            "space",
            "space",
            "space",
            "start-again",
            "start-again",
            "start-again",
          ],
          [
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
          ],
        ],
      },
    },

    {
      id: "abc-portrait-no-space",

      orientation: "portrait",
      grid: {
        rows: 8,
        columns: 4,
        order: [
          ["a", "b", "c", "d"],
          ["e", "f", "g", "h"],
          ["i", "j", "k", "l"],
          ["m", "n", "o", "p"],
          ["q", "r", "s", "t"],
          ["u", "v", "w", "x"],
          [".", "y", "z", "?"],
          ["delete", "space", "space", "start-again-new-line"],
        ],
      },
    },
    {
      id: "abc-portrait-with-space",

      orientation: "portrait",
      grid: {
        rows: 9,
        columns: 4,
        order: [
          ["a", "b", "c", "d"],
          ["e", "f", "g", "h"],
          ["i", "j", "k", "l"],
          ["m", "n", "o", "p"],
          ["q", "r", "s", "t"],
          ["u", "v", "w", "x"],
          [".", "y", "z", "?"],
          ["delete", "space", "space", "start-again-new-line"],
          [
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-two",
            "empty-cell-two",
          ],
        ],
      },
    },
    {
      id: "qwerty-with-numbers",
      grid: {
        rows: 5,
        columns: 10,
        order: [
          ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
          ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
          ["a", "s", "d", "f", "g", "h", "j", "k", "l", "?"],
          ["!", "z", "x", "c", "v", "b", "n", "m", ",", "."],
          [
            "delete",
            "delete",
            "delete",
            "space",
            "space",
            "space",
            "space",
            "start-again",
            "start-again",
            "start-again",
          ],
        ],
      },
    },
    {
      id: "qwerty-no-numbers",

      grid: {
        rows: 4,
        columns: 10,
        order: [
          ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
          ["a", "s", "d", "f", "g", "h", "j", "k", "l", "?"],
          ["!", "z", "x", "c", "v", "b", "n", "m", ",", "."],
          [
            "delete",
            "delete",
            "delete",
            "space",
            "space",
            "space",
            "space",
            "start-again",
            "start-again",
            "start-again",
          ],
        ],
      },
    },
    {
      id: "qwerty-no-numbers-and-spaces",

      grid: {
        rows: 5,
        columns: 10,
        order: [
          ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
          ["a", "s", "d", "f", "g", "h", "j", "k", "l", "?"],
          ["!", "z", "x", "c", "v", "b", "n", "m", ",", "."],
          [
            "delete",
            "delete",
            "delete",
            "space",
            "space",
            "space",
            "space",
            "start-again",
            "start-again",
            "start-again",
          ],
          [
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
          ],
        ],
      },
    },
    {
      id: "qwerty-with-numbers-and-spaces",

      grid: {
        rows: 6,
        columns: 10,
        order: [
          ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
          ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
          ["a", "s", "d", "f", "g", "h", "j", "k", "l", "?"],
          ["!", "z", "x", "c", "v", "b", "n", "m", ",", "."],
          [
            "delete",
            "delete",
            "delete",
            "space",
            "space",
            "space",
            "space",
            "start-again",
            "start-again",
            "start-again",
          ],
          [
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-one",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
            "empty-cell-two",
          ],
        ],
      },
    },
  ],
};
