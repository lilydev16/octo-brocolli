const kittyScores = [
  [39, 99, 76], 89, 98, [87, 56, 90], 
  [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
  ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
  ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

function flatten(arr){
  let results = []
for (let i = 0; i < arr.length; i++) {
   if (Array.isArray(arr[i])) {
      arr[i].forEach(e => results.push(e))
   } else {
      results.push(arr[i])
   }
}
return results
}

// alternate option is to use the flat method --> arr.flat()

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
