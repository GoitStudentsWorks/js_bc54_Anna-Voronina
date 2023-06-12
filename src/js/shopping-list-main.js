import book322_1 from '../images/shopping/books_322_@1.webp';
import book322_2 from '../images/shopping/books_322_@2.webp';
import book322_11 from '../images/shopping/books_322_@1.png';
import book322_22 from '../images/shopping/books_322_@2.png';
import book265_1 from '../images/shopping/books_265_@1.webp';
import book265_2 from '../images/shopping/books_265_@2.webp';
import book265_11 from '../images/shopping/books_265_@1.png';
import book265_22 from '../images/shopping/books_265_@2.png';

import Storage from './local-storage';
import getShoppingCartMarkup from './shopping-cart';
import { countBook } from './templates/shoppingListCounter';

import { SwaggerAPI } from './swagger-api.js';

const booksApi = new SwaggerAPI();

const listContainer = document.querySelector('.js-shopping-list');

const bookStorage = Storage.load('bookList');

const shopContainer = async () => {
  if (bookStorage) {
    listContainer.innerHTML = `
        <ul class="shop-cart-list">
            ${getShoppingCartMarkup(bookStorage)}
        </ul>
        `;
    const deleteCardItem = document.querySelectorAll('.shop-cart-btn');
    deleteCardItem.forEach(btn => {
      btn.addEventListener('click', e => {
        if (
          e.target.nodeName === 'BUTTON' ||
          e.target.nodeName === 'svg' ||
          e.target.nodeName === 'use'
        ) {
          const deleteBookIndex = bookStorage.indexOf(
            bookStorage.find(
              book => book.title === e.currentTarget.dataset.title
            )
          );
          if (deleteBookIndex < 0) {
            return;
          }
          bookStorage.splice(deleteBookIndex, 1);
          Storage.save('bookList', bookStorage);
          e.target.closest('li').remove();
          if (bookStorage.length === 0) {
            listContainer.innerHTML = emptyShoppingMarkup();
            Storage.remove('bookList');
          }
          countBook();
          return;
        }
      }); //end of click
    }); // end forEach
  } else {
    listContainer.innerHTML = emptyShoppingMarkup();
  }
};
shopContainer();

function emptyShoppingMarkup() {
  return `
    <p class="shopping-list-text">This page is empty, add some books and proceed to order.</p>
        <picture>
            <source media="(min-width: 768px)" srcset="
                            ${book322_1} 1x,
                            ${book322_2} 2x
                            " type="image/webp" />
            <source media="(min-width: 768px)" srcset="
                            ${book322_11} 1x,
                            ${book322_22} 2x
                            " type="image/png" />

            <source media="(max-width: 767px)" srcset="
                            ${book265_1} 1x,
                            ${book265_2} 2x
                            " type="image/webp" />
            <source media="(max-width: 767px)" srcset="
                            ${book265_11} 1x,
                            ${book265_22} 2x
                            " type="image/png" />

            <img class="shopping-list-image" src="${book265_1}" alt="Books" loading="lazy" />
        </picture>
    `;
}
