var viewCartButton = document.getElementsByClassName('view-cart')[0];
var shoppingCart = document.getElementsByClassName('shopping-cart')[0];
var products = document.getElementsByClassName('products')[0];
var clearButton = document.getElementsByClassName('clear-cart')[0];
var cartList = document.getElementsByClassName('cart-list')[0];
var cartTotal = document.getElementsByClassName('total')[0];

var cart = [];

viewCartButton.addEventListener('click', function(){
  shoppingCart.classList.toggle('show'); // uses toggle method to add/remove class
});

products.addEventListener('click', function (e) {
  // uses target to check e (event) and contains method to check if event has class
  if (e.target.classList.contains('add-to-cart')) {
    // uses closest method to traverse UP the DOM and "find" an element with the class of .item
    // conversely, the find method will traverse DOWN the DOM to "find" children
    var itemName = e.target.closest('.item') 
    .getAttribute('data-name');
    
    var itemPrice = e.target.closest('.item')
    .getAttribute('data-price')

    var product = {
      name: itemName,
      price: itemPrice,
    };

    cart.push(product);
    renderCart();
  }
});

clearButton.addEventListener('click', function () {
  cartList.innerHTML = '';
  cart = [];
  cartTotal.innerHTML = '0';
});



/* Output Format:
<div>ITEM_NAME - $ITEM_PRICE</div> */
var renderCart = function () {
  while (cartList.hasChildNodes()) {
    cartList.removeChild(cartList.firstChild);
  }

  var items = '';
  var total = 0;

  for (let i = 0; i < cart.length; i++) {
    items += '<div>' + cart[i].name + ' - $' + cart[i].price + '</div>';
    total += parseInt(cart[i].price);
  };

  cartList.innerHTML = items;
  cartTotal.innerHTML = total;
}

