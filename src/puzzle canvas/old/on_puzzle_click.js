import { puzzleVariables } from '../puzzle_variables';
import { checkPieceClicked } from './check_piece_clicked.js';
import { updatePuzzle } from './update_puzzle';
import { pieceDropped } from '../piece_dropped'

export const onPuzzleClick = e => {
  let { mouse, canvas, ctx, pieceWidth, pieceHeight, img, currentPiece } = puzzleVariables;
  if (e.layerX || e.layerY === 0) {
    mouse.x = e.layerX - canvas.offsetLeft;
    mouse.y = e.layerY - canvas.offsetTop;
  } else if (e.offsetX || e.offsetY === 0) {
    mouse.x = e.offsetX - canvas.offsetLeft;
    mouse.y = e.offsetY - canvas.offsetTop;
  }

  currentPiece = checkPieceClicked();
  if (currentPiece !== null) {
    ctx.clearRect(currentPiece.xPos, currentPiece.yPos, pieceWidth, pieceHeight);
    ctx.save();
    ctx.globalAlpha = .9;
    ctx.drawImage(img, currentPiece.sx, currentPiece.sy, pieceWidth, pieceHeight, mouse.x - (pieceWidth / 2), mouse.y - (pieceHeight / 2), pieceWidth, pieceHeight);
    ctx.restore();
    document.onmousemove = updatePuzzle;
    document.onmouseup = pieceDropped;
  }
};