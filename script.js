let shop = document.querySelector('#shop');

let basket = JSON.parse(localStorage.getItem('data')) || [];

let generateShop = () => {
  return shop.innerHTML = shopItemsData.map((x) => {
    let search = basket.find(y => y.id == x.id) || []
    return `
  <div id=product-id-${x.id} class="item">
        <div class="img-box">
          <img src="${x.img}" alt="Aesthetica Cake">
        </div>
        <div class="details">
          <div class="cake-name">${x.name}</div>
          <div class="description">${x.desc}</div>
          <div class="customer-info">
            <div class="price">$ ${x.price}</div>
            <div class="buttons">
              <div onclick="decrement(${x.id})" class="bi bi-dash-circle"></div>
              <div id=${x.id} class="quantity">${search.count == undefined ? 0 : search.count}</div>
              <div onclick="increment(${x.id})" class="bi bi-plus-circle"></div>
            </div>
          </div>
        </div>
      </div>
  `}).join(' ')
};

generateShop();

let increment = (id) => {
  let selected = id;
  let result = basket.find(x => x.id == id);

  if (result === undefined) {
    basket.push({
      id: selected,
      count: 1
    })
  }
  else {
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
  localStorage.setItem('data', JSON.stringify(basket))
  calculate();
}

let calculate = () => {
  totalCount = basket.map(x => x.count).reduce((a, b) => a + b, 0);
  document.querySelector('.cartAmount').innerHTML = totalCount;
}

calculate();