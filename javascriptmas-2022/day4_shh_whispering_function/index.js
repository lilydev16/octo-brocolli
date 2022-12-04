/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

const whisper = (str) => {
  if (str.endsWith('!')) {
      let i = str.length -1
      return str.slice(0, i).toLowerCase()
  }
  return 'shh... ' + str.toLowerCase()
}

const whisper = (str) => {
  let phrase = str.endsWith('!') ? str.slice(0, -1) : str
  return 'shh... ' + phrase.toLowerCase()
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));