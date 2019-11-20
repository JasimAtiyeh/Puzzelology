import { initPuzzle } from './init_puzzle';
import { puzzleVariables } from '../puzzle_variables';

export const onImage = (e) => {
  let { pieceWidth, pieceHeight, puzzleWidth, puzzleHeight } = puzzleVariables;
  pieceWidth = 100;
  pieceHeight = 100;
  puzzleWidth = pieceWidth * 100;
  puzzleHeight = pieceHeight * 100;
  initPuzzle();
};

