import Storage from './local-storage';
import { countBook } from './templates/shoppingListCounter';

const ref = {
  homeBtnEl: document.querySelector('.js-header-home-btn'),
  shopBtnEl: document.querySelector('.js-header-shop-btn'),
};

// add 'current' class to current link
const pathname = window.location.pathname;
if (pathname === '/shopping-list.html') {
  ref.homeBtnEl.classList.toggle('current');
  ref.shopBtnEl.classList.toggle('current');
}
//end of

const storageBook = Storage.load('bookList');
if (storageBook) {
  countBook();
}
