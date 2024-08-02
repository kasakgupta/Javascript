// For...of loop examples

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // Uncomment the next line to log each number in the array
    // console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
    // Uncomment the next line to log each character in the string
    // console.log(`Each char is ${greet}`);
}

// Maps example

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");
map.set('IN', "India"); // Overwrites the previous value for 'IN'

// Uncomment the next line to log the entire map
// console.log(map);

for (const [key, value] of map) {
    // Uncomment the next line to log each key-value pair in the map
    // console.log(key, ':-', value);
}

// Object example

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
};

// The for...of loop cannot be used directly with objects
// Instead, use for...in or Object.entries() to iterate over object properties

for (const [key, value] of Object.entries(myObject)) {
    // Uncomment the next line to log each key-value pair in the object
    // console.log(key, ':-', value);
}
