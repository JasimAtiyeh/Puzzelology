import { puzzleVariables } from './puzzle_variables';

export const shufflePuzzle = () => {
  let { pieces, ctx, puzzleWidth, puzzleHeight, img, pieceHeight, pieceWidth } = puzzleVariables;
  let xPos = 0;
  let yPos = 0;

  pieces = shuffleArray(pieces);
  ctx.clearRect(0, 0, puzzleWidth, puzzleHeight);

  for (let i = 0; i < pieces.length; i++) {
    let piece = pieces[i];
    piece.xPos = xPos;
    piece.yPos = yPos;
    ctx.drawImage(img, piece.sx, piece.sy, pieceWidth, pieceHeight, xPos, yPos, pieceWidth, pieceHeight);
    ctx.strokeRect(xPos, yPos, pieceWidth, pieceHeight);
    xPos += pieceWidth;
    if (xPos >= puzzleWidth) {
      xPos = 0;
      yPos += pieceHeight;
    }
  }
  document.onmousedown = onPuzzleClick;
};

function shuffleArray(pieces) {
  for (var j, x, i = pieces.length; i; j = parseInt(Math.random() * i), x = pieces[--i], pieces[i] = pieces[j], pieces[j] = x);
  return pieces;
}