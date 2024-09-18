// a function with some preserved values creates a clousre 
// or a clousre is created when a function is reserves variable outside of its scope

// In simpler terms, a closure occurs when a function retains access to the variables from its outer (enclosing) function, even after that outer function has finished executing.

/*
    * what is clouser?
    * what is advantage of clouser? why do we use clouser in the first place?
    * what were the requirements of clouser? 
    * clouser is created inside of 'heap memory'
    * 
    * in order to call a function in your code, js interpreter needs to know function itself and any other data that function is using from the surroundings, if the function is using surroundings data then it needs to be packed, because it doesn't know and when that function will be called and data needs to be used, so what inner function does is: it creates a clouser in which it has added all the variable and other things that will be needed if it executes
    * 
    * why to use clouser?
    * 1. for data encapsulation: by stopping exposure and liking of data where it is not needed
*/


















// 1. look at this

function add(a, b){
    return a + b
    // there is no need for clouser because its variable is fully dependet on itself [no external data]
}




// at this point these are available in 'script' scope


// function show() {
//     let myname = "Ashish Shah"
//     let dep = "web"
//     function inner() {
//         // console.log()
//     }
//     console.dir(inner)

// }
// show()
// console.log(inner)


// function show() {
//     let myname = "Ashish Shah";
//     let dep = "web";

//     function inner() {
//         console.log(`Name: ${myname}, Department: ${dep}`);
//     }
//     // the inner function is telling, whatever you have I've remembered everything, now if you'll go or your execution context will be finished, still I'll have what you've had.
//     console.dir(inner)
//     // return inner; // Return the inner function
// }

// const innerFunc = show(); // Execute show(), which returns inner()
// // innerFunc(); // Call the returned function, accessing myname and dep


// function createCounter() {
//     let count = 0; // Private variable

//     return {
//         increment: function() {
//             count++;
//         },
//         getCount: function() {
//             return count;
//         }
//     };
// }

// const counter = createCounter();
// counter.increment();
// console.log(counter.getCount()); // Output: 1









// let myname = "Ashish Shah"
// let dep = "web"
// function innerShow(){

// }
// console.dir(innerShow)






/* ƒ show(a)
arguments: null
caller: null
length: 1
name: "show"
prototype: constructor:
            ƒ show(a)[[Prototype]]: Object[[FunctionLocation]]: 03Clousres.js:15[[Prototype]]: ƒ ()[[Scopes]]: Scopes[2]

*/
// dir: description
// a special method exits on console which is 'dir'

/*
Closures: Allow an inner function to access variables from an outer function after the outer function has executed.
Lexical Scope: Determines which variables are accessible based on where functions are defined.
Use Cases: Closures are beneficial for data privacy, creating flexible functions, and handling asynchronous operations.
*/