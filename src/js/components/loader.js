const loader = document.querySelector('.loader');

loaderFunc();

function loaderFunc(params) {
  window.addEventListener('load', () => {
    // const loader = document.querySelector('.loader');

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
