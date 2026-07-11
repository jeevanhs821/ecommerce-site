const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 299.99,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 59.99,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 89.99,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 39.99,
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db"
  }
];

let cart = [];

function loadProducts() {
    const productList = document.getElementById("product-list");

    products.forEach(product => {
        const productEl = document.createElement("div");

        productEl.className = "product";

        productEl.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        `;

        productList.appendChild(productEl);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);

    cart.push(product);

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    const cartCount = document.getElementById("cart-count");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        const itemEl = document.createElement("div");

        itemEl.className = "cart-item";

        itemEl.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        `;

        cartItems.appendChild(itemEl);

        total += item.price;
    });

    totalPrice.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}

document
    .getElementById("checkout-btn")
    .addEventListener("click", () => {
        alert("Thank you for your purchase! This is a demo.");

        cart = [];

        updateCart();
    });

loadProducts();