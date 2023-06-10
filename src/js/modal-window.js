const container = document.querySelector('.category-list');
const book = document.querySelector('.category-list-item');
const modal = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.modal-close-btn');
const modalShoppingBtn = document.querySelector('.modal-btn');
const modalInfo = document.querySelector('.modal-info')

container.addEventListener('click', onOpenModalWindow);

function onOpenModalWindow(event){
    event.preventDefault()

if(event.target.nodeName !== 'IMG'){
    return
}

modal.classList.remove('is-hidden');
closeBtn.addEventListener('click', onCloseModalWindow);
modalShoppingBtn.addEventListener('click', onToggleShoppingList)

}

function onCloseModalWindow(){
    modal.classList.add('is-hidden');   
}

function onToggleShoppingList(){
   if(modalShoppingBtn.textContent === 'add to shopping list'){
    modalShoppingBtn.textContent = 'remove from the shopping list'
    modalInfo.classList.remove('is-hidden')
   } else{
    modalShoppingBtn.textContent = 'add to shopping list';
    modalInfo.classList.add('is-hidden')


   }

}