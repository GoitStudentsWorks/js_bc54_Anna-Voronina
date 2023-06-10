

const a = document.querySelector('.books-list-item');
console.log(a);




const container = document.querySelector('.category-list');
const modal = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.modal-close-btn');
const modalShoppingBtn = document.querySelector('.modal-btn');
const modalInfo = document.querySelector('.modal-info')

container.addEventListener('click', onOpenModalWindow);

function onOpenModalWindow(event){
    event.preventDefault()
console.log(event.target);
console.log(event.currentTarget);
const evt = event.target.nodeName;
if(evt !== 'IMG'){
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