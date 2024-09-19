/*
    * what is currying: a function returning a function is called currying
    * why do we use currying
    * what is the practical use of currying?
    * 
    * Currying is a technique in functional programming where a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument. Essentially, a curried function returns another function until all arguments are provided.
    * 
    * const logWithPrefix = prefix => message => console.log(`${prefix}: ${message}`);
const infoLogger = logWithPrefix('INFO');
infoLogger('This is a log message'); // INFO: This is a log message

*/

function add(a, b, c) {
    console.log(c)
    // this is the normal code of function
    return a + b + c
}

// console.log(add(10, 10)) // NaN because c = undefined
// console.log(add(10, 10, 10)) // 203


// but let suppose I'm getting 'a', 'b', and 'c' from different source and after getting all values I want to perform addition 

function addNum(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
// console.log(addNum(10)(2)(10))


// function sendAutoMail(to){
// this function is returning clouser function
//     return function(subject){
// this is again returning clouser function
//         return function(body){
//             console.log(`Sending mail to ${to} with subject ${subject}: ${body}`)
//         }
//     }
// }

const sendAutoMail = (to) => (subject) => (body) => console.log(`Sending mail to ${to} with subject ${subject}: ${body}`)

let step1 = sendAutoMail("ashish@a.com")
let step2 = step1("Order confirmation")
step2("you have youre delivery date today")