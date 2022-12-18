import {
  getStorageItem, 
  setStorageItem, 
  formatPrice, 
  getElement
} from '../utils.js';
import { openCart } from './toggleCart.js';
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';

// select elements 
const cartItemCountDOM = getElement('.cart-item-count');
const cartItemsDOM = getElement('.cart-items');
const cartTotalDOM = getElement('.cart-total');
let cart = getStorageItem('cart');


(function init() {
  // display amount of cart items
  displayCartItemCount();
  // display total
  displayCartTotal();
  // add all cart items to the DOM
  displayCartItemsDOM();
  // setup cart functionality
  setupCartFunctionality();
})();

export const addToCart = (id) => {
  let item = cart.find((cartItem) => cartItem.id === id);
  if (!item) {
    let product = findProduct(id);
    // add item to the cart
    product = { ...product, amount: 1 };
    cart.push(product);
    // add item to the dom;
    addToCartDOM(product);
  } else {
    // update values
    const amount = updateAmount(id, 'increase');
    const items = [...cartItemsDOM.querySelectorAll('.cart-item-amount')];
    const newAmount = items.find((value) => value.dataset.id === id);
    newAmount.textContent = amount;
  }
  openCart();

  // add one to the item count
  displayCartItemCount();
  // display cart totals
  displayCartTotal();
  // set cart in local storage
  setStorageItem('cart', cart);
  // more stuff coming up
};

function displayCartItemCount(){
  const amount = cart.reduce((total, cartItem)=>{
    return total += cartItem.amount;
  }, 0);
  cartItemCountDOM.textContent = amount;
}
function displayCartTotal(){
  let total = cart.reduce((total, cartItem)=> {return total += cartItem.price * cartItem.amount}, 0);
  cartTotalDOM.textContent = `Total : ${formatPrice(total)}`;
}
function displayCartItemsDOM(){
  cart.forEach((cartItem) => {
    addToCartDOM(cartItem);
  });
}
function setupCartFunctionality(){
  cartItemsDOM.addEventListener('click', function(e)
  {
    const element = e.target;
    const parent = e.target.parentElement;
    const id = e.target.dataset.id;
    const parentID = parent.dataset.id;

    // remove 
    if(element.classList.contains('cart-item-remove-btn'))
    {
      removeItem(id);
      parent.parentElement.remove();
    }

    // increase
    if(parent.classList.contains('cart-item-increase-btn'))
    {
      const newAmount = updateAmount(parentID, 'increase');
      parent.nextElementSibling.textContent = newAmount;
    }

    // decrease
    if (parent.classList.contains('cart-item-decrease-btn'))
    {
      const newAmount = updateAmount(parentID, 'decrease');
      if (newAmount === 0) 
      {
        removeItem(parentID);
        parent.parentElement.parentElement.remove();
      }
      else
      {
        parent.previousElementSibling.textContent = newAmount;
      }
    }
    displayCartItemCount();
    displayCartTotal();
    setStorageItem('cart', cart);
  })
}
function updateAmount(id, value){
  let newAmount;
  cart = cart.map((cartItem) => 
  {
    if (cartItem.id === id) 
    {
      // increase
      if (value === 'increase') 
      newAmount = ++cartItem.amount;
      // decrease
      else if(value === 'decrease')
      newAmount = --cartItem.amount;
    }
    return cartItem;
  });
  return newAmount;
}
function removeItem(id){
  cart = cart.filter((cartItem) => cartItem.id !== id);
}


