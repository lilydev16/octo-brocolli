function validTime(str) {
  let hours = parseInt(str.split(':')[0])
  let min = parseInt(str.split(':')[1])
  return 0 <= hours && hours < 24 && 0 <= min && min < 60 ? true: false
}

// Refactor solution
function validTime(str) {
  const [hour, min] = str.split(':').map(e => parseInt(e))
  return hour >= 0 && hour < 24 && min >= 0 && min < 60 ? true : false;
}