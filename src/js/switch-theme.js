import storage from './local-storage.js';

const switcher = document.querySelector('.js-themes');

console.log(switcher);

switcher.addEventListener('change', onSwitcherChange);

function onSwitcherChange(event) {
  if (event.target.nodeName === 'INPUT') {
    resetTheme();
    // const htmlEl = document.documentElement;
    // htmlEl.classList.toggle('light');
    // htmlEl.classList.toggle('dark');
  }
}

function resetTheme() {
  if (switcher.children.switcher_checkbox.checked) {
    const htmlEl = document.documentElement;
    htmlEl.classList.toggle('light');
    htmlEl.classList.toggle('dark');
    storage.save('theme', 'dark');
  } else {
    htmlEl.classList.toggle('light');
    htmlEl.classList.toggle('dark');
    storage.remove('theme');
  }
}

function initTheme() {
  const storageData = storage.load('theme');
  console.log(storageData);

  if (storageData === 'dark') {
    htmlEl.classList.toggle('light');
    htmlEl.classList.toggle('dark');
  }
}

initTheme();
