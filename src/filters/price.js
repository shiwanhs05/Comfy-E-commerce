import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const productsContainer = getElement('.products-container');
const setupPrice = (store) => {
  const priceInput = getElement('.price-filter');
  const priceValue = getElement('.price-value');
  let priceArr = store.map((product) => product.price);
  let maxPrice;
  maxPrice = Math.max(...priceArr);
  // for USD
  // maxPrice = Math.ceil(Math.max(...store.map((product)=> product.price)) /100);   

  // maxPrice = priceArr[0];
  // for(let i=1;i<priceArr.length;i++){
  //   if(maxPrice<priceArr[i]) maxPrice = priceArr[i];
  // }
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceInput.value = maxPrice;
  priceValue.textContent = `Value : ₹${maxPrice}`;
  // priceValue.textContent = `Value : $${maxPrice}`;
  priceInput.addEventListener('input', function () {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value : ₹${value}`;
    let newStore = store.filter((product) => {
      // for inr
      return product.price <= value;
      // for usd
      // return (product.price/100) <= value
    });
    display(newStore, productsContainer, true);
    if (newStore.length < 1) {
      productsContainer.innerHTML = `<h3 class="filter-error">Sorry, no products matched your search</h3>`;
    }
  });
};

export default setupPrice;
