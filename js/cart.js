/*
    cart-related functions used on all pages may be found in common.js
*/

function addToCart(item, count) {
	console.log("Adding " + count + " of " + item.name + " (ID: " + item.id + ") to cart");
	setCartItemCount(item.id, getCartItemCount(item.id) + parseInt(count));
}