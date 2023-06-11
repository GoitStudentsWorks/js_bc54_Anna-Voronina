import { SwaggerAPI } from './swagger-api.js';
import createBook from './templates/create-book.js';

const booksContainer = document.querySelector('.category-list');
const title = document.querySelector('.home-title');

const topBooksAPI = new SwaggerAPI();

let bodyWidth = 0;

onload = event => {
  bodyWidth = event.target.body.clientWidth;
};

createBlock();

async function createBlock() {
  try {
    const { data } = await topBooksAPI.fetchTopBooks();

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

      const markup = `<li class="category-list-item top-list-item">
        <p class="category-name" data-category-name="${
          topBooks[0].list_name
        }">${topBooks[0].list_name}</p>
        <ul class="books-list">
          ${createBook(topBooks.slice(0, markUpCount))}
        </ul>
       <button class="category-list-button">see more</button>  
      </li>`;

      booksContainer.insertAdjacentHTML('beforeend', markup);
      findBtn();
    }
  } catch (error) {
    console.log(error);
  }
}

function findBtn() {
  const seeMoreBtnEls = document.querySelectorAll('.category-list-button');

  seeMoreBtnEls.forEach(seeMoreBtn => {
    seeMoreBtn.addEventListener('click', onSeeMoreBtnClick);
  });
}

async function onSeeMoreBtnClick(event) {
  try {
    const name =
      event.target.previousElementSibling.previousElementSibling.textContent;

    topBooksAPI.categoryName = name;
    const { data } = await topBooksAPI.fetchBooksByCategory();

    title.innerHTML = divideTitleElements(name);
    booksContainer.classList.add('category-list-click');
    booksContainer.innerHTML = createBook(data);
    addActiveClassToCategoryListItem(name);
  } catch (error) {
    console.log(error);
  }
}

function divideTitleElements(categoryName) {
  const words = categoryName.split(' ');
  const halfIndex = words.length / 2;

  const firstHalf = words.slice(0, halfIndex).join(' ');
  const secondHalf = words.slice(halfIndex).join(' ');

  return `${firstHalf} <span class="home-title-decor">${secondHalf}</span>`;
}

function addActiveClassToCategoryListItem(name) {
  const asideCategoryItems = document.querySelectorAll('.aside-item');
  const allCategoriesTitle = document.querySelector('.aside-title');

  asideCategoryItems.forEach(asideCategoryItem => {
    if (name === asideCategoryItem.textContent) {
      allCategoriesTitle.classList.toggle('active');
      asideCategoryItem.classList.toggle('active');
    }
  });
}
