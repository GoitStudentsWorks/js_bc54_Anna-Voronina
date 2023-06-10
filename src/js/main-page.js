import { SwaggerAPI } from './swagger-api';

const booksContainer = document.querySelector('.category-list');

const topBooksAPI = new SwaggerAPI();

const paintBestSellerBooks = async () => {
  try {
    const { data } = await topBooksAPI.fetchTopBooks();

    for (let i = 0; i < 1; i++) {
      let topBooks = data[i].books;
      console.log(topBooks);

      booksContainer.innerHTML = createBook(topBooks);
    }
    // booksContainer.innerHTML = createBookCards(topBooks);
  } catch (err) {
    console.log(err);
  }
};

paintBestSellerBooks();

// function createBook(bookInfo) {
//   const markup = bookInfo
//     .map(book => {
//       const { book_image, description, title, author } = book;
//       return `<li class="category-list-item">
//                        <a class="book-link" href="">
//                           <img class="book-image" src="${book_image}" alt="${description}" />
//                            <div class="book-card-content">
//                             <h2 class="book-title">${title}</h2>
//                            <p class="book-author">${author}</p>
//                          </div>
//                       </a>
//                      </li>`;
//     })
//     .join('');
//   return markup;
// }

function createBook(bookInfo) {
  const markup = bookInfo
    .map(book => {
      const { book_image, description, title, author } = book;
      return `
                       <a class="book-link" href="">
                          <img class="book-image" src="${book_image}" alt="${description}" />
                           <div class="book-card-content">
                            <h2 class="book-title">${title}</h2>
                           <p class="book-author">${author}</p>
                         </div>
                      </a>
                     `;
    })
    .join('');
  return markup;
}
let bodyWidth = 0;

onload = event => {
  bodyWidth = event.target.body.clientWidth;
};

async function createBlock() {
  const { data } = await topBooksAPI.fetchTopBooks();
  console.log(data);

  if (bodyWidth >= 768) {
    console.log(5);
    return;
  }
  if (bodyWidth >= 375) {
    console.log(3);
    return;
  }
  for (let i = 0; i < 4; i++) {
    let topBooks = data[i].books;
    booksContainer.innerHTML = `<p class="category-name">${data[0].list_name}</p>
    <li>${createBook}</li>
    <button class="category-list-button">see more</button>`;
    console.log(topBooks);
  }

  console.log(1);
}

createBlock();
