import { imageSelection } from '../image selection/image_selection';

export const setDifficulty = (level, titleBanner, imageSelector, puzzle) => {
  let difficulty;
  if (level === 'Easy') {
    difficulty = 4;
  } else if (level === 'Medium') {
    difficulty = 7;
  } else if (level === 'Hard') {
    difficulty = 10;
  }
  titleBanner.classList.add('hidden');
  imageSelector.classList.remove('hidden');
  imageSelection(titleBanner, imageSelector, puzzle, difficulty);
};