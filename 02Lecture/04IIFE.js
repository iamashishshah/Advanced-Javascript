// this is another form of function definition and calling
// what was the requirement of IIFE when it was introduced?
/*
    * by using IIFE, we create a local scope for that variale and that variable can't be used outside of that scope
    * (inside of the bracket, it has only scope, not the outside of it)()
    * IIFE: Immediately invoked function expression
    * It allows you to create a local scope, helping to avoid polluting the global namespace.
*/
(function (username) {
    console.log(username)
})("Ashish");

const result = (function() {
    return "I am returned!";
})();

console.log(result); // Outputs: I am returned!

(function() {
    console.log(`this is the traditional way of declaring it`)
})();

(function() {
    console.log(`this is function expression`)
}());

// const temp = new Function('console.log("I am an IIFE");, return "somethig')();
// console.log(temp)
