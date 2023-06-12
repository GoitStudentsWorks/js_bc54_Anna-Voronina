import Storage from '../local-storage';
const shoppingCountEl = document.querySelector('.header-shopping-count');

export const countBook = () => {
  const storageBook = Storage.load('bookList');
  if (storageBook) {
    shoppingCountEl.classList.remove('is-hidden');
    shoppingCountEl.textContent = storageBook.length;
  } else {
    shoppingCountEl.classList.add('is-hidden');
  }
};
