const cart_icon = document.querySelector(".cart-icon");
const cart = document.querySelector(".cart");
const cart_close = document.querySelector("#cart-close");

cart_icon.addEventListener("click", () => cart.classList.add("active"));
cart_close.addEventListener("click", () => cart.classList.remove("active"));

const addCartBUtton = document.querySelectorAll('.btn2');
addCartBUtton.forEach(button => {
    button.addEventListener("click", event => {
        const productBox = event.target.closest(".card");
        addToCart(productBox);
    });
});


const cartContent = document.querySelector(".cart-content");

const addToCart = productBox => {
    const productImgSrc = productBox.querySelector("img").src;
    const productTitle = productBox.querySelector(".title").textContent;
    const productPrice = productBox.querySelector(".amount").textContent;



    const cartItems = cartContent.querySelectorAll(".cart-product-title");
    for(let item of cartItems) {
        if (item.textContent === productTitle){
            alert("this item is already in the cart.");
            return;
        }
    }

    const cartBox = document.createElement("div");
    cartBox.classList.add("cart-box");
    cartBox.innerHTML=`
      <img src="${productImgSrc}" alt="img">
              <div class="cart-details">
                <h2 class="cart-product-title">${productTitle}</h2>
                <span class="cart-price">${productPrice}</span>
                <div class="cart-quantity">
                  <button id="decrement">-</button>
                <span class="number">1</span>
                  <button id="increment">+</button>
                </div>
              </div>
              <i class="fa-solid fa-trash cart-remove"></i>
    `;

    cartContent.appendChild(cartBox);

    // remove cart items 

    cartBox.querySelector(".cart-remove").addEventListener("click", () => {
          cartBox.remove();
         
          updateCartCount(-1);
          updateTotalPrice();
    });

    // increase decrease quantity 

   cartBox.querySelector(".cart-quantity").addEventListener("click", e => {
  const numberEle = cartBox.querySelector(".number");
  const decrementButton = cartBox.querySelector("#decrement");
  let quantity = parseInt(numberEle.textContent);

  if (e.target.id === "decrement" && quantity > 1) {
    quantity--;
  } else if (e.target.id === "increment") {
    quantity++;
  }

  // update quantity in UI
  numberEle.textContent = quantity;

  // style change (optional)
  decrementButton.style.color = quantity > 1 ? "#333" : "#999";

  updateTotalPrice();
});
updateCartCount(1);
updateTotalPrice();
};


// update total price 

const updateTotalPrice = () => {
    const totalPriceElement = document.querySelector(".total-price");
    const cartBoxes = cartContent.querySelectorAll(".cart-box");
    let total = 0;

    cartBoxes.forEach(cartBox => {
        const priceElement = cartBox.querySelector(".cart-price");
        const quantityElement = cartBox.querySelector(".number ");
        const price = priceElement.textContent.replace("$", "");
        const quantity = quantityElement.textContent;
        total += price * quantity;
    });
    totalPriceElement.textContent = `$${total}`;
}




// cart item count 
let cartItemCount = 0;
const cartItemBadge = document.querySelector(".cart_count");

// show 0 by default
cartItemBadge.style.visibility = "visible";
cartItemBadge.textContent = cartItemCount;

const updateCartCount = change => {
  cartItemCount += change;
  if (cartItemCount < 0) cartItemCount = 0;
  cartItemBadge.textContent = cartItemCount;
};


const buyNowButton = document.querySelector(".btn-buy");
buyNowButton.addEventListener("click" , () => {
    const cartBoxes = cartContent.querySelectorAll(".cart-box");
    if(cartBoxes.length === 0){
        alert("Your Cart is Empty");
        return;
    }

    cartBoxes.forEach(cartBox => cartBox.remove());

    cartItemCount = 0;
    updateCartCount(0);

    updateTotalPrice();

    alert("Thankyou for purchase");
})