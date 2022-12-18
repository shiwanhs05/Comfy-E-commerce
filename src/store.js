import { getStorageItem, setStorageItem } from './utils.js';
let storeArr = getStorageItem('store');
const setupStore = (products) => {
  storeArr = products.map((product) => {
    const {
      id,
      fields: { featured, name, price, company, colors, image: img }
    } = product;
    const image = img[0].thumbnails.large.url;
    return {id, featured, name, price, company, colors, image};
  });
  setStorageItem('store', storeArr);
};
const findProduct = (id) => {
  let product = storeArr.find((product) => product.id === id);
  return product;
};

export { storeArr as store, setupStore, findProduct };
