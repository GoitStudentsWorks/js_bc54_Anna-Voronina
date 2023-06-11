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
  const supportCompany = document.createElement('div');
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

//       image.style.height = '32px';
// else {
//       link.textContent = fund.title;
//     }

// -------------------old var--------------------------

// const makeFondsList = ({ title, url, img }) => {
//   return `<a href="${url}">
//             <img
//               class="sup-company"
//               style="height: 32px"
//               src="${img}"
//               alt="${title}"
//             />
//           </a>`;
// };

// const makeFondsArr = supUkrFonds.map(fondData => {
//   return makeFondsList(fondData);
// });

// <div class="support-company">
//   <p class="sup-comp-numb">06</p>
//   <!-- <a href=""><img style="height: 32px" src="" alt="" /></a> -->
// </div>
