import Storage from './local-storage';

const ref = {
  homeBtnEl: document.querySelector('.js-header-home-btn'),
  shopBtnEl: document.querySelector('.js-header-shop-btn'),
  burgerHomeBtnEl: document.querySelector('.js-burger-home-btn'),
  burgerShopBtnEl: document.querySelector('.js-burger-shop-btn'),
  signUpBtn: document.querySelector('.js-sign-up-btn'),
  logOutBtn: document.querySelector('.log-out-btn'),
  authModal: document.querySelector('.authorization-backdrop'),
  authModalCloseBtn: document.querySelector('.js-auth-modal-close'),
};

ref.signUpBtn.addEventListener('click', onSignUpBtnClick);
ref.authModalCloseBtn.addEventListener('click', onAuthModalCloseBtnClick);

// add 'current' class to current link
const pathname = window.location.pathname;
const currentPath = pathname.split('/').splice(-1).join(' ').trim();

if (currentPath === 'shopping-list.html') {
  ref.homeBtnEl.classList.toggle('current');
  ref.shopBtnEl.classList.toggle('current');
  ref.burgerHomeBtnEl.classList.toggle('current');
  ref.burgerShopBtnEl.classList.toggle('current');
}
//end of

// const storageBook = Storage.load('bookList');
// if (storageBook) {
//   countBook();
// }

function onSignUpBtnClick() {
  const hasUserId = Storage.load('userId');
  if (!hasUserId) {
    ref.authModal.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
  } else {
    ref.logOutBtn.classList.toggle('is-hidden');
  }
}

function onAuthModalCloseBtnClick() {
  ref.authModal.classList.add('is-hidden');
  document.body.style.overflow = 'auto';
}
