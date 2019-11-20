import { onImage } from './on_image';
import { puzzleVariables } from './puzzle_variables';

export const puzzleCanvas = (canvas, imageSrc) => {
  let { img, ctx } = puzzleVariables;
  puzzleVariables.canvas = canvas;
  ctx = canvas.getContext("2d");

  img = new Image();
  img.src = imageSrc;
  img.addEventListener('load', onImage, false);
  // image.onload = createPieces(image, canvas);
};