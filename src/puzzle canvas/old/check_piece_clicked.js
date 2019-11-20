import { puzzleVariables } from "../puzzle_variables";

export const checkPieceClicked = () => {
  let { pieces, mouse, pieceWidth, pieceHeight } = puzzleVariables;
  let piece;

  for (let i = 0; i < pieces.length; i++) {
    piece = pieces[i];
    if (mouse.x < piece.xPos || mouse.x > (piece.xPos + pieceWidth) || mouse.y < piece.yPos || mouse.y > (piece.yPos + pieceHeight)) {
      
    } else {
      return piece;
    }
    return null;
  }
};