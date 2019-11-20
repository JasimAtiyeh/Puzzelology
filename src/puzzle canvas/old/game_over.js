import { initPuzzle } from "../init_puzzle";

export const gameOver = () => {
  document.onmousedown = null;
  document.onmousemove = null;
  document.onmouseup = null;
  initPuzzle();
};