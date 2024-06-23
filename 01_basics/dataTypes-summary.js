// Primitive
//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


const id = Symbol('123')   //Symbol
const anotherId = Symbol('123')  

console.log(id === anotherId);  //false

const bigNumber = 420154502058n //bigInt
// Non-Primitive
// Array, Objects, Functions 

const fruits = ["apple", "mango", "banana"]; //Array

let myObj = {
    name: "kasak",   //object
    age: 19,
}

const myFun = function(){
    console.log("Hi there");  //Function
}

// ------------------------------------------------

// Stack (Primitive), heap (Non-Primitive)

let name = "kasak"

let anothername = name
anothername = "ginni"

console.log(name);
console.log(anothername);

let userOne = {
    email: "user1@gmail.com",
    upi: "user@ptm"
}

let userTwo = userOne

userTwo.email = "kasak@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
