import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = (store) => {
  const form = getElement('.input-form');
  const nameInput = getElement('.search-input');
  const productsContainer = getElement('.products-container');
  form.addEventListener('keyup', () => {
    const value = nameInput.value.toLowerCase();
    if (value) {
      const filteredProducts = store.filter((product) => {
        let { name } = product;
        name = name.toLowerCase();
        return name.startsWith(value);
      });
      display(filteredProducts, productsContainer, true);
      if (filteredProducts.length < 1) {
        productsContainer.innerHTML = `<h3 class="filter-error">Sorry, no products matched your search</h3>`;
      }
    } else {
      display(store, productsContainer, true);
    }
  });
};

export default setupSearch;
