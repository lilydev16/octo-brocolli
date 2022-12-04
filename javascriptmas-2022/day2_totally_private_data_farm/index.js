import userData from "./data.js";

/* Totally Private Data Farm 

Good news, renown advertising firm Evil Corp. wants to purchase our 
private user data! 

We'd never do this in real life of course, but just for practice 
let's pretend we're unethical web hackers and transform the data 
in the way Evil Corp. has requested. They're quite particular and
just want an array of users with a fullname and human readable
birthday.   

Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. Each result in your 
array should look like this when you're done: 

{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}

Read about toDateString() for info on formatting a readable date. 

*/
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