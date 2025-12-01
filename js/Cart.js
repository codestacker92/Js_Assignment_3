
class Cart {
  constructor() {
    this.items = [];
    this.total = 0;
  }

  // methods
  addItem(item) {
    this.items.push(item);
    this.total += item.getPrice();
  } // addItem()
  
  getCartItemCount() {
    return this.items.length;
  } // getCartItemCount()
  
  displayItems() {
    // grab a ref to the items div
    let itemsDiv = document.querySelector('#items');
    itemsDiv.innerHTML = ''; // clear the div first!

    // cart header icon and count
    let header = document.createElement('div');
    header.id = 'cartHeader';

    let icon = document.createElement('span');
    icon.id = 'cartIcon';
    icon.innerHTML = '🛒';
    header.appendChild(icon);

    let countText = document.createElement('div');
    countText.id = 'cartCountText';
    countText.innerText = 'Items in Cart: '+ this.getCartItemCount();
    header.appendChild(countText);

    itemsDiv.appendChild(header);
    
    for(let i = 0; i < this.items.length; i++) {
      let row = document.createElement('div');
      row.classList.add('cartRow');
      
      // create name div
      let name = document.createElement('div');
      name.innerHTML = "<h2 class='name'>" + this.items[i].getName() + "</h2>";
      row.appendChild(name);
      
      // create price div
      let price = document.createElement('div');
      price.innerHTML = "<h2 class='price'>" + this.items[i].getPrice() + "</h2>";
      row.appendChild(price);
      itemsDiv.appendChild(row);
    } // for

    // finally add total div
    let totalDiv = document.createElement('div');
    totalDiv.innerHTML = '$' + this.total.toFixed(2);
    totalDiv.classList.add('totalPrice');
    itemsDiv.appendChild(totalDiv);

    let checkoutBtn = document.createElement('button');
    checkoutBtn.id = 'checkoutBtn';
    checkoutBtn.innerText = 'Proceed to Checkout';
    itemsDiv.appendChild(checkoutBtn);
  } // displayItems()
} // class