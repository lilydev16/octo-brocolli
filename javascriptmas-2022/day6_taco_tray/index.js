function getRandomNumberOfTacos() {
  return new Array(Math.floor(Math.random() * 10 + 1)).fill('🌮')
}

function putTacosOnTray() {
  return getRandomNumberOfTacos().map(function (taco) {
      return `<div class="taco">${taco}</div>`
  }).join('')
}

document.getElementById('tray').innerHTML = putTacosOnTray()
