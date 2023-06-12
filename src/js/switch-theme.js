const switcher = document.querySelector('.js-themes');

switcher.addEventListener('change', onSwitcherChange);

function onSwitcherChange(event) {
  if (event.target.nodeName === 'INPUT') {
    const htmlEl = document.documentElement;
    htmlEl.classList.toggle('light');
    htmlEl.classList.toggle('dark');
  }
}
