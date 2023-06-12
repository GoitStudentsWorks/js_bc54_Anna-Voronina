const modal = document.getElementById("mobile-menu-modal");
const openButton = document.querySelector(".js-open-menu-burger");
const closeButton = document.querySelector(".close-mobile-modal-btn");

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

function openModal() {
  modal.style.display = "block";
  openButton.classList.add("hidden");
  closeButton.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.style.display = "none";
  openButton.classList.remove("hidden");
  closeButton.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

window.addEventListener("DOMContentLoaded", function() {
  modal.style.display = "none";
  closeButton.classList.add("hidden");
});


