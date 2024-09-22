// What is Hoisting and Why it is like that?
/*
    * there is no word named 'hoisting' in js, 
    * developers and engineers have added this words 
    * 'javascript' code executes in two phases: 1. Parsing 2. Execution
    * 

*/
var show = 10
function show(){
    console.log("Ashish")
    // whatever is here it will be stored in show variable
}

console.log(show)
console.log(show())

/*  OUTPUT
10
02Hoisting.js:16 Uncaught TypeError: show is not a function
    at 02Hoisting.js:16:13
    * why am I getting error that says "show is not a function" but we can clearly see that show is a function
    * because in the parsing phase we had show = function body, but at the time of execution show = 10 assigned and 
    * now it doesn't change so, at the last line show is holding value 10 instead of function's body that why we are getting
    * error
    * and also 'WHY THE HELL ARE WE NOT GETTING ERROR THAT SHOW HAS BEEN ALREADY DECLARED'?
*/


/*
Look this is not parsing time error, while we're getting 10 as output and when js engine reaches to line show(), it gives error because variable can't be called as function

10
C:\Users\iamas\OneDrive\Desktop\Web Development\Advanced-Javascript\03Lecture\02Hoisting.js:16
console.log(show())
            ^

TypeError: show is not a function
    at Object.<anonymous> (C:\Users\iamas\OneDrive\Desktop\Web Development\Advanced-Javascript\03Lecture\02Hoisting.js:16:13)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49

Node.js v20.11.0
*/

