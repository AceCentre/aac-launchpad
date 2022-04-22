#! /usr/bin/env node

import boardToPdf from "board-to-pdf";
import { simpleSingleTile } from "templates";

boardToPdf(simpleSingleTile, "./simple-single-tile.pdf");
