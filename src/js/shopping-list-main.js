import Storage from './local-storage';
import getShoppingCartMarkup from './shopping-cart';

import { SwaggerAPI } from './swagger-api.js';
//643282b1e85766588626a080
//643282b2e85766588626a0e2

const booksApi = new SwaggerAPI();


const listContainer = document.querySelector('.js-shopping-list')

const bookStorage = Storage.load('bookList')

const shopContainer = async () => {
    // booksApi.bookId = "643282b2e85766588626a0e2";
    // const { data } = await booksApi.fetchBookById();
    // Storage.addBookToStorage(data)

    if (bookStorage) {
        listContainer.innerHTML = `
        <ul>
            ${getShoppingCartMarkup(bookStorage)}
        </ul>
        `
    } 
} 
shopContainer()