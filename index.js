import { banner } from './src/welcome screen/banner';

export const init = () => (
  document.addEventListener("DOMContentLoaded", () => {
    const titleBanner = document.getElementById('selection-screen-title-banner');
    const imageSelector = document.getElementById("selection-screen-selection");
    const puzzle = document.getElementById('puzzle');
    imageSelector.classList.add('hidden');
    puzzle.classList.add('hidden');

    banner(titleBanner, imageSelector, puzzle);
  })
);

document.addEventListener('onload', init());