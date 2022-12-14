const menu = document.getElementById('menu');
const dinnerFoods = ['🍝','🍔','🌮']

menu.innerHTML = dinnerFoods.map((food) => (
    `<div class="food">${food}</div>`)).join('');