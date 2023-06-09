import { SwaggerAPI } from './swagger-api';

const booksContainer = document.querySelector('.category-list');

const topBooksAPI = new SwaggerAPI();

const paintBestSellerBooks = async () => {
  try {
    const { data } = await topBooksAPI.fetchTopBooks();
    console.log(data);
    booksContainer.innerHTML = createBookCards(data);
  } catch (err) {
    console.log(err);
  }
};

paintBestSellerBooks();

function createBookCards(bookInfo) {
  const booksMarkup = bookInfo
    .map(book => {
      const info = book.books[0];

      return `<li class="category-list-item">
                <a class="book-link" href="">
                  <div class="book-thumb">
                    <img class="book-image" src="${info.book_image}" alt="${info.description}" />
                    <p class="book-overlay"></p>
                  </div>
                  <div class="book-card-content">
                    <h2 class="book-title">${info.title}</h2>
                    <p class="book-author">${info.author}</p>
                  </div>
                </a>
            </li>`;
    })
    .join('');

  return booksMarkup;
}
