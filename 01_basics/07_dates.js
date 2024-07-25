// Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate);

// let CreatedDate = new Date(2024, 1, 5)
let CreatedDate = new Date("2024-01-25")
console.log(CreatedDate.toLocaleString())

let TimeStamp = Date.now()

console.log(TimeStamp);
console.log(CreatedDate.getTime());
console.log(Math.floor(Date.now()/1000))