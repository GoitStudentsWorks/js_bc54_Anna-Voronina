const ref = {
    homeBtnEl: document.querySelector('.js-header-home-btn'),
    shopBtnEl: document.querySelector('.js-header-shop-btn'),
}

const pathname = window.location.pathname;
console.log(pathname);
if (pathname === "/shopping-list.html") {
    ref.homeBtnEl.classList.toggle('current');
    ref.shopBtnEl.classList.toggle('current');
}