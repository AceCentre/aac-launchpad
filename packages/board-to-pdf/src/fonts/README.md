# Font

## Add a new font

1. First step is to find the font that you want, specifically a `.ttf` file for each style. (`bold`, `bolditalic`, `normal` and `italic`). Save the raw files into the fonts folder for future reference
2. Upload the 4 `.ttf` files to the [jsPDF font converter tool](https://rawgit.com/MrRio/jsPDF/master/fontconverter/fontconverter.html)
   - Make sure every file uses the same `fontName`
   - Select the correct `fontStyle` for each font
   - Use ES Modules
   - Save the result the font folder
3. The font doesn't quite match the style that we want so we have to tweak the generated file.

First thing is change them to `.ts` files. Then they need to match the following structure:

```ts
import { jsPDF } from "jspdf";

var font = "<LONG_FONT_STRING_HERE>";

var callAddFont = function (this: any) {
  this.addFileToVFS("OpenDyslexic-bold.ttf", font);
  this.addFont("OpenDyslexic-bold.ttf", "OpenDyslexic", "bold");
};

export const initialise = () => {
  jsPDF.API.events.push(["addFonts", callAddFont]);
};
```

4. Then once you have created the 4 font TS files you import them into `font.ts` and call the import function.
5. Add an extra entry to the `FONT_OPTIONS` list in `font.ts` so that users can select the new font
6. Add an attribution to the font in the main [README.md](../../../../README.md)
7. Add font license in the `fonts` directory

## Licensing

When suggesting a new font make sure its available under an Open License. If the font you want is not available under an Open License, check out Google Fonts for an alternative as they often have Open Source 'reinterpretations' of popular fonts. For example, we don't use Comic Sans, instead we use Comic Neue from Google Fonts.

You can see the license for each font in this folder named `<FONT NAME>-LICENSE`

## Pitfalls

Currently the font style and the font are not dependent on each other. This means that we assume all font styles are available in the each font. If we ever add a font that doesn't have `bold`, `bolditalic`, `normal` and `italic` then we will have to do some work to make sure the user only selects valid font choices.
