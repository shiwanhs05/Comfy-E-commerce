const allProductsUrl = 'https://course-api.com/javascript-store-products';

const singleProductUrl =
  'https://course-api.com/javascript-store-single-product'; 

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

const formatPrice = (price) => {
  let formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency', 
    currency: 'INR'
  }).format(price);
  // let formattedPrice = new Intl.NumberFormat('en-US', {
  //   style: 'currency', 
  //   currency: 'USD'
  // }).format((price/100).toFixed(2));
  return formattedPrice;
};

const getStorageItem = (name) => {
  let storageItem = localStorage.getItem(name);
  if(storageItem) {
    storageItem = JSON.parse(localStorage.getItem(name));
  }
  else storageItem = [];
  return storageItem;
};

const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
};
