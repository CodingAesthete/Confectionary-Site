let label = document.getElementById('label');
let shoppingCart = document.getElementById('shopping-cart');

let basket = JSON.parse(localStorage.getItem('data')) || [];

let calculate = () => {
  totalCount = basket.map(x => x.count).reduce((a, b) => a + b, 0);
  document.querySelector('.cartAmount').innerHTML = totalCount;
}

calculate();

let generateCartItems = () => {
  if (basket.length !== 0) {
    shoppingCart.innerHTML = basket.map((x) => {
      let search = shopItemsData.find(y => y.id == x.id);
      return `
        <div class="cart-item">
          <img src=${search.img} class="cart-image" />
          <div class="details2">

            <div class="title-price-x">
              <h4>
                <p class="item-name">${search.name}</p>
                <p class="item-price">$ ${search.price}</p>
              </h4>
            </div>
            <div class="exit-sign" onclick="removeItem(${search.id})">X</div>

            <div class="buttons cart-buttons">
              <div onclick="decrement(${x.id})" class="bi bi-dash-circle"></div>
              <div id=${x.id} class="quantity">${x.count}</div>
              <div onclick="increment(${x.id})" class="bi bi-plus-circle"></div>
            </div><div class="cart-buttons"></div>

            <h3 class="total-item-price">Total: <span class="num">$ ${x.count * search.price}</span></h3>

          </div>
        </div>
      `;
    }).join('');
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Your shopping cart is Empty.</h2>

    <a href="index.html">
      <button class="home-btn">
        Back to Home
      </button>
    </a>`;

  }
}

generateCartItems();

let increment = (id) => {
  let selected = id;
  let result = basket.find(x => x.id == id);

  if (result === undefined) {
    basket.push({
      id: selected,
      count: 1
    })
  } else {
    result.count += 1;
  }
  update(selected);
}

let decrement = (id) => {
  let selected = id;
  let result = basket.find(x => x.id == id);
  if (result === undefined) return;
  result.count -= 1;
  update(selected);
}

let update = (id) => {
  let result = basket.find(x => x.id == id);
  document.getElementById(id).innerHTML = result.count;
  basket = basket.filter(x => x.count !== 0);
  generateCartItems();
  localStorage.setItem('data', JSON.stringify(basket))
  calculate();
  totalAmount();
}

let removeItem = (id) => {
  let selectedItem = id;
  basket = basket.filter(x => x.id != selectedItem);
  localStorage.setItem('data', JSON.stringify(basket));
  calculate();
  generateCartItems();
  totalAmount();
}

let totalAmount = () => {
  if (basket.length != 0) {
    let amount = basket.map((x) => {
      let search = shopItemsData.find(y => y.id == x.id);
      return x.count * search.price;
    }).reduce((a, b) => a + b, 0);
    label.innerHTML = `
    <h2>Total Bill: $ ${amount}</h2>
    <button class="removeAll" onclick ="clearCart()">Clear Cart</button>
    `;
  }
  return;
}

totalAmount();

let clearCart = () => {
  basket = [];
  generateCartItems();
  localStorage.setItem('data', JSON.stringify(basket))
}