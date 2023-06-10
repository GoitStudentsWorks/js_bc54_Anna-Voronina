import { SwaggerAPI } from './swagger-api.js';
const swagger = new SwaggerAPI();

const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.modal-close-btn');
const modalShoppingBtn = document.querySelector('.modal-btn');
const modalInfo = document.querySelector('.modal-info');
const container = document.querySelector('.modal-book')

export default function onOpenModal() {
  const bookContainer = document.querySelectorAll('.book-link');

  bookContainer.forEach(book =>
    book.addEventListener('click', onOpenModalWindow)
  );
}

async function onOpenModalWindow(event) {
  event.preventDefault();

  document.body.style.overflow = 'hidden';

  backdrop.classList.toggle('is-hidden');
  closeBtn.addEventListener('click', onCloseModalWindow);
  modalShoppingBtn.addEventListener('click', onToggleShoppingList);
try{
    swagger.bookId = event.currentTarget.dataset.id;

    const response = await swagger.fetchBookById();
    createBookMarkup(response.data)
    console.log(response.data);
}

}

function onCloseModalWindow() {
  backdrop.classList.toggle('is-hidden');
  document.body.style.overflow = 'visible';
}

function onToggleShoppingList() {
  if (modalShoppingBtn.textContent === 'add to shopping list') {
    modalShoppingBtn.textContent = 'remove from the shopping list';
    modalInfo.style.display = "none";
  } else {
    modalShoppingBtn.textContent = 'add to shopping list';
    modalInfo.style.display = 'block';
  }
}

function  createBookMarkup(book){
const markup = `<img
class="modal-img"
src=${book.book_image}
alt="Book cover"
/>
<div class="modal-info-container">
<p class="modal-book-name">${book.title}</p>
<p class="modal-book-author">${book.author}</p>
<p class="modal-book-descr">${book.description}
</p>
<div class="modal-icons-container">
  <a href="${book.buy_links[0].url}" target="_blank" rel="noopener noreferrer"
    ><picture class="modal-icon">
      <source
        srcset="images/modal-window/amazon.webp"
        type="image/webp"
      />
      <source
        srcset="./images/modal-window/amazon.png"
        type="image/png"
      />
      <img
        src="./images/modal-window/amazon.png"
        alt="Amazon"
      /> </picture
  ></a>
  <a href="${book.buy_links[1].url}" target="_blank" rel="noopener noreferrer"
    ><picture class="modal-icon">
      <source
        srcset="./images/modal-window/open-book.webp"
        type="image/webp"
      />
      <source
        srcset="./images/modal-window/open-book.png"
        type="image/png"
      />
      <img
        src="./images/modal-window/open-book.png"
        alt="Apple Books"
      /> </picture
  ></a>
  <a href="${book.buy_links[2].url}" target="_blank" rel="noopener noreferrer"
    ><picture class="modal-icon">
      <source
        srcset="./images/modal-window/books.webp"
        type="image/webp"
      />
      <source
        srcset="./images/modal-window/books.png"
        type="image/png"
      />
      <img
        src="./images/modal-window/books.png"
        alt="Amazon"
      /></picture
  ></a>
</div>
</div>`
console.log(markup);
container.innerHTML = markup;
}