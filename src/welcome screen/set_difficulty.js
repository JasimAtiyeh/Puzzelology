export const setDifficulty = (level, titleBanner, imageSelector, canvas) => {
  let width;
  let height;
  if (level === 'Easy') {
    width = 700;
    height = 500;
  } else if (level === 'Medium') {
    width = 900;
    height = 600;
  } else if (level === 'Hard') {
    width = 1100;
    height = 800;
  }
  titleBanner.classList.add('hidden');
  imageSelector.classList.remove('hidden');

  // puzzle.setAttribute('width', width);
  // puzzle.setAttribute('height', height);

  canvas.width = width;
  canvas.height = height;
};