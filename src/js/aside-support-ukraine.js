import { supUkrFonds } from './aside-support-fonds';

// -----------VERTICAL SCROLL---------------
const supUkrBtn = document.querySelector('.sup-ukr-scroll-btn');
const modalContent = document.querySelector('.sup-content-wrp');

const supUkrScroll = () => {
  modalContent.scrollTop = modalContent.scrollHeight;
};

supUkrBtn.addEventListener('click', supUkrScroll);

// ------------RANDERING FONDS---------------

const ulElement = document.querySelector('.sup-content-wrp');

const listItems = supUkrFonds.map(
  (item, index) => `
  <li class="support-company">
    <p class="sup-comp-numb">${(index + 1).toString().padStart(2, '0')}</p>
    <a href="${item.url}" target="_blank" rel="noopener noreferrer">
      <picture>
        <source srcset="${item.imgWebp}" type="image/webp" />
        <source srcset="${item.img}" type="image/png" />
        <img class="sup-company-img" src="${item.img}" alt="${item.title}" />
      </picture>
    </a>
  </li>
`
);

ulElement.innerHTML = listItems.join('');
// -----------------Функція прокрутки вгору-----------------

const container = document.querySelector('.sup-content-wrp');
const scrollDownButton = document.querySelector('#scrollDownButton');
const scrollUpButton = document.querySelector('#scrollUpButton');

container.addEventListener('scroll', function () {
  if (container.scrollTop === container.scrollHeight - container.clientHeight) {
    scrollDownButton.style.display = 'none';
    scrollUpButton.style.display = 'block';
  } else {
    scrollDownButton.style.display = 'block';
    scrollUpButton.style.display = 'none';
  }
});

scrollUpButton.addEventListener('click', function () {
  container.scrollTop = 0;
});

scrollUpButton.style.display = 'none';
