document
  .querySelector('.sup-ukr-scroll-btn')
  .addEventListener('click', function () {
    const modalContent = document.querySelector('.sup-content-wrp');
    modalContent.scrollTop = modalContent.scrollHeight;
  });
console.log(111);
