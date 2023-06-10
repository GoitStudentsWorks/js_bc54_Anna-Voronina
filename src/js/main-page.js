import { SwaggerAPI } from './swagger-api';

const booksContainer = document.querySelector('.category-list');

let bodyWidth = 0;

onload = event => {
  bodyWidth = event.target.body.clientWidth;
};

const topBooksAPI = new SwaggerAPI();

function createBook(bookInfo) {
  const markup = bookInfo
    .map(book => {
      const { book_image, description, title, author } = book;
      return `<li class="category-list-item">
                       <a class="book-link" href="">
                          <img class="book-image" src="${book_image}" alt="${description}" />
                           <div class="book-card-content">
                            <h2 class="book-title">${title}</h2>
                           <p class="book-author">${author}</p>
                         </div>
                      </a>
                     </li>`;
    })
    .join('');
  return markup;
}


async function createBlock() {
  const { data } = await topBooksAPI.fetchTopBooks();
  
  for (let i = 0; i < 4; i++) {
    let topBooks = data[i].books;
    let markup = null;
    let markUpCount = 0;

    if (bodyWidth <= 375) {
      markUpCount = 1;
    }
    if (bodyWidth > 375 && bodyWidth < 768) {
      markUpCount = 3;
    }
    if (bodyWidth >= 768) {
      markUpCount = 5;
    }
    markup = `<li>
        <p class="category-name">${topBooks[0].list_name}</p>
        <ul>
          ${createBook(topBooks.slice(0, markUpCount))}
        </ul>
       <button class="category-list-button">see more</button>
      </li>`;

    booksContainer.insertAdjacentHTML('beforeend', markup);
  }
}

createBlock();
