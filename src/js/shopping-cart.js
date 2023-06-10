export default function (bookColection) {
    const markup = bookColection.map(book => {
        console.log(book);
        const { title, list_name, description, author, book_image, amazon, apple, bookShop } = book;

        return `<li>
            <div class="shop-cart-wrap">
            <img src="${book_image}" alt="${title}">
            <div class="shop-cart-info">
              <h2 class="shop-cart-title">${title}</h2>
              <h3 class="shop-cart-category">${list_name}</h3>
              <p class="shop-cart-description">${description}</p>
              <h4 class="shop-cart-author">${author}</h4>
              <ul class="shop-cart-media">
                <li class="shop-cart-media-item">
                    <a href="">
                        <img scr="${amazon}" alt="Amazon logo" />
                    </a>
                </li>
                <li class="shop-cart-media-item">
                    <a href="">
                        <img scr="${apple}" alt="Apple Book logo" />
                    </a>
                </li>
                <li class="shop-cart-media-item">
                    <a href="">
                        <img scr="${bookShop}" alt="Book Shop logo" />
                    </a>
                </li>
              </ul>
              <button class="shop-cart-btn" type="button">
                <svg class="shop-cart-btn-trash" width="16" height="16">
                    <use href="./sprite.svg#trash"></use>
                </svg>
              </button>
            </div>
          </div>
        </li>`
    }).join('')
    return markup;
}