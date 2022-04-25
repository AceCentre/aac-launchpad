#! /usr/bin/env node

import boardToPdf from "board-to-pdf";
import { simpleSingleTile, twoByTwo } from "templates";

boardToPdf(simpleSingleTile, "./simple-single-tile.pdf");
boardToPdf(twoByTwo, "./two-by-two.pdf");
