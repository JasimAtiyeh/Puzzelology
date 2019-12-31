import { banner } from './src/welcome screen/banner';
import { toggleSettingsMenu } from './src/puzzle canvas/toggle_settings_menu';

export const init = () => (
  document.addEventListener("DOMContentLoaded", () => {
    const titleBanner = document.getElementById('selection-screen-title-banner');
    const imageSelector = document.getElementById("selection-screen-selection");
    const puzzle = document.getElementById('puzzle');
    const settings = document.getElementById('settings');
    const settingsMenu = document.getElementById('settings-menu');
    const music = new Howl({
      src: 'https://puzzleology.s3.us-east-2.amazonaws.com/audio_track.mp3',
      loop: true
    });

    imageSelector.classList.add('hidden');
    puzzle.classList.add('hidden');
    settingsMenu.classList.add('hidden');

    banner(titleBanner, imageSelector, puzzle, music);
    settings.addEventListener('click', () => toggleSettingsMenu(
      settingsMenu,
      titleBanner,
      puzzle,
      imageSelector,
      music
    ));
  })
);

document.addEventListener('onload', init());