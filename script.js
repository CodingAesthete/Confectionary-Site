let shop = document.querySelector('#shop');

let basket = JSON.parse(localStorage.getItem('data')) || [];

let shopItemsData = [
  {
    id: 100,
    name: 'Birthday Miracle',
    price: 35,
    desc: "A birthday cake is like a slice of happiness on a plate! It's a sweet treat designed to celebrate someone's day with a burst of flavor and fun.",
    img: "images/birthday.avif"
  },
  {
    id: 101,
    name: 'Forest Freshness',
    price: 30,
    desc: "it's like a fruity fiesta in your mouth! Each bite is an explosion of juicy, tangy, and slightly sweet flavors that dance on your taste buds.",
    img: "images/strawberries.avif"
  },
  {
    id: 102,
    name: 'Aesthetica',
    price: 40,
    desc: "It's a slice of pure indulgence, the ultimate treat-yourself moment. Rich chocolate oozes from every bite, and you can't help but smile.",
    img: "images/miracle.avif"
  },
  {
    id: 103,
    name: 'Summer Party',
    price: 50,
    desc: "Imagine fluffy layers adorned with the colors of a summer garden. It's a dessert that dances with the flavors of lazy days and breezy nights.",
    img: "images/stocke.avif"
  },
  {
    id: 104,
    name: 'Sweet Garden',
    price: 40,
    desc: "A cake adorned with flowers is like a slice of edible artistry. It's a confection that blooms with elegance and charm, just like a beautiful garden.",
    img: "images/flowers.avif"
  }
];

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
  if (result === undefined || result.count == 0) return;
  result.count -= 1;
  update(selected);
}

let update = (id) => {
  let result = basket.find(x => x.id == id);
  document.getElementById(id).innerHTML = result.count;
  localStorage.setItem('data', JSON.stringify(basket))
  calculate();
}

let calculate = () => {
  totalCount = basket.map(x => x.count).reduce((a, b) => a + b, 0);
  document.querySelector('.cartAmount').innerHTML = totalCount;
  console.log(basket);
}

calculate();