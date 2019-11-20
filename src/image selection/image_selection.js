import { Images } from '../../assets/default_images';
import { puzzleCanvas } from '..//puzzle canvas/puzzle_canvas';

export const imageSelection = (titleBanner, imageSelector, puzzle, difficulty) => {
  let images = Object.values(Images);
  let cancel = document.getElementById('cancel');

  images.map(imageLink => {
    let image = document.createElement('img');
    image.setAttribute('src', imageLink);
    image.setAttribute('width', '170');
    image.setAttribute('height', '120');
    image.addEventListener('click', (e) => {
      imageSelector.classList.add('hidden');
      puzzle.classList.remove('hidden');
      puzzleCanvas(difficulty, e.target.src);
    });
    imageSelector.appendChild(image);
    image.before(cancel);
  });
  
  cancel.addEventListener('click', () => {
    titleBanner.classList.remove('hidden');
    imageSelector.classList.add('hidden');
  });
};