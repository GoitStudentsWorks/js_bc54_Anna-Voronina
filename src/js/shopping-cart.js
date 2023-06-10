import amazonImg from "../images/shopping/amazon.png";
import amazonWebp from "../images/shopping/amazon.webp"
import appleBook from "../images/shopping/apple.png";
import appleWebp from "../images/shopping/apple.webp"
import bookShopIcon from "../images/shopping/bookshop.png";
import bookShopWebp from "../images/shopping/bookshop.webp"
import sprite from "../images/sprite.svg"

let bodyWidth = 0;
onload = event => {
  bodyWidth = event.target.body.clientWidth;
};

export default function (bookColection) {
  const markup = bookColection
    .map(book => {
      let {
        title,
        list_name,
        description,
        author,
        book_image,
        amazon,
        apple,
        bookShop,
      } = book;
        description.length !== 0 
            ? description
            : description = "We are pleased to inform you that all information about this book you can found on partner resources (such as Amazon, etc.)"
    if (bodyWidth <= 767) {
        list_name = list_name.slice(0, 20) + "..."
        description = description.slice(0, 85) + "..."
    }
    if (bodyWidth >= 768 && bodyWidth < 1440) {
        description.length > 1 && description.length < 250
            ? description
            : description.slice(0, 250) + "..."
    }
      return `<li class="shop-cart-container">
            <div class="shop-cart-wrap">
                <div class="shop-image-wrapper">
                    <img class="shop-image" src="${book_image}" alt="${title}">
                </div>
                <div class="shop-cart-info">
                    <h2 class="shop-cart-title">${title}</h2>
                    <h3 class="shop-cart-category">${list_name}</h3>
                    <p class="shop-cart-description">${description}</p>
                    <div class="shop-cart-bottom-wrap">
                        <h4 class="shop-cart-author">${author}</h4>
                        <ul class="shop-cart-media">
                            <li class="shop-cart-media-item">
                                <a href="${amazon}" target="_blank" rel="noopener noreferrer">
                                    <picture>
                                        <source srcset="${amazonWebp}" type="image/webp" />
                                        <source srcset="${amazonImg}" type="image/png" />
                                        <img class="media-icon amazon-icon" src="${amazonImg}" alt="Amazon logo" />
                                    </picture>
                                </a>    
                            </li>
                            <li class="shop-cart-media-item">
                                <a href="${apple}" target="_blank" rel="noopener noreferrer">
                                    <picture>
                                        <source srcset="${appleWebp}" type="image/webp" />
                                        <source srcset="${appleBook}" type="image/png" />
                                        <img class="media-icon" src="${appleBook}" alt="Apple book logo" />
                                    </picture>
                                </a>
                            </li>
                            <li class="shop-cart-media-item">
                                <a href="${bookShop}" target="_blank" rel="noopener noreferrer">
                                    <picture>
                                        <source srcset="${bookShopWebp}" type="image/webp" /> 
                                        <source srcset="${bookShopIcon}" type="image/png" />
                                        <img class="media-icon" src="${bookShopIcon}" alt="Book shop logo" />
                                    </picture>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button class="shop-cart-btn" type="button" data-title="${title}">
                        <svg class="shop-cart-btn-trash">
                            <use href="${sprite}#trash"></use>
                        </svg>
                    </button>
                </div>
            </div>
          </div>
        </li>`;
    })
    .join('');
  return markup;
}
