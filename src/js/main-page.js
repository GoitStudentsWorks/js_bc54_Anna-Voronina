import { SwaggerAPI } from './swagger-api.js';
import createBook from './templates/create-book.js';

const booksContainer = document.querySelector('.category-list');

const topBooksAPI = new SwaggerAPI();

let bodyWidth = 0;

onload = event => {
  bodyWidth = event.target.body.clientWidth;
};

createBlock();

async function createBlock() {
  try {
    const { data } = await topBooksAPI.fetchTopBooks();

    console.log(data);

    for (let i = 0; i < 4; i++) {
      let topBooks = data[i].books;
      let markUpCount = 0;

      if (bodyWidth <= 767) {
        markUpCount = 1;
      }
      if (bodyWidth >= 768 && bodyWidth < 1440) {
        markUpCount = 3;
      }
      if (bodyWidth >= 1440) {
        markUpCount = 5;
      }

      const markup = `<li class="category-list-item">
        <p class="category-name">${topBooks[0].list_name}</p>
        <ul class="books-list">
          ${createBook(topBooks.slice(0, markUpCount))}
        </ul>
       <button class="category-list-button">see more</button>
       <svg>
       <use></use>
       </svg>
      </li>`;

      booksContainer.insertAdjacentHTML('beforeend', markup);
    }
  } catch (error) {
    console.log(error);
  }
}
