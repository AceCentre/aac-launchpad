import { Board } from "types";
import { jsPDF } from "jspdf";

const boardToPdf = (board: Board, saveLocation: string) => {
  // Default export is a4 paper, portrait, using millimeters for units
  const doc = new jsPDF();

  doc.text("Hello world!", 10, 10);
  doc.save(saveLocation);
};

export default boardToPdf;
