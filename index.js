var cart = [];
var sum = 0 ;
function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
var item_object = {"itemName" : item, "itemPrice" : Math.floor((Math.random())*(100-1)+1)}
cart.push(item_object)
return item+" has been added to your cart."
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
for(var i = 0; i < cart.length; i++){
  sum += cart[i]['itemprice']

}
return sum;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
