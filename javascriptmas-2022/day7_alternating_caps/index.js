/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
- Don't worry about punctuations
*/

function altCaps(str){
  return str.split('')
      .map((e, index) => index % 2 === 0 ? e.toUpperCase() : e.toLowerCase())
      .join('')
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
console.log(altCaps("I'm so happy it's Monday"));