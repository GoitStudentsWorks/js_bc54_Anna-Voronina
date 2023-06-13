const loader = document.querySelector('.loader');
let bodyWidth = 0;

loaderFunc();

function loaderFunc(params) {
  window.addEventListener('load', event => {
    bodyWidth = event.target.body.clientWidth;

    loader.classList.add('loader--hidden');

    loader.addEventListener('transitionend', () => {
      loader.classList.remove('loader');
    });
  });
}

export function onClickLoader() {
  loader.classList.add('loader--hidden');

  loader.addEventListener('transitionend', () => {
    loader.classList.remove('loader');
  });
}

export { bodyWidth };
