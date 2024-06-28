// Example JavaScript for cart functionality
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartItemsElement = document.querySelector('.cart-items');
  
    let cartItems = 0;
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        cartItems++;
        cartItemsElement.textContent = cartItems;
      });
    });
  });
  