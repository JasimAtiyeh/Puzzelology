import { createPieces } from './buildPieces';
import { puzzleVariables } from './puzzle_variables';

export const initPuzzle = () => {
  let { pieces, mouse, currentPiece, currentDropPiece } = puzzleVariables;
  pieces = [];
  mouse = { x:0, y:0 };
  currentPiece = null;
  currentDropPiece = null;
  createPieces();
};

