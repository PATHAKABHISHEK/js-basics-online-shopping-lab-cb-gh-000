var cart = [];
var sum = 0 ;
var result = "In your cart, you have "
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
for(var i = 0; i < cart.length-1; i++){
  result  = `${result}${cart[i]['itemname']} at ${cart[i][itemprice]}. `
}
result = `${result}${cart[cart.length-1]['itemname']} at ${cart[cart.length][itemprice]}.`
return result
}

function total() {
  // write your code here
for(var j = 0; j < cart.length; j++){
  sum  = sum + cart[j]['itemprice']
}
return sum;
}

function removeFromCart(item) {
  // write your code here
for(var i = 0; i < cart.length ; i++){
if(item === cart[i]['itemname']){
  cart.splice(i,1);
return cart
}


}


return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here


}
