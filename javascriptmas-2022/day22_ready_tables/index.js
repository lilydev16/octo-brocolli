const tables = document.getElementById('tables');

function getReadyTables() {
  const readyTables = [];
  for (let i = 0; i < 2; i++) {
    readyTables.push(Math.round(Math.random() * 20) + 1);
  }
  return readyTables;
}

function displayTables() {
  let array = getReadyTables();
  return array.map((table) => {
    tables.innerHTML += `<div class="table">${table}</div>`;
  });
}

console.log(displayTables());