import { banner } from './src/welcome screen/banner';
import { toggleSettingsMenu } from './src/puzzle canvas/toggle_settings_menu';

export const init = () => (
  document.addEventListener("DOMContentLoaded", () => {
    const titleBanner = document.getElementById('selection-screen-title-banner');
    const imageSelector = document.getElementById("selection-screen-selection");
    const puzzle = document.getElementById('puzzle');
    const settings = document.getElementById('settings');
    const settingsMenu = document.getElementById('settings-menu');
    const clock = document.getElementById('clock');

    imageSelector.classList.add('hidden');
    puzzle.classList.add('hidden');
    settingsMenu.classList.add('hidden');

    banner(titleBanner, imageSelector, puzzle);
    settings.addEventListener('click', () => toggleSettingsMenu(
      settingsMenu,
      titleBanner,
      puzzle,
      imageSelector
    ));

    let time;
    setTimeout(() => {
      time += 1;
      clock.innerHTML = time;
    }, 1000);
  })
);

document.addEventListener('onload', init());