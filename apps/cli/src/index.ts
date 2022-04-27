#! /usr/bin/env node

import boardToPdf from "board-to-pdf";
import templateToBoard from "template-to-board";
import {
  alphabetChart,
  simpleSingleTile,
  threeByThree,
  twoByTwo,
} from "templates";

const alphabetChartBoard = templateToBoard(alphabetChart, []);
const simpleSingleTileBoard = templateToBoard(simpleSingleTile, []);
const twoByTwoBoard = templateToBoard(twoByTwo, []);
const threeByThreeBoard = templateToBoard(threeByThree, []);

boardToPdf(simpleSingleTileBoard, "./test-files/simple-single-tile.pdf");
boardToPdf(twoByTwoBoard, "./test-files/two-by-two.pdf");
boardToPdf(threeByThreeBoard, "./test-files/three-by-three.pdf");
boardToPdf(alphabetChartBoard, "./test-files/alphabet-chart.pdf");
