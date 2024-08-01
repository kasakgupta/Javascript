// Example to check if userEmail array is considered truthy or falsy

const userEmail = [];

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// Even though userEmail is an empty array, it is considered a truthy value
// To check if the array is empty, use the length property
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// Examples of falsy values in JavaScript:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Examples of truthy values in JavaScript:
// "0", 'false', " ", [], {}, function(){}

// Example to check if an object is empty

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) example
// It returns the right-hand side operand when the left-hand side operand is null or undefined

let val1;
// val1 = 5 ?? 10       // val1 will be 5
// val1 = null ?? 10    // val1 will be 10
// val1 = undefined ?? 15  // val1 will be 15
val1 = null ?? 10 ?? 20; // val1 will be 10

console.log(val1); // Output: 10

// Ternary Operator example
// condition ? trueExpression : falseExpression

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
