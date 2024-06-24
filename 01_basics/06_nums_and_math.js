const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toFixed(2)); //100.00  useful in e-commerce websites

const random = 123.85465

// console.log(random.toPrecision(3));

const salary = 10000000
// console.log(salary.toLocaleString('en-IN')); //converts the number into indian system

//-------------------- MATHS ---------------------------------
// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(3.2));
// console.log(Math.ceil(4.5));
// console.log(Math.floor(4.5));

console.log(Math.random()); //gives no. between 0 and 1
console.log((Math.random()* 10) + 1);  
console.log(Math.floor(Math.random()* 10) + 1);

const min = 10
const max = 20  

console.log(Math.floor(Math.random()* (max - min + 1)) + min);  // if we want a no. between a certain range

