/*
Check if the given string is a correct time representation of the 24-hour clock.

Example:
- For time = "13:58", the output should be validTime(time) = true.
- For time = "25:51", the output should be validTime(time) = false.
- For time = "02:76", the output should be validTime(time) = false.

Hint:
- parseInt()
- split()
*/


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