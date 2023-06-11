import localStorage from './local-storage.js'
import { SwaggerAPI } from './swagger-api.js';
const fetchAPI = new SwaggerAPI();

const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.modal-close-btn');
const modalShoppingBtn = document.querySelector('.modal-btn');
const modalInfo = document.querySelector('.modal-info');
const container = document.querySelector('.modal-book');
const a = [];

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

try{
    fetchAPI.bookId = event.currentTarget.dataset.id;
    const response = await fetchAPI.fetchBookById();
    createBookMarkup(response.data);
    createShoppingBtn(response.data);

    closeBtn.addEventListener('click', onCloseModalWindow)
    modalShoppingBtn.addEventListener('click', onToggleShoppingList);
} catch{err => console.log(err)}
}

function onCloseModalWindow() {
  backdrop.classList.toggle('is-hidden');
  document.body.style.overflow = 'visible';
}

function createShoppingBtn(book){
  console.log(book);
    const storage = localStorage.load();
    console.log(localStorage.load());
    storage.forEach(book => {if(bookId === book.id){
      modalShoppingBtn.textContent = 'remove from the shopping list'}
    })
}

function onToggleShoppingList() {
  const d = modalShoppingBtn.previousElementSibling

  const object = {
 name: d.querySelector('.modal-book-name').textContent,
 
};

a.push(object)
// console.log(a);
localStorage.save('bookList', a);


  // if (modalShoppingBtn.textContent === 'add to shopping list') {
  //   modalShoppingBtn.textContent = 'remove from the shopping list';
  //   modalInfo.style.display = "block";
  //   // addBookToStorage()
  // } else {
  //   modalShoppingBtn.textContent = 'add to shopping list';
  //   modalInfo.style.display = 'none';
  // }
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
<p class="modal-book-desc">${book.description}
</p>
<div class="modal-icons-container">
  <a href="${book.buy_links[0].url}" target="_blank" rel="noopener noreferrer"
    ><picture class="modal-icon">
      <source
        srcset="images/shopping/amazon.webp"
        type="image/webp"
      />
      <source
        srcset="images/shopping/amazon.png"
        type="image/png"
      />
      <img
        src="images/shopping/amazon.png"
        alt="Amazon"
      /> </picture
  ></a>
  <a href="${book.buy_links[1].url}" target="_blank" rel="noopener noreferrer"
    ><picture class="modal-icon">
      <source
        srcset="./images/shopping/apple.webp"
        type="image/webp"
      />
      <source
        srcset="./images/shopping/apple.png"
        type="image/png"
      />
      <img
        src="./images/shopping/apple.png"
        alt="Apple Books"
      /> </picture
  ></a>
  <a href="${book.buy_links[4].url}" target="_blank" rel="noopener noreferrer"
    ><picture class="modal-icon">
      <source
        srcset="../images/shopping/bookshop.webp"
        type="image/webp"
      />
      <source
        srcset="../images/shopping/bookshop.png"
        type="image/png"
      />
      <img
        src="../images/shopping/bookshop.png"
        alt="Bookshop"
      /></picture
  ></a>
</div>
</div>`
container.innerHTML = markup;
}