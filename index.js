import { banner } from './src/welcome screen/banner';
import { imageSelection } from './src/image selection/image_selection';

document.addEventListener("DOMContentLoaded", () => {
  const titleBanner = document.getElementById('selection-screen-title-banner');
  const imageSelector = document.getElementById("selection-screen-image-selection");
  const canvas = document.getElementById('canvas');
  const puzzle = document.getElementById('puzzle');
  imageSelector.classList.add('hidden');
  canvas.classList.add('hidden');
  puzzle.classList.add('hidden');

  banner(titleBanner, imageSelector, canvas);
  imageSelection(titleBanner, imageSelector, canvas);
  
});
