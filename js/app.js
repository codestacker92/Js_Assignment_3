
let cart = new Cart(); // empty cart
let productsDiv = document.querySelector('#products');
let categorySelect = document.querySelector('#categorySelect');

let products = [
  // fashion items
  // name,  price, image
  ['Shoes', 69.99, 'assets/images/shoes.png', 'fashion'],
  ['Pants', 99.99, 'assets/images/pants.png', 'fashion'],
  ['Shirt', 49.99, 'assets/images/shirt.png', 'fashion'],
  ['Hat', 29.99, 'assets/images/hat.png', 'fashion'],

  // electronics items
  // name, price, image
  ['iphone 16 promax', 1799.99, 'assets/images/iphone16promax.png', 'electronics'],
  ['iphone 16', 999.99, 'assets/images/iphone16.png', 'electronics'],
  ['Samsung Tv 65" 4k', 899.99, 'assets/images/samsungtv.png', 'electronics'],
  ['Lg Tv 50" 4k', 699.99, 'assets/images/lgtv.png', 'electronics']
];

function buildProductsCards(category) {
  productsDiv.innerHTML = ''; // clear products div
  // populate the productsList
for(let i = 0; i < products.length; i++) {
  if (products[i][3] === category) {
    // create a product card
  let card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('id', i);
  // creates our product image
  let img = document.createElement('img');
  img.classList.add('productImage');
  img.src = products[i][2];
  img.alt = products[i][0];
  card.appendChild(img);

  // creates the name for our product in an h2
  let name = document.createElement('h2');
  name.innerText = products[i][0];
  card.appendChild(name);
  
  // creates the price for our product in an h3
  let price = document.createElement('h3');
  price.innerText = '$' + products[i][1].toFixed(2);
  card.appendChild(price);

  // create an add to cart button
  let btn = document.createElement('button');
  btn.innerText = 'Add to Cart';
  btn.classList.add('cartbutton');
  btn.setAttribute('onclick', 'addItem(' + i + ')');
  card.appendChild(btn);

  // finally add the card(with everything inside)
  productsDiv.appendChild(card);
    }
  }
} // row for

function addItem(idx) {
  // create a new item based on product selection
  let item = new Item(
    products[idx][0], products[idx][1], products[idx][2]);

  // add that item to our cart
  cart.addItem(item);

  // finally display our cart details
  cart.displayItems();  
} // addProduct()

function categoryChanged() {
  let selectedCategory = categorySelect.value;
  buildProductsCards(selectedCategory);
}

window.addEventListener('load', function() {
  buildProductsCards(categorySelect.value);
  cart.displayItems();
})