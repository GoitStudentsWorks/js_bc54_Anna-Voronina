import { supUkrFonds } from './aside-support-fonds';

// -----------VERTICAL SCROLL---------------
const supUkrBtn = document.querySelector('.sup-ukr-scroll-btn');
const modalContent = document.querySelector('.sup-content-wrp');

const supUkrScroll = () => {
  modalContent.scrollTop = modalContent.scrollHeight;
};

supUkrBtn.addEventListener('click', supUkrScroll);

// ------------RANDERING FONDS---------------

const supportCompaniesContainer = document.querySelector('.sup-content-wrp');

const supportCompanyElements = supUkrFonds.map((fund, index) => {
  const supportCompany = document.createElement('li');
  supportCompany.className = 'support-company';

  const supCompNumb = document.createElement('p');
  supCompNumb.className = 'sup-comp-numb';
  supCompNumb.textContent = (index + 1).toString().padStart(2, '0');

  supportCompany.appendChild(supCompNumb);

  if (fund.title && fund.url) {
    const link = document.createElement('a');
    link.href = fund.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    if (fund.img) {
      const image = document.createElement('img');
      image.className = 'sup-company-img';
      image.src = fund.img;
      image.alt = fund.title;

      link.appendChild(image);
    }

    supportCompany.appendChild(link);
  }

  return supportCompany;
});

supportCompanyElements.forEach(element => {
  supportCompaniesContainer.appendChild(element);
});

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
