import { imageSelection } from '../image selection/image_selection';

export const setDifficulty = (level, titleBanner, imageSelector, puzzle, music) => {
  if (level === 'Easy') {
    localStorage.setItem("difficulty", 4);
  } else if (level === 'Medium') {
    localStorage.setItem("difficulty", 7);
  } else if (level === 'Hard') {
    localStorage.setItem("difficulty", 10);
  }
  const description = document.getElementById('description');

  description.classList.add('hidden');
  titleBanner.classList.add('hidden');
  imageSelector.classList.remove('hidden');
  imageSelection(titleBanner, imageSelector, puzzle, music);
};