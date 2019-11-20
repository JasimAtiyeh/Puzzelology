import { puzzleVariables } from "./puzzle_variables";

export const updatePuzzle = (e) => {
  let { currentDropPiece, mouse, canvas, ctx, puzzleWidth, puzzleHeight, pieces, currentPiece, img, pieceWidth, pieceHeight, PUZZLE_HOVER_TINT } = puzzleVariables;

  currentDropPiece = null;
  if (e.layerX || e.layerY === 0) {
    mouse.x = e.layerX - canvas.offsetLeft;
    mouse.y = e.layerY - canvas.offsetTop;
  } else if (e.offsetX || e.offsetY === 0) {
    mouse.x = e.offsetX - canvas.offsetLeft;
    mouse.y = e.offsetY - canvas.offsetTop;
  }
  ctx.clearRect(0, 0, puzzleWidth, puzzleHeight);

  let piece;
  for (let i = 0; i < pieces.length; i++) {
    piece = pieces[i];
    if (piece === currentPiece) {
      continue;
    }
    ctx.drawImage(img, piece.sx, piece.sy, pieceWidth, pieceHeight, piece.xPos, piece.yPos, pieceWidth, pieceHeight)
    ctx.strokeRect(piece.xPos, piece.yPos, pieceWidth, pieceHeight);

    if (currentDropPiece === null) {
      if (mouse.x < piece.xPos || mouse.x > (piece.xPos + pieceWidth) || mouse.y < piece.yPos || mouse.y > (piece.yPos + pieceHeight)) {

      } else {
        currentDropPiece = piece;
        ctx.save();
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = PUZZLE_HOVER_TINT;
        ctx.fillRect(currentDropPiece.xPos, currentDropPiece.yPos, pieceWidth, pieceHeight);
        ctx.restore();
      }
    }
  }
  ctx.save();
  ctx.globalAlpha = 0.6;
  ctx.drawImage(img, currentPiece.sx, currentPiece.sy, pieceWidth, pieceHeight, mouse.x - (pieceWidth / 2), mouse.y - (pieceHeight / 2), pieceWidth, pieceHeight);
  ctx.restore();
  ctx.strokeRect(mouse.x - (pieceWidth / 2), mouse.y - (pieceHeight / 2), pieceWidth, pieceHeight);
};