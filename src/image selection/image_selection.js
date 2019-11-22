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

export const Images = {
  image1: 'https://puzzleology.s3.us-east-2.amazonaws.com/A2_SigmaPhiEpsilon-900x600.jpg',
  image2: 'https://puzzleology.s3.us-east-2.amazonaws.com/5718269042_8b2181bed8_o-900x600.png',
  image3: 'https://puzzleology.s3.us-east-2.amazonaws.com/A2_SigmaPhiEpsilon-900x600.jpg',
  image4: 'https://puzzleology.s3.us-east-2.amazonaws.com/KIlworth-House-Hotel_0003-3-900x600.jpeg',
  image5: 'https://puzzleology.s3.us-east-2.amazonaws.com/KIlworth-House-Hotel_0003-3-900x600.jpg',
  image6: 'https://puzzleology.s3.us-east-2.amazonaws.com/Wayne_campus_scienglib_900x600.jpg',
  image7: 'https://puzzleology.s3.us-east-2.amazonaws.com/bahia-de-las-aguilas-pedernales-900x600.jpg',
  image8: 'https://puzzleology.s3.us-east-2.amazonaws.com/heidi-kaden-n7NwHLauoJ0-unsplash-900x600.jpg',
  image9: 'https://puzzleology.s3.us-east-2.amazonaws.com/march_moon.900x600.jpg',
  image10: 'https://puzzleology.s3.us-east-2.amazonaws.com/spice-of-life-900x600.jpg'
};