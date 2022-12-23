import products from './data.js';

const list = document.getElementById('list');

function sortProducts(data) {
  let sorted = data.sort((a, b) => a.price - b.price);
  sorted.forEach((e) => console.log(`${e.product},${e.price}`));

  // display on UI
  sorted.map(
    (e) => (list.innerHTML += `<div><p>${e.product} $${e.price}</p></div>`)
  );
}

const listByCheapest = sortProducts(products);
console.log(listByCheapest);