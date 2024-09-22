let show = 23
console.log(show)
function show(){
    console.log("Ashish")
}
console.log(show)

/*
The show variable (from let) is in a TDZ.
The show function is hoisted, but since let variables cannot be redeclared in the same scope, this leads to a conflict.
*/


/*
    this is the parsing phase error, that's why I din't get output as 23, because in the same scope I'm declaring show variable,
    and using let keyword we can't re-declare with the same name
function show(){
^

SyntaxError: Identifier 'show' has already been declared
    at internalCompileFunction (node:internal/vm:77:18)
    at wrapSafe (node:internal/modules/cjs/loader:1288:20)
    at Module._compile (node:internal/modules/cjs/loader:1340:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49

Node.js v20.11.0
*/
