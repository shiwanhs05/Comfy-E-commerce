import { getElement } from '../utils.js';
import display from '../displayProducts.js';


const setupCompanies = (store) => {
  // const companies = store.reduce((companiesArr, product) => {
  //   const company = product.company;
  //   if(!companiesArr.includes(company)) companiesArr.push(company);
  //   return companiesArr;
  // }, ['all']);
  // console.log(companies);
  let companies = ['all', ...new Set(store.map((product) => product.company))];
  const companiesDOM  = getElement('.companies');
  // Display companies
  companiesDOM.innerHTML = companies.map(
    (company) => `<button class="company-btn">${company}</button>`
  ).join('');
  companiesDOM.addEventListener('click', (eventObj) => {
    const element = eventObj.target;
    if(element.classList.contains('company-btn')){
      let newStore = [];
      if(element.textContent === 'all')
      {
        newStore =  [...store];
      }
      else
      {
        newStore = store.filter((product)=>{
          return product.company === element.textContent;
        })
      }
      display(newStore, getElement('.products-container'), true);
    }
    
  })
};

export default setupCompanies;
