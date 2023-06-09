import { SwaggerAPI } from "./swagger-api";

const categoriesList = document.querySelector('.aside-list')

const swaggerCategoriesApi = new SwaggerAPI();


swaggerCategoriesApi.fetchBooksCategoryList()
  .then(({data}) => {
    const searchCategory = data.map(category => {
      return `<a class="aside-link"><li class="aside-item">${category.list_name}</li></a>`
    }).join("")
    console.log(searchCategory);
    categoriesList.innerHTML = searchCategory
}).catch((error) => {
  console.log(error);
})


//ф-я відображення книг
onCategoriesLinkClick = event => {
// console.log(event);
}

categoriesLink.addEventListener('click', onCategoriesLinkClick)