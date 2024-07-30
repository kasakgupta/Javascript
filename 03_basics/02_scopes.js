// Variables declared with 'var' have function scope or global scope
// Variables declared with 'let' and 'const' have block scope

// Example with block scope using 'let' and 'const'
let a = 300;
if (true) {
    let a = 10;  // This 'a' is scoped to the 'if' block
    const b = 20;  // 'b' is also scoped to the 'if' block
    console.log("INNER: ", a);  // Outputs: INNER: 10
}

console.log(a);  // Outputs: 300
// console.log(b);  // Error: b is not defined
// console.log(c);  // Error: c is not defined (c was commented out)

function one() {
    const username = "kasak";

    function two() {
        const website = "youtube";
        console.log(username);  // Outputs: kasak
    }
    // console.log(website);  // Error: website is not defined

    two();
}

// one();  // Uncomment to call the 'one' function

if (true) {
    const username = "kasak";
    if (username === "kasak") {
        const website = "youtube";
        console.log(username + website);  // Outputs: kasak youtube
    }
    // console.log(website);  // Error: website is not defined
}

// console.log(username);  // Error: username is not defined

// ++++++++++++++++++ interesting ++++++++++++++++++

// Function declarations are hoisted
console.log(addOne(5));  // Outputs: 6

function addOne(num) {
    return num + 1;
}

// Function expressions are not hoisted
// addTwo(5);  // Error: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2;
};

// addTwo(5);  // Uncomment to call the 'addTwo' function
