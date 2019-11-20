import { setDifficulty } from './set_difficulty';

export const banner = (titleBanner, imageSelector, canvas) => {
  let difficultyButtons = document.querySelectorAll('.difficulty-buttons');
  difficultyButtons.forEach(button => button.addEventListener('click', () => (
    setDifficulty(button.textContent, titleBanner, imageSelector, canvas)
  )));
};