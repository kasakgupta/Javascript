const user = {
    username: "kasak",
    price: 999,

    welcomeMessage: function() {
        // 'this' refers to the 'user' object
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}

// Calling the welcomeMessage method
user.welcomeMessage();  // Outputs: kasak, welcome to the website and the user object

// Changing the username and calling the method again
user.username = "sam";
user.welcomeMessage();  // Outputs: sam, welcome to the website and the updated user object

// 'this' in the global context refers to the global object (window in browsers)
console.log(this);  // Outputs: global object (window in browsers)

// Function declaration example
function chai() {
    let username = "kasak";
    // 'this' refers to the global object in non-strict mode
    console.log(this.username);  // Outputs: undefined because 'username' is not a property of the global object
}

// Calling the function
chai();

// Function expression example
const chaiFunc = function() {
    let username = "kasak";
    // 'this' refers to the global object in non-strict mode
    console.log(this.username);  // Outputs: undefined
}

// Calling the function expression
chaiFunc();

// Arrow function example
const chaiArrow = () => {
    let username = "kasak";
    // 'this' in arrow functions refers to the lexical scope (where the function was defined)
    console.log(this);  // Outputs: global object (in browsers), or an empty object in Node.js
}

// Calling the arrow function
chaiArrow();

// Arrow function with different return styles

// Traditional return
const addTwo1 = (num1, num2) => {
    return num1 + num2;
}

// Implicit return without parentheses
const addTwo2 = (num1, num2) => num1 + num2;

// Implicit return with parentheses
const addTwo3 = (num1, num2) => (num1 + num2);

// Returning an object using parentheses
const addTwo4 = (num1, num2) => ({ username: "kasak" });

console.log(addTwo1(3, 4));  // Outputs: 7
console.log(addTwo2(3, 4));  // Outputs: 7
console.log(addTwo3(3, 4));  // Outputs: 7
console.log(addTwo4(3, 4));  // Outputs: { username: "kasak" }

// Example of using forEach with an array
const myArray = [2, 5, 3, 7, 8];

myArray.forEach(element => {
    console.log(element);
});
