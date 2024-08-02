// Array of programming languages
const coding = ["js", "ruby", "java", "python", "cpp"];

// Using forEach with an anonymous function
coding.forEach(function (val) {
    console.log(val); // Logs each element in the coding array
});

// Using forEach with an arrow function
coding.forEach((item) => {
    console.log(item); // Logs each element in the coding array
});

// Using forEach with a named function
function printMe(item) {
    console.log(item); // Logs the passed item
}

coding.forEach(printMe); // Logs each element in the coding array using the printMe function

// Using forEach with an arrow function and additional parameters
coding.forEach((item, index, arr) => {
    console.log(item, index, arr); // Logs each element, its index, and the entire array
});

// Array of objects representing programming languages
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
];

// Using forEach to log the languageName property of each object
myCoding.forEach((item) => {
    console.log(item.languageName); // Logs the languageName of each object in the myCoding array
});
