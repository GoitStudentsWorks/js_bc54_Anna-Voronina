import Storage from './local-storage';
import getShoppingCartMarkup from './shopping-cart';

import { SwaggerAPI } from './swagger-api.js';
//643282b1e85766588626a080
//643282b2e85766588626a0e2

const booksApi = new SwaggerAPI();


const listContainer = document.querySelector('.js-shopping-list')

const bookStorage = Storage.load('bookList')

const shopContainer = async () => {
    booksApi.bookId = "643282b1e85766588626a080";
    const { data } = await booksApi.fetchBookById();
    Storage.addBookToStorage(data)


    if (bookStorage) {
        listContainer.innerHTML = `
        <ul class="shop-cart-list">
            ${getShoppingCartMarkup(bookStorage)}
        </ul>
        `
        const deleteCardItem = document.querySelectorAll('.shop-cart-btn');
        deleteCardItem.forEach(btn => {
            btn.addEventListener('click', e => {
            if (e.target.nodeName === 'BUTTON' || e.target.nodeName === 'svg' || e.target.nodeName === 'use') {
                const deleteBookIndex = bookStorage.indexOf(bookStorage.find(book => book.title === e.currentTarget.dataset.title))
                if (deleteBookIndex < 0) {
                    return;
                }
                bookStorage.splice(deleteBookIndex, 1);
                Storage.save('bookList', bookStorage);
                e.target.closest('li').remove();
            }
            })
        })
    } 
} 
shopContainer()