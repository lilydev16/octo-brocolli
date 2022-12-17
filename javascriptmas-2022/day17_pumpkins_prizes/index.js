const kittyScores = [
  [39, 99, 76], 89, 98, [87, 56, 90], 
  [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
  ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
  ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

// Solution using a for loop
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

// Solution using reduce
function flatten(arr){
  return arr.reduce((results, e) => {
      if (Array.isArray(e)) {
          e.forEach(item => results.push(item))
      } else {
          results.push(e)
      }
      return results
  }, [])
}

// Solution using reduce and ternary operator
function flatten(arr){
  return arr.reduce((results, e) => {
      Array.isArray(e) ? e.forEach(item => results.push(item)) : results.push(e)
      return results
  }, [])
}

// Solution using recursion
function flatten(arr){
  return arr.reduce((results, el) => {
      return Array.isArray(el) ? [...results, ...flatten(el)] : [...results, el]
  }, [])
}

// Solution using the flat method
function flatten(arr){
  return arr.flat()
 }

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
