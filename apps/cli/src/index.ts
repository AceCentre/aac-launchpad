#! /usr/bin/env node

import boardToPdf from "board-to-pdf";
import {
  alphabetChart,
  simpleSingleTile,
  threeByThree,
  twoByTwo,
} from "templates";

boardToPdf(simpleSingleTile, "./test-files/simple-single-tile.pdf");
boardToPdf(twoByTwo, "./test-files/two-by-two.pdf");
boardToPdf(threeByThree, "./test-files/three-by-three.pdf");
boardToPdf(alphabetChart, "./test-files/alphabet-chart.pdf");
