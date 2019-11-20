import { puzzleVariables } from "./puzzle_variables";
import { gameOver } from './game_over';

export const resetPuzzleAndCheckWin = () => {
  let { ctx, img, puzzleWidth, puzzleHeight, pieces, pieceWidth, pieceHeight } = puzzleVariables;
  ctx.clearRect(0, 0, puzzleWidth, puzzleHeight);

  let gameWin = true;
  let piece;
  for (let i = 0; i < pieces.length; i++) {
    piece = pieces[i];
    ctx.drawImage(img, piece.sx, piece.sy, pieceWidth, pieceHeight, piece.xPos, piece.yPos, pieceWidth, pieceHeight);
    ctx.strokeRect(piece.xPos, piece.yPos, pieceWidth, pieceHeight);
    if (piece.xPos !== piece.sx || piece.yPos !== piece.sy) {
      gameWin = false;
    }
  }
  if (gameWin) {
    setTimeout(gameOver, 500);
  }
};