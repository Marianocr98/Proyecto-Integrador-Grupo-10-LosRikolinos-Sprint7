const addToShoppingCart = document.querySelectorAll('.addToCart')
console.log(addToShoppingCart);
addToShoppingCart.forEach(addToCartButton =>{
    addToCartButton.addEventListener('click',addToCartClicked)
})
function addToCartClicked(event){
    const button = event.target;
    console.log(button)
}