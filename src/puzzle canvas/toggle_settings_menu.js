import { initPuzzle } from "./puzzle_canvas";

export const toggleSettingsMenu = (
  settingsMenu,
  titleBanner,
  puzzle,
  imageSelector
  ) => {
  settingsMenu.classList.toggle('hidden');
  let mute = document.getElementById('mute');
  let notMute = document.getElementById('not-mute');
  let setDifficulty = document.getElementById('set-difficulty-button');
  let selectImage = document.getElementById('select-image');
  let restartPuzzle = document.getElementById('restart-puzzle');
  let audio = document.getElementById('audio');

  notMute.addEventListener('click', () => {
    audio.muted = true;
    notMute.classList.add('hidden');
    mute.classList.remove('hidden');
  });

  mute.addEventListener('click', () => {
    audio.muted = false;
    notMute.classList.remove('hidden');
    mute.classList.add('hidden');
  });

  setDifficulty.addEventListener('click', () => {
    titleBanner.classList.remove('hidden');
    puzzle.classList.add('hidden');
    settingsMenu.classList.add('hidden');
    audio.muted = true;
  });
  
  selectImage.addEventListener('click', () => {
    imageSelector.classList.remove('hidden');
    puzzle.classList.add('hidden');
    settingsMenu.classList.add('hidden');
    audio.muted = true;
  });
  
  restartPuzzle.addEventListener('click', () => {
    initPuzzle();
    settingsMenu.classList.add('hidden');
  });
};