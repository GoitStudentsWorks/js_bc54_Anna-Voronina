import { SwaggerAPI } from './swagger-api';
import createCategoriesMarkup from './templates/create-categories';

const categoriesList = document.querySelector('.aside-list');
const categoriesTitle = document.querySelector('.aside-title')
const renderingCategories = document.querySelector('.main-content');

const swaggerCategoriesApi = new SwaggerAPI();

const createCategoriesItem = async () => {
  try {
    const { data } = await swaggerCategoriesApi.fetchBooksCategoryList();
    const searchCategory = data.map(category => {
      return `<a class="aside-link"><li class="aside-item">${category.list_name}</li></a>`;
    }).join('');
    categoriesList.innerHTML = searchCategory;
  } catch (error) {
    console.log(error);
  };
};
createCategoriesItem();


let activeCategoryLink = null;


//ф-я відображення книг
const onCategoriesLinkClick = event => {
  const value = event.target.textContent;
  swaggerCategoriesApi.categoryName = value;
  
   if (activeCategoryLink) {
    activeCategoryLink.classList.remove('active'); 
  };
  
  activeCategoryLink = event.target
  activeCategoryLink.classList.add('active'); 
  categoriesTitle.classList.remove('active');

  const createMarkupCategories = async () => {
    try {
      const { data } = await swaggerCategoriesApi.fetchBooksByCategory(value);
      console.log(data);

      const listName = data[0].list_name;
  
      const words = listName.split(' ');
      const halfIndex = words.length / 2;

      const firstHalf = words.slice(0, halfIndex).join(' ');
      const secondHalf = words.slice(halfIndex).join(' ');

      const decoratedListName = `${firstHalf} <span class="categories-title-decor">${secondHalf}</span>`;
      renderingCategories.innerHTML = `<h1 class="categories-title">${decoratedListName}</h1> <ul class="categories-item">${createCategoriesMarkup(
        data
      )}</ul>`;

    } catch (error) {
      console.log(error);
    };
  };
  createMarkupCategories()
}
categoriesList.addEventListener('click', onCategoriesLinkClick);
