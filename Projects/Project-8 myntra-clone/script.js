const products = [
  {
    id: 1,
    brand: "Nike",
    title: "Men's Air Max Running Shoes",
    price: 5999,
    originalPrice: 7999,
    discount: 25,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-mens-shoes-KkLcGR.png",
    badge: "BESTSELLER"
  },
  {
    id: 2,
    brand: "Adidas",
    title: "Women's Essential T-Shirt",
    price: 899,
    originalPrice: 1299,
    discount: 31,
    image: "https://essa.in/cdn/shop/files/ladiescasualrns8131pink_1.jpg?v=1697628094",
    badge: "NEW"
  },
  {
    id: 3,
    brand: "Puma",
    title: "Men's Solid Regular Fit T-Shirt",
    price: 799,
    originalPrice: 999,
    discount: 20,
    image: "https://m.media-amazon.com/images/I/61cTDbLLyML._UY1100_.jpg",
    badge: "LIMITED"
  },
  {
    id: 4,
    brand: "Levi's",
    title: "Men's 511 Slim Fit Jeans",
    price: 2499,
    originalPrice: 3999,
    discount: 38,
    image: "https://levi.in/cdn/shop/files/182981482_01_Front_4b14f5bd-3c6a-4603-acda-096c5675d825.jpg?v=1740488440",
    badge: "HOT DEAL"
  },
  {
    id: 5,
    brand: "H&M",
    title: "Women's Floral Print Dress",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    image: "data:image/jpeg;base64,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",
    badge: "TRENDING"
  },
  {
    id: 6,
    brand: "Zara",
    title: "Men's Slim Fit Blazer",
    price: 3999,
    originalPrice: 4999,
    discount: 20,
    image: "data:image/jpeg;base64,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",
    badge: "PREMIUM"
  },
  {
    id: 7,
    brand: "Allen Solly",
    title: "Women's Formal Shirt",
    price: 999,
    originalPrice: 1499,
    discount: 33,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    badge: "OFFICE"
  },
  {
    id: 8,
    brand: "Roadster",
    title: "Men's Casual Shirt",
    price: 699,
    originalPrice: 999,
    discount: 30,
    image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
    badge: "CASUAL"
  }
];

// Cart functionality
const productsGrid = document.getElementById('products-grid');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartBtn = document.getElementById('close-cart'); // Only declared once
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const overlay = document.getElementById('overlay');
const cartIcon = document.querySelector('.cart-icon');
const cartCount = document.querySelector('.cart-count');
const continueShopping = document.getElementById('continue-shopping');
const subtotalElement = document.getElementById('subtotal');
const totalElement = document.getElementById('total');
const checkoutBtn = document.querySelector('.checkout-btn');
const checkoutModal = document.getElementById('checkout-modal');
const orderSummary = document.getElementById('order-summary');
const closeModal = document.querySelector('.close-modal');
const modalContinue = document.getElementById('modal-continue');

let cart = [];


// Render products
function renderProducts() {
  productsGrid.innerHTML = '';
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
                    ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                    <div class="product-info">
                        <div class="product-brand">${product.brand}</div>
                        <div class="product-title">${product.title}</div>
                        <div class="product-price">
                            <span class="current-price">₹${product.price}</span>
                            <span class="original-price">₹${product.originalPrice}</span>
                            <span class="discount">${product.discount}% OFF</span>
                        </div>
                        <button class="add-to-cart" data-id="${product.id}">ADD TO CART</button>
                    </div>
                `;
    productsGrid.appendChild(productCard);
  });

  // Add event listeners to add to cart buttons
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
  });
}

// Add to cart function
function addToCart(e) {
  const productId = parseInt(e.target.getAttribute('data-id'));
  const product = products.find(p => p.id === productId);

  // Check if product is already in cart
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  updateCart();
  openCart();
}

// Update cart function
function updateCart() {
  // Update cart count
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = totalItems;

  // Update cart items
  if (cart.length === 0) {
    cartItems.innerHTML = `
                    <div class="cart-empty">
                        <p>Hey, it feels so light!</p>
                        <p>There is nothing in your bag. Let's add some items.</p>
                        <button class="continue-shopping" id="continue-shopping">CONTINUE SHOPPING</button>
                    </div>
                `;
    cartTotal.style.display = 'none';

    // Add event listener to continue shopping button
    document.getElementById('continue-shopping').addEventListener('click', closeCart);
  } else {
    cartItems.innerHTML = '';
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
                        <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                        <div class="cart-item-details">
                            <div class="cart-item-brand">${item.brand}</div>
                            <div class="cart-item-title">${item.title}</div>
                            <div class="cart-item-price">₹${item.price}</div>
                            <div class="cart-item-actions">
                                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                                <span class="quantity">${item.quantity}</span>
                                <button class="quantity-btn plus" data-id="${item.id}">+</button>
                                <span class="remove-item" data-id="${item.id}">REMOVE</span>
                            </div>
                        </div>
                    `;
      cartItems.appendChild(cartItem);
    });

    // Calculate subtotal and total
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    subtotalElement.textContent = `₹${subtotal}`;
    totalElement.textContent = `₹${subtotal}`;
    cartTotal.style.display = 'block';

    // Add event listeners to quantity buttons
    document.querySelectorAll('.minus').forEach(button => {
      button.addEventListener('click', decreaseQuantity);
    });

    document.querySelectorAll('.plus').forEach(button => {
      button.addEventListener('click', increaseQuantity);
    });

    document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', removeItem);
    });
  }
}

// Quantity functions
function decreaseQuantity(e) {
  const productId = parseInt(e.target.getAttribute('data-id'));
  const item = cart.find(item => item.id === productId);

  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    cart = cart.filter(item => item.id !== productId);
  }

  updateCart();
}

function increaseQuantity(e) {
  const productId = parseInt(e.target.getAttribute('data-id'));
  const item = cart.find(item => item.id === productId);
  item.quantity += 1;
  updateCart();
}

function removeItem(e) {
  const productId = parseInt(e.target.getAttribute('data-id'));
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}

// Cart open/close functions
function openCart() {
  cartSidebar.classList.add('open');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartSidebar.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Event listeners
cartIcon.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);
continueShopping.addEventListener('click', closeCart);

// Initialize the page
renderProducts();

// Show checkout confirmation modal
function showCheckoutModal() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Build order summary
    let summaryHTML = '';
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    cart.forEach(item => {
        summaryHTML += `
            <div class="order-item">
                <span>${item.brand} ${item.title} (${item.quantity}x)</span>
                <span>₹${item.price * item.quantity}</span>
            </div>
        `;
    });
    
    summaryHTML += `
        <div class="order-item" style="margin-top: 15px; font-weight: bold;">
            <span>Total</span>
            <span>₹${subtotal}</span>
        </div>
    `;
    
    orderSummary.innerHTML = summaryHTML;
    checkoutModal.style.display = 'block';
}

// Close checkout modal
function closeCheckoutModal() {
    checkoutModal.style.display = 'none';
}

// Complete checkout process
function completeCheckout() {
    // In a real app, you would send this data to your backend
    console.log('Order completed:', cart);
    
    // Clear the cart
    cart = [];
    updateCart();
    closeCheckoutModal();
    closeCart();
    
    // Show confirmation (optional)
    alert('Your order has been placed successfully!');
}

// Event listeners for checkout
checkoutBtn.addEventListener('click', showCheckoutModal);
closeModal.addEventListener('click', closeCheckoutModal);
modalContinue.addEventListener('click', completeCheckout);

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === checkoutModal) {
        closeCheckoutModal();
    }
});