// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "kasak",
    age: 19,
    [mySym]: "myKey1",  //symbols are enclosed in square brackets
    city: "Delhi",
    email: "kasak@gmail.com",
    isLoggedIn: false
}

// console.log(JsUser.name)
// console.log(JsUser["name"]);
// console.log(JsUser[mySym])

JsUser.email = "kasak@google.com" // we can overwrite the value of any key

// Object.freeze(JsUser) // this freezes the object and we cannot modify that object afterwards
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greeting2 = function(){
    console.log(`Hello ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())