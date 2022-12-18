# Comfy

[Click to view](https://comfy-e-commerce-project.netlify.app/)

## A furniture company's e-commerce website build with Vanilla Javascript

### Home 
- Navbar features sidebar toggle button(small screen), links, company-logo, cart toggle button. (Navbar is same for all pages)
- Hero features company moto and 'show now' button redirecting to products page
- Featured products contains few product cards.When hovered on, search button and cart button will be displayed. Search button clicked will open up the specific product page (product.html) with the details of that single product. Cart button clicked will add to the cart and open up the cart overlay.
- Store is setup in the local storage.
---------------

### Products
- Hero features Home/Products heading.
- Products is displayed with the help of local storage.
- There are three types of filters :-
  - Search input
  - Company
  - Price
---------------

### About
- Hero features Home/About heading.
- Displays about the company
---------------

#### Cart Functionality
- Item is added to the cart when 
  - cart icon on product cards (products.html, index.html) is clicked.
  - 'add to cart' button on product page (product.html) is clicked.
- When the cart button is clicked there may be two situations:
  - The product is not in the cart
    - In this case, the product will be added to the cart and (cart total amount, cart item count) will be updated.
  - The product is in the cart
    - In this case, the product count will be updated in the present DOM inside the cart and (cart total amount, cart item count) will be updated

### TECH STACK USED : HTML , CSS , JS 

