// const instaUser = new Object()
const instaUser = {}


instaUser.id = "123@abc"
instaUser.name = "Ram"
instaUser.isLoggedIn = false

// console.log(instaUser)

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            fisrtname: "kasak",
            lastname: "gupta"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2} //spread operator
console.log(obj3);

console.log(Object.keys(instaUser));
console.log(Object.entries(instaUser))
console.log(instaUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: tutor} = course  //destructuring
console.log(tutor)

//Json format

// {
//     "name": "kasak",
//     "age": "19",
//     "city": "Delhi"
// }