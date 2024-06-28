document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-btn');
  
    // Function to retrieve cart items from localStorage
    function getCartItems() {
      return JSON.parse(localStorage.getItem('cart')) || [];
    }
  
    // Function to update cart items in the DOM
    function updateCart() {
      cartItemsContainer.innerHTML = ''; // Clear existing items
  
      let cartItems = getCartItems();
      let totalPrice = 0;
  
      cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
  
        cartItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div class="item-details">
            <h3>${item.name}</h3>
            <p class="item-price">$${item.price.toFixed(2)}</p>
          </div>
          <button class="remove-from-cart-btn">Remove</button>
        `;
  
        // Add event listener to remove item from cart
        const removeButton = cartItem.querySelector('.remove-from-cart-btn');
        removeButton.addEventListener('click', () => {
          removeFromCart(item.id);
        });
  
        cartItemsContainer.appendChild(cartItem);
        totalPrice += item.price;
      });
  
      cartTotalElement.textContent = totalPrice.toFixed(2);
    }
  
    // Function to add item to cart
    function addToCart(item) {
      let cartItems = getCartItems();
      cartItems.push(item);
      localStorage.setItem('cart', JSON.stringify(cartItems));
      updateCart();
    }
  
    // Function to remove item from cart
    function removeFromCart(itemId) {
      let cartItems = getCartItems();
      cartItems = cartItems.filter(item => item.id !== itemId);
      localStorage.setItem('cart', JSON.stringify(cartItems));
      updateCart();
    }
  
    // Event listener for "Add to Cart" buttons on product cards
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const productId = productCard.getAttribute('data-id');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('.price').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').getAttribute('src');
  
        const item = {
          id: productId,
          name: productName,
          price: productPrice,
          image: productImage
        };
  
        addToCart(item);
      });
    });
  
    // Initialize cart on page load
    updateCart();
  
    // Event listener for checkout button
    checkoutButton.addEventListener('click', () => {
      alert('Implement your checkout process here.');
      // Add your checkout logic here (e.g., redirect to a checkout page)
    });
  });
  