// var username = 'thisisashishshah'  // global scope
// function myFin(){
//     var name = "Ashish"  // Local to the block
//     console.log(name)
//     console.log(username)
// }
// myFin()
// console.log(name)
// console.log(username)

let username = 'thisisashishshah'  // global scope
function myFin(){
    let name = "Ashish"  // Local to the block
    console.log(name)
    console.log(username)
}
myFin()
console.log(name)
console.log(username)

/*
========scope======
there is only 2 scopes
1. local scope
2. global scope(window)

-> About 'var' keyword:
1. if variable is declared using 'var' keyword
   within the function: function scope only
   outside of a function: global scope
variables are hoisted to the function or global scope but not their initialization, that's why they don't give error if you try to access them before declaration, they hoisted it to global or function scope

2. if variable is declared using 'let' keyword
   they are block-level variable
   Temporal Dead Zone(TDZ): {thiiiiiiiiiiiiiiiiiiiiiiiis
    thiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiis is TDZ
   let temp = 'name'
   }

'let' keyword creates 'block scope' in js, there is not by default any 'block scope' in js
*/