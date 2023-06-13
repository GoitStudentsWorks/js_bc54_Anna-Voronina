import storage from './local-storage.js';

const switcher = document.querySelector('.js-themes');
const htmlEl = document.documentElement;

initTheme();

switcher.addEventListener('change', onSwitcherChange);

function onSwitcherChange(event) {
  if (event.target.nodeName === 'INPUT') {
    resetTheme();
  }
}

function resetTheme() {
  if (switcher.children.switcher_checkbox.checked) {
    themeClassToggle();
    storage.save('theme', 'dark');
  } else {
    themeClassToggle();
    storage.remove('theme');
  }
}

function initTheme() {
  const storageData = storage.load('theme');

  if (storageData === 'dark') {
    switcher.children.switcher_checkbox.checked = true;
    themeClassToggle();
  }
}

function themeClassToggle() {
  htmlEl.classList.toggle('light');
  htmlEl.classList.toggle('dark');
}
