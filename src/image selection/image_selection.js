import { Images } from '../../assets/default_images';
import { puzzleCanvas } from '..//puzzle canvas/puzzle_canvas';

export const imageSelection = (titleBanner, imageSelector, puzzle, difficulty) => {
  let images = Object.values(Images);
  let imageSelection = document.getElementById('selection-screen-image-selection');
  let setDifficulty = document.getElementById('set-difficulty');
  let uploadImage = document.getElementById('upload-image-input');

  images.map(imageLink => {
    let image = document.createElement('img');
    image.setAttribute('src', imageLink);
    image.setAttribute('width', '250');
    image.setAttribute('height', '200');
    image.addEventListener('click', (e) => {
      imageSelector.classList.add('hidden');
      puzzle.classList.remove('hidden');
      puzzleCanvas(difficulty, e.target.src);
    });
    imageSelection.appendChild(image);
  });
  
  setDifficulty.addEventListener('click', () => {
    titleBanner.classList.remove('hidden');
    imageSelector.classList.add('hidden');
  });

  uploadImage.addEventListener('change', (e) => {
    const input = e.target;
    let src = window.URL.createObjectURL(input.files[0]);

    imageSelector.classList.add('hidden');
    puzzle.classList.remove('hidden');
    puzzleCanvas(difficulty, src);
  });
};