const name = "Ram"
const salary = 50000

console.log(name + salary + " Value"); //Outdated syntax

console.log(`Hello my name is ${name} and my salary is ${salary} rupees`); // new syntax

const gameName = new String('ram-rk')

console.log(gameName[0]);

console.log(gameName.toUpperCase());
const anotherString = gameName.substring(0,3)
console.log(anotherString);

const String1 = "   kasak  "
console.log(String1);
console.log(String1.trim());  // removes extra space

const url = "https://kasak.com/kasak%20gupta"

console.log(url.replace('%20', '-'))

console.log(url.includes('gupta'))
console.log(gameName.split('-')); //split any string using separators
