import { puzzleVariables } from "./puzzle_variables";
import { resetPuzzleAndCheckWin } from './reset_puzzle_and_check_win';

export const pieceDropped = e => {
  let { currentDropPiece, currentPiece } = puzzleVariables;
  document.onmousemove = null;
  document.onmouseup = null;
  if (currentDropPiece !== null) {
    let tmp = { xPos: currentPiece.xPos, yPos: currentPiece.yPos };
    currentPiece.xPos = currentDropPiece.xPos;
    currentPiece.yPos = currentDropPiece.yPos;
    currentDropPiece.xPos = tmp.xPos;
    currentDropPiece.yPos = tmp.yPos;
  }
  resetPuzzleAndCheckWin();
};