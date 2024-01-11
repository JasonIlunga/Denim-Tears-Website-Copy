const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");

function addToCart(id) {
    // check if prodcut already exist in cart
    if (cart.some((item) => item.id === id)) {
      changeNumberOfUnits("plus", id);
    } else {
      const item = products.find((product) => product.id === id);
  
      cart.push({
        ...item,
        numberOfUnits: 1,
      });
    }
}

function updateCart() {
    renderCartItems();
    renderSubtotal();
  
    // save cart to local storage
    localStorage.setItem("CART", JSON.stringify(cart));
  }
  
  // calculate and render subtotal
  function renderSubtotal() {
    let totalPrice = 0,
      totalItems = 0;
  
    cart.forEach((item) => {
      totalPrice += item.price * item.numberOfUnits;
      totalItems += item.numberOfUnits;
    });
  
    subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
    totalItemsInCartEl.innerHTML = totalItems;
  }

  function renderProdcuts() {
    products.forEach((product) => {
      productsEl.innerHTML += `
              <div class="item">
                  <div class="item-container">
                      <div class="item-img">
                          <img src="${product.imgSrc}" alt="${product.name}">
                      </div>
                      <div class="desc">
                          <h2>${product.name}</h2>
                          <h2><small>$</small>${product.price}</h2>
                          <p>
                              ${product.description}
                          </p>
                      </div>
                      <div class="add-to-wishlist">
                          <img src="./icons/heart.png" alt="add to wish list">
                      </div>
                      <div class="add-to-cart" onclick="addToCart(${product.id})">
                          <img src="./icons/bag-plus.png" alt="add to cart">
                      </div>
                  </div>
              </div>
          `;
    });
  }