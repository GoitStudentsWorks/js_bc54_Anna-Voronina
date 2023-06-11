   const modal = document.getElementById("modal");
   const openButton = document.querySelector(".js-open-menu-hamburger");
   const closeButton = document.querySelector(".modal-btn");
   
   openButton.addEventListener("click", openModal);
   closeButton.addEventListener("click", closeModal);
   
   function openModal() {
     modal.style.display = "block";
     openButton.classList.add("hidden"); 
   }
   
   function closeModal() {
     modal.style.display = "none";
     openButton.classList.remove("hidden"); 
   }
   
   window.addEventListener("DOMContentLoaded", function() {
     modal.style.display = "none";
   });