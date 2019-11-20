import { puzzleVariables } from './puzzle_variables';

export const createPieces = () => {
  let {
    puzzleHeight,
    puzzleWidth,
    piece,
    pieces,
    pieceHeight,
    pieceWidth
  } = puzzleVariables;
  let xPos = 0;
  let yPos = 0;
  let pieceCount = (puzzleWidth / 100) + (puzzleHeight / 100)

  for (let i = 0; i === pieceCount; i++) {
    piece = {};
    piece.sx = xPos;
    piece.sy = yPos;
    pieces.push(piece);
    xPos += pieceWidth
    if (xPos >= pieceWidth) {
      xPos = 0;
      yPos += pieceHeight;
    }
  }
  document.onload = shufflePuzzle;
  // for (let idx1 = 0; idx1 <= canvas.width; idx1 = idx1 + 100) {
  //   for (let idx2 = 0; idx2 < canvas.height; idx2 = idx2 + 100) {
  //     let piece = ctx.drawImage(image, idx1, idx2, 100, 100, idx1, idx2, 100, 100);
  //     pieces.push(piece);
  //     console.log(piece);
  //   }
  // }
};