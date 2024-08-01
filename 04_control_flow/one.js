// Checking if the user is logged in and the temperature condition

const isUserloggedIn = true;
const temperature = 41;


// if (temperature < 50) {
//     console.log("temperature is less than 50");
// } else {
//     console.log("temperature is greater than or equal to 50");
// }

console.log("Execute"); // This will always execute after the temperature check

// Comparison operators in JavaScript include: <, >, <=, >=, ==, !=, ===, !==

const score = 200;

// Checking if score is greater than 100
if (score > 100) {
    let power = "fly"; // 'let' defines a block-scoped variable
    console.log(`User power: ${power}`); // Logs "User power: fly"
}

// The following line would cause an error because 'power' is not defined outside the if block
// console.log(`User power: ${power}`);

const balance = 1000;

// Inline if statement, multiple statements executed using comma operator
if (balance > 500) console.log("test"), console.log("test2");  //not a good practice

// Multiple conditions for balance check
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

// User login status checks
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// Logical AND (&&) operator checks all conditions
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

// Logical OR (||) operator checks at least one condition
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
