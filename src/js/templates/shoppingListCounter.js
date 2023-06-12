import Storage from '../local-storage';
const shoppingCountEl = document.querySelector('.header-shopping-count')

export default countBooks = () => {
    const storageBook = Storage.load('bookList');
    if (storageBook.length > 0) {
        shoppingCountEl.classList.remove('is-hidden');
        shoppingCountEl.textContent = storageBook.length;
    } else {
        shoppingCountEl.classList.add('is-hidden');
    }
}