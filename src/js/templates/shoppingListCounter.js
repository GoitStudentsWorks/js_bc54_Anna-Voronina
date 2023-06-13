import Storage from '../local-storage';
const shoppingCountEls = document.querySelectorAll('.header-shopping-count');

export const countBook = () => {
  const storageBook = Storage.load('bookList');
  for (const shoppingCountEl of shoppingCountEls) {
    if (storageBook) {
      shoppingCountEl.classList.remove('is-hidden');
      shoppingCountEl.textContent = storageBook.length;
    } else {
      shoppingCountEl.classList.add('is-hidden');
    }
  }
};

countBook();
