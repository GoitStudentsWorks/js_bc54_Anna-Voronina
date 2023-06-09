import { SwaggerAPI } from './swagger-api';

const bookContainer = document.querySelector('.category-list');

const topBooksAPI = new SwaggerAPI();

topBooksAPI.fetchTopBooks().then(response => console.log(response.data));

// function createBookCards(bookInfo) {
//   const booksMarkup = booksInfo
//     .map(book => {
//       const {} = book;
//       return `<li class="category-list-item">
//                 <a class="book-link" href="">
//                   <div class="book-thumb">
//                     <img class="book-image" src="" alt="" />
//                     <p class="book-overlay"></p>
//                   </div>
//                   <div class="book-card-content">
//                     <h2 class="book-title"></h2>
//                     <p class="book-author"></p>
//                   </div>
//                 </a>
//             </li>;`;
//     })
//     .join('');

//   return booksMarkup;
// }
