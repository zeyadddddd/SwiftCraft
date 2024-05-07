// Get the quantity control buttons and input
const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const quantityInput = document.querySelector('.quantity');

// Get the add to cart button
const addToCartButton = document.querySelector('.add-to-cart');

// Add event listeners to the quantity control buttons
plusButton.addEventListener('click', () => {
  quantityInput.value = parseInt(quantityInput.value) + 1;
});

minusButton.addEventListener('click', () => {
  if (parseInt(quantityInput.value) > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
});