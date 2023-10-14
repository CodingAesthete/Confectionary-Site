let shop = document.querySelector('#shop');

let shopItemsData = [
  {
    id: 100,
    name: 'Birthday Miracle',
    price: 35,
    quantity: 0,
    desc: "A birthday cake is like a slice of happiness on a plate! It's a sweet treat designed to celebrate someone's day with a burst of flavor and fun.",
    img: "images/birthday.avif"
  },
  {
    id: 101,
    name: 'Forest Freshness',
    price: 30,
    quantity: 0,
    desc: "it's like a fruity fiesta in your mouth! Each bite is an explosion of juicy, tangy, and slightly sweet flavors that dance on your taste buds.",
    img: "images/strawberries.avif"
  },
  {
    id: 102,
    name: 'Aesthetica',
    price: 40,
    quantity: 0,
    desc: "It's a slice of pure indulgence, the ultimate treat-yourself moment. Rich chocolate oozes from every bite, and you can't help but smile.",
    img: "images/miracle.avif"
  },
  {
    id: 103,
    name: 'Summer Party',
    price: 50,
    quantity: 0,
    desc: "Imagine fluffy layers adorned with the colors of a summer garden. It's a dessert that dances with the flavors of lazy days and breezy nights.",
    img: "images/stocke.avif"
  },
  {
    id: 104,
    name: 'Sweet Garden',
    price: 40,
    quantity: 0,
    desc: "A cake adorned with flowers is like a slice of edible artistry. It's a confection that blooms with elegance and charm, just like a beautiful garden.",
    img: "images/flowers.avif"
  }
];

let generateShop = () => {
  shop.innerHTML = shopItemsData.map((x) => {
    return `
  <div id =product-item-${x.id} class="item">
        <div class="img-box">
          <img src="${x.img}" alt="Aesthetica Cake">
        </div>
        <div class="details">
          <div class="cake-name">${x.name}</div>
          <div class="description">${x.desc}</div>
          <div class="customer-info">
            <div class="price">$ ${x.price}</div>
            <div class="buttons">
              <div class="bi bi-dash-circle"></div>
              <div class="quantity">0</div>
              <div class="bi bi-plus-circle"></div>
            </div>
          </div>
        </div>
      </div>
  `}).join(' ')
};

generateShop();