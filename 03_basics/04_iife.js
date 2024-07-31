// Immediately Invoked Function Expressions (IIFE)

// Named IIFE
(function chai(){
    // This function will be executed immediately after its definition
    console.log(`DB CONNECTED`);
})();    //semicolon is mandatory here to execute two iife

// Anonymous IIFE with parameter
( (name) => {
    // This function takes a parameter 'name' and logs a message with it
    console.log(`DB CONNECTED TWO ${name}`);
} )('kasak') // The IIFE is immediately invoked with 'kasak' as the argument


// Explanation:
// Named IIFE:

// The function is named chai.
// It is defined and immediately invoked.
// The function logs "DB CONNECTED" to the console.

// Anonymous IIFE with Parameter:

// An anonymous arrow function is defined.
// This function takes one parameter, name.
// The function logs "DB CONNECTED TWO" followed by the value of name to the console.
// The IIFE is immediately invoked with 'kasak' as the argument, so it logs "DB CONNECTED TWO kasak".

// IIFE is a design pattern used in JavaScript to execute functions immediately after they are defined.
//  It helps in creating a local scope and avoiding polluting the global namespace