const emojis = {
  smile: '😊',
  angry: '😠',
  party: '🎉',
  heart: '💜',
  cat: '🐱',
  dog: '🐕',
};

function emojifyWord(word) {
  let wordKey =
    word[0] === ':' && word.endsWith(':')
      ? word.slice(1, word.length - 1)
      : word;
  return emojis[wordKey] ? emojis[wordKey] : wordKey;
}

function emojifyPhrase(phrase) {
  return phrase
    .split(' ')
    .map((word) => emojifyWord(word))
    .join(' ');
}

console.log(emojifyWord(':heart:'));
console.log(emojifyWord(':flower:'));
console.log(emojifyWord('elephant'));

console.log(emojifyPhrase('I :heart: my :cat:'));
console.log(emojifyPhrase('I :heart: my :elephant:'));
