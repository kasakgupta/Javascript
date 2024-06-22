const accountId = 51522
let accountEmail = "kasak@gmail.com"
var accountPassword = "1234"
accountCity = "Delhi"
let accountState;

// accountId = 02 //not allowed

accountEmail = "kg@gmail.com"
accountPassword = "5452"
accountCity = "Mumbai"

console.log(accountId)

/* prefer not to use var
because of issue in block scope and functional scope
 */
console.table([accountEmail, accountId, accountPassword, accountCity]);