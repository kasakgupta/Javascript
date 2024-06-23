let score = "33"

// console.log(typeof score)
// console.log(typeof (score))

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//"33" => 33
// "33abc" => NaN
// "true" => 1; "false" => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false; "kasak" => true

//******** Operations *********

let value = 5
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**4);
// console.log(2%3);

let str1 = "hello"
let str2 = " kasak"

let str3 = str1 + str2   //concatenate two strings
console.log(str3)


// console.log("1" + 2)
// console.log(1 + "1")        // This type of code is never appreciated anywhere
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

// console.log(+true)    //confusing code
// console.log(+"")

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"