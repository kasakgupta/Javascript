function sayMyName(){
    console.log("K");
    console.log("A");
    console.log("S");
    console.log("A");
    console.log("K");
}

// sayMyName() //calling function

// function add(num1, num2){   //num1, num2 = parameters
//     console.log( num1 + num2);
// }

function add(num1, num2){   
    // let result =  num1 + num2
    // return result

    return num1 + num2
    // console.log("kasak") //after using return keyword we cannot print any other statement
}

const result = add(2,3)  //2,3 = arguments
console.log("Result :" , result);

function Usermsg(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}

// console.log(Usermsg("kasak"))
console.log(Usermsg()) //if we do not pass any value it will print undefined