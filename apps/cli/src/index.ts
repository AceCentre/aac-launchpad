#! /usr/bin/env node

import boardToPdf from "board-to-pdf";
import { simpleSingleTile, twoByTwo } from "templates";

boardToPdf(simpleSingleTile, "./test-files/simple-single-tile.pdf");
boardToPdf(twoByTwo, "./test-files/two-by-two.pdf");
