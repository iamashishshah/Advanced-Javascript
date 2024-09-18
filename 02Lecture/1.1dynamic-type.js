/*
    * we can assign anything in any variable in js, that's why it is called dynamic type language
    * to write bigInt : 10n, 3343n, anthingn
    * automatic type conversion: JavaScript is known as a dynamically typed language, which means the type of a variable is determined at runtime and can change as the program executes.

*/

// let randomeVariable = []
// console.log(typeof randomeVariable)
// console.log(typeof Object)  // Function
// console.log(typeof String)  // Function
// console.log(typeof Boolean)  // Function
// console.log(typeof Number)  // Function
// console.log(typeof BigInt)  // Function
// console.log(typeof null)  // Function
// console.log(typeof undefined)  // Function
// console.log(typeof 10n)


// // DYNAMIC TYPE BASIS:
// let myVariable = 42;        // myVariable is a number
// myVariable = 'Hello';       // Now myVariable is a string
// myVariable = true;          // Now myVariable is a boolean
// console.log(myVariable.toString())


let val = { ashish: "shah" }
let name = "Ashish"
// console.log(val.toString(val))
// console.log(val.toLocaleString(name))
// console.log(JSON.stringify(val))


// parseInt and parseFloat

val = "234"
// console.log(parseFloat(val)) 
// console.log(parseInt(val)) 



// reccomanded way to typecast

// console.log(String(123))
// console.log(Number('123'))
// console.log(Boolean(-1))
// console.log(Boolean([]))
// console.log(BigInt(123))

console.log(4..toString())


// avoid dynamic type casting like toString()