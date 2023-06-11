      
export function loader(params) {
   window.addEventListener('load', () => {
        const loader = document.querySelector('.loader');

        loader.classList.add('loader--hidden');

        loader.addEventListener('transitionend', () => {
          loader.classList.remove('loader');
        });
      }); 
}
    