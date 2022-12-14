function altCaps(str){
  return str.split('')
      .map((e, index) => index % 2 === 0 ? e.toUpperCase() : e.toLowerCase())
      .join('')
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
console.log(altCaps("I'm so happy it's Monday"));