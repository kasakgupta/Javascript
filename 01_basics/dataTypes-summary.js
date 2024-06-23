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