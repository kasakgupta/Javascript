// Basic for loop with a conditional check inside
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // Uncomment the next line to log when element is 5
        // console.log("5 is the best number");
    }
    // Uncomment the next line to log each element
    // console.log(element);
}

// Uncommenting the next line would cause an error because 'element' is block-scoped within the for loop
// console.log(element);

// Nested for loop example
for (let i = 1; i <= 10; i++) {
    // Uncomment the next line to log the outer loop value
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // Uncomment the next lines to log the inner loop values and multiplication table
        // console.log(`Inner loop value ${j} and outer loop value ${i}`);
        // console.log(i + '*' + j + ' = ' + i * j);
    }
}

// Loop through an array
let myArray = ["flash", "batman", "superman"];
// Uncomment the next line to log the length of the array
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // Uncomment the next line to log each element of the array
    // console.log(element);
}

// break and continue examples

// Break example: stops the loop when index is 5
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break; // Exit the loop when index is 5
//     }
//     console.log(`Value of index is ${index}`);
// }

// Continue example: skips the current iteration when index is 5
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue; // Skip the rest of the loop body when index is 5
    }
    console.log(`Value of index is ${index}`);
}
