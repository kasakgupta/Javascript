// Object example with for...in loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
};

for (const key in myObject) {
    // Uncomment the next line to log each key and its corresponding value
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// Array example with for...in loop

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    // Uncomment the next line to log each element in the array
    // console.log(programming[key]);
}

// Note: for...in is generally used for objects, not for iterating over maps

// Uncomment the block below to see an incorrect usage of for...in with a Map
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('FR', "France")
// map.set('IN', "India") // Overwrites the previous value for 'IN'

// for (const key in map) {
//     console.log(key); // This will not work as intended for a Map
// }
