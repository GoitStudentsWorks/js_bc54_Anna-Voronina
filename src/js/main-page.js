import book322_1 from '../images/shopping/books_322_@1.webp';
import book322_2 from '../images/shopping/books_322_@2.webp';
import book322_11 from '../images/shopping/books_322_@1.png';
import book322_22 from '../images/shopping/books_322_@2.png';
import book265_1 from '../images/shopping/books_265_@1.webp';
import book265_2 from '../images/shopping/books_265_@2.webp';
import book265_11 from '../images/shopping/books_265_@1.png';
import book265_22 from '../images/shopping/books_265_@2.png';

import { SwaggerAPI } from './swagger-api.js';
import { Notify } from 'notiflix';
import createBook from './templates/create-book.js';
import addListener from './modal-window.js';

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

      if (topBooks.length === 0) {
        Notify.failure('There are no best sellers books in this category');
        return;
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
    Notify.failure('Something went wrong. Please, try later.');
  }
  addListener();
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

    if (data.length === 0) {
      booksContainer.innerHTML = emptySeeMoreBooksMarkup();
      return;
    }

    title.innerHTML = divideTitleElements(name);
    booksContainer.classList.add('category-list-click');
    booksContainer.innerHTML = createBook(data);
    addActiveClassToCategoryListItem(name);
    addListener();
  } catch (error) {
    Notify.failure('Something went wrong. Please, try later.');
  }
}

function divideTitleElements(categoryName) {
  const words = categoryName.split(' ');
  const lastWord = words[words.length - 1];
  const otherWords = words.slice(0, words.length - 1).join(' ');

  return `<span class="home-title-decor">${otherWords} </span>${lastWord}`;
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

function emptySeeMoreBooksMarkup() {
  return `
    <p class="shopping-list-text">Sorry. Could not find books of this category.</p>
        <picture>
            <source media="(min-width: 768px)" srcset="
                            ${book322_1} 1x,
                            ${book322_2} 2x
                            " type="image/webp" />
            <source media="(min-width: 768px)" srcset="
                            ${book322_11} 1x,
                            ${book322_22} 2x
                            " type="image/png" />

            <source media="(max-width: 767px)" srcset="
                            ${book265_1} 1x,
                            ${book265_2} 2x
                            " type="image/webp" />
            <source media="(max-width: 767px)" srcset="
                            ${book265_11} 1x,
                            ${book265_22} 2x
                            " type="image/png" />

            <img class="shopping-list-image" src="${book265_1}" alt="Books" loading="lazy" />
        </picture>
    `;
}
