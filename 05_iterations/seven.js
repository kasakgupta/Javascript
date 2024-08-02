// Using map method on arrays

const myNumbers = [1, 2, 3, 4, 5, 6];

// Chaining map method
const newNums = myNumbers
    .map((num) => num * 10) // Multiply each number by 10
    .map((num) => num + 1)  // Add 1 to each number
    .filter((num) => num >= 40); // Keep only numbers greater than or equal to 40

console.log(newNums); // Logs [41, 51, 61]

// Using reduce method to sum elements of an array

const myNums = [1, 2, 3];

// Using reduce with a function expression
// const total = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`); // Logs accumulator and current value at each step
//     return acc + currval; // Returns the sum of accumulator and current value
// }, 0);

// Using reduce with an arrow function
const total = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(total); // Logs 6

// Using reduce to calculate the total price in a shopping cart

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "python course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
];

// Calculating the total price of items in the shopping cart
const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(totalPrice); // Logs the total price: 22996


