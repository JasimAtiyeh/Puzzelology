import { initPuzzle } from "./puzzle_canvas";

export const toggleSettingsMenu = (
  settingsMenu,
  titleBanner,
  puzzle,
  imageSelector,
  music
  ) => {
  settingsMenu.classList.toggle('hidden');
  let mute = document.getElementById('mute');
  let notMute = document.getElementById('not-mute');
  let setDifficulty = document.getElementById('set-difficulty-button');
  let selectImage = document.getElementById('select-image');
  let restartPuzzle = document.getElementById('restart-puzzle');
  const description = document.getElementById('description');

  notMute.addEventListener('click', () => {
    music.pause();
    notMute.classList.add('hidden');
    mute.classList.remove('hidden');
  });

  mute.addEventListener('click', () => {
    music.play();
    notMute.classList.remove('hidden');
    mute.classList.add('hidden');
  });

  setDifficulty.addEventListener('click', () => {
    description.classList.remove('hidden');
    titleBanner.classList.remove('hidden');
    puzzle.classList.add('hidden');
    settingsMenu.classList.add('hidden');
    music.stop();
  });
  
  selectImage.addEventListener('click', () => {
    imageSelector.classList.remove('hidden');
    puzzle.classList.add('hidden');
    settingsMenu.classList.add('hidden');
    music.stop();
  });
  
  restartPuzzle.addEventListener('click', () => {
    initPuzzle();
    settingsMenu.classList.add('hidden');
  });
};