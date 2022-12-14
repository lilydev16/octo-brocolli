import userData from "./data.js";

function transformData(data){
  return data.map(e => {
      let name = `${e.name.first} ${e.name.last}`
      let dateSplit = e.dob.date.split('-')
      let year = dateSplit[0]
      let month = dateSplit[1] - 1
      let day = dateSplit[2].slice(0, 2)
      let time = dateSplit[2].slice(3, 11).split(':')
      let hours = time[0]
      let minutes = time[1]
      let seconds = time[2]
      let bday = new Date(year, month, day, hours, minutes, seconds).toDateString()
      
      return {fullName: name, birthday: bday}
  })
}

console.log(transformData(userData));