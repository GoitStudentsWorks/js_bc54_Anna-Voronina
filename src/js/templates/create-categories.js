export default function createCategoriesMarkup(bookInfo) {

  const markup = bookInfo
    .map(book => {
      const { book_image, description, title, author } = book;

      return `

<li class="category-list-item">
<a class="book-link" href="">
<img class="book-image" src="${book_image}" alt="${description}" />
<div class="book-card-content">
<h2 class="book-title">${title}</h2>
<p class="book-author">${author}</p>
</div>
</a>
</li>`;
    })
    .join('');
  return markup;
}

