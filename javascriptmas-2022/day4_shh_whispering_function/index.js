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