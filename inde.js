const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const quantityInput = document.querySelector('.quantity');

const addToCartButton = document.querySelector('.add-to-cart');

plusButton.addEventListener('click', () => {
  quantityInput.value = parseInt(quantityInput.value) + 1;
});

minusButton.addEventListener('click', () => {
  if (parseInt(quantityInput.value) > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
});

// Add event listener to the add to cart button
addToCartButton.addEventListener('click', () => {
  const quantity = parseInt(quantityInput.value);
  console.log(`Added ${quantity} items to the cart.`);
});
