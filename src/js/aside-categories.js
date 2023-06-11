import { SwaggerAPI } from './swagger-api';
import createCategoriesMarkup from './templates/create-categories';

const categoriesList = document.querySelector('.aside-list');
const renderingCategories = document.querySelector('.main-content');
console.log(categoriesList);



const swaggerCategoriesApi = new SwaggerAPI();

swaggerCategoriesApi
  .fetchBooksCategoryList()
  .then(({ data }) => {
   

    const searchCategory = data
      .map(category => {
        return `<a class="aside-link"><li class="aside-item">${category.list_name}</li></a>`;
      })
      .join('');
    categoriesList.innerHTML = searchCategory;
     
  })
  .catch(error => {
    console.log(error);
  });

//ф-я відображення книг
const onCategoriesLinkClick = event => {
  const value = event.target.textContent;
  swaggerCategoriesApi.categoryName = value;
  

  swaggerCategoriesApi
    .fetchBooksByCategory(value)
    .then(({ data }) => {
   
      const listName = data[0].list_name;

      const words = listName.split(' ');
      const halfIndex = words.length / 2;

      const firstHalf = words.slice(0, halfIndex).join(' ');
      const secondHalf = words.slice(halfIndex).join(' ');

      const decoratedListName = `${firstHalf} <span class="categories-title-decor">${secondHalf}</span>`;
      renderingCategories.innerHTML = `<h1 class="categories-title">${decoratedListName}</h1> <ul class="categories-item">${createCategoriesMarkup(
        data
      )}</ul>`;

    })
    .catch(error => {
      console.log(error);
    });
};

categoriesList.addEventListener('click', onCategoriesLinkClick);
