let products = []

const handleCartList = () => {
  const list = products.map(li => `<li>
    <p class="product-name">${li.name}</p>
    <span class="product-count">X ${li.count}</span>
    <p class="product-price">$ ${li.price.toFixed(2)}</p>
  </li>`)
  
  document.getElementById("cartboy").innerHTML = products.length > 0 ? list.join("") : `<li></li>`;
}


const handleTotal = () => {
  const total = products.reduce((acc, cur) => acc += parseFloat(cur.price), 0)

  document.getElementById("cart-total").innerHTML = products.length > 0 ? `$ ${total.toFixed(2)}` : "Empty cart";
}

const handleProducts = (e) => {
  const product = {
    name: e.parentNode.querySelectorAll(".products-name") && e.parentNode.querySelectorAll(".products-name")[0].innerText,
    originalPrice: e.parentNode.querySelectorAll(".products-name") && parseFloat(e.parentNode.querySelectorAll(".products-price")[0].innerText.split("$ ")[1]),
    price: e.parentNode.querySelectorAll(".products-name") && parseFloat(e.parentNode.querySelectorAll(".products-price")[0].innerText.split("$ ")[1]),
    count: 1
  }

  const p0 = products.map(p => p.name === product.name ? ({ 
    ...p,
    count: p.count += 1,
    price: p.originalPrice * p.count
  }) : p)

  products = products.find(p => p.name === product.name) ? p0 : [ ...products, product ]
}

const addToCart = (e) => {
  handleProducts(e)
  handleCartList()
  handleTotal()
  alert("The item added to the cart")
}

const list = products.map(a => `<li>
<p class="product-name">${li.name}</p>
<span class="product-count">X ${li.count}</span>
<p class="product-price">$ ${li.price.toFixed(2)}</p>
</li>`)


const clearCart = () => {
  products = []
  handleCartList()
  handleTotal()
}

const toggleDisplayCart = () => {
  var cart = document.getElementById('cart') // Using a class instead, see note below.
  cart.classList.toggle('show-cart');
}



