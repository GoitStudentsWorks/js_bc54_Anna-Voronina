export default function (bookColection) {
    const markup = bookColection.map(book => {
        const { title, list_name, description, author, book_image, amazon, apple, bookShop } = book;

        return `<li class="shop-cart-container">
            <div class="shop-cart-wrap">
                <div class="shop-image-wrapper">
                    <img class="shop-image" src="${book_image}" alt="${title}">
                </div>
                <div class="shop-cart-info">
                    <h2 class="shop-cart-title">${title}</h2>
                    <h3 class="shop-cart-category">${list_name}</h3>
                    <p class="shop-cart-description">${description.slice(0, 95) + '...'}</p>
                    <h4 class="shop-cart-author">${author}</h4>
                    <ul class="shop-cart-media">
                        <li class="shop-cart-media-item">
                            <a href="${amazon}" target="_blank" rel="noopener noreferrer"></a>
                                <picture>
                                    <!-- <source srcset="./images/modal-window/amazon.webp" type="image/webp" /> -->
                                    <source srcset="./images/shopping/amazon.png" type="image/png" />
                                    <img class="amazon-icon" src="./images/shopping/amazon.png" alt="Amazon logo" />
                                </picture>
                            </a>    
                        </li>
                        <li class="shop-cart-media-item">
                            <a href="${apple}" target="_blank" rel="noopener noreferrer">
                                <picture>
                                    <!-- <source srcset="./images/modal-window/amazon.webp" type="image/webp" /> -->
                                    <source srcset="./images/shopping/apple.png" type="image/png" />
                                    <img class="amazon-icon" src="./images/shopping/apple.png" alt="Apple book logo" />
                                </picture>
                            </a>
                        </li>
                        <li class="shop-cart-media-item">
                            <a href="${bookShop}" target="_blank" rel="noopener noreferrer">
                                <picture>
                                    <!-- <source srcset="./images/modal-window/amazon.webp" type="image/webp" /> -->
                                    <source srcset="./images/shopping/bookshop.png" type="image/png" />
                                    <img class="amazon-icon" src="./images/shopping/bookshop.png" alt="Book shop logo" />
                                </picture>
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