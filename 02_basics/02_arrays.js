const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

const newHeros = [...marvel_heros, ...dc_heros]  //spread operator (we can concatenate multiple arrays)

// console.log(newHeros);

const new_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const usable_array = new_array.flat(Infinity)
// console.log(usable_array)

console.log(Array.isArray("Kasak"))
console.log(Array.from("kasak"))  // from keyword convert the datatype to array
console.log(Array.from( {name : "kasak"})) // returns an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))