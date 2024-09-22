Lecture 3 topics
1. JS Engien
2. Execution Context
3. this 
4. prototype

## how 'javascript' neither interpreted nor compiled language? how js engine run js code
# How JavaScript Executes in a Web Page
```javascript
## 1. Loading the Web Page
- **Request:** When a user navigates to a web page, the browser sends an HTTP request to the server for the HTML document.
- **Response:** The server responds with the HTML, which may include embedded JavaScript or links to external JavaScript files.

## 2. Parsing the HTML
The browser starts parsing the HTML document. As it encounters `<script>` tags, it identifies that it needs to handle JavaScript code.

## 3. Fetching JavaScript
If the JavaScript is in an external file (e.g., `script.js`), the browser makes an additional request to fetch that file. Once the file is received, it’s ready to be processed.

## 4. Compilation and Interpretation
Here’s where the process gets more technical:

### a. Parsing the JavaScript (Interpretation)
When the browser encounters JavaScript code, it first parses it. This involves breaking the code down into tokens and creating an Abstract Syntax Tree (AST). This step is essentially about understanding the structure of the code.

### b. Just-In-Time (JIT) Compilation (Compilation)
After parsing, the engine begins the JIT compilation process. It compiles parts of the code into machine code just before executing it. This happens in two stages:
- **Baseline Compilation:** The engine may compile the code quickly to get it running, focusing on speed.
- **Optimization:** If the code is executed frequently, the engine may later optimize the machine code further for better performance based on runtime data.

### c. Execution
Once the code is compiled, it’s executed. The JavaScript engine runs the machine code on the CPU, which performs the operations defined in your script.

## 5. Handling Dynamic Features
If the JavaScript interacts with the DOM or makes network requests, the engine manages those operations, often in conjunction with the browser’s rendering engine.

## 6. Garbage Collection
As the script runs, memory management takes place, with garbage collection occurring periodically to free up memory that’s no longer in use.
```





## How browser executes js code? What are the processes involed in processing js code? 

## what are streams? How and why the browser converts high level language into stream?

## what are tokens? how are they created? how they represent our code or program

## what is AST(abstract syntax tree) ? How the AST made? and why AST is made each time?

## what do you mean by js is a cripting language?
that means it can't directly intract with hardware, can't modify disk but C/C++, java can do these tasks
but while making node js environment to js code out of the browser, we gave capability to env to such tasks.
and we don't do this using js code, we've written function in C/C++ while making node js, and give js to use those function
so that using js we can perform those operations

## what is temporaral dead zone 'TDZ'? 
It is used for 'let' 

## 'let' vs 'var'
let is blocked scope, and in the same scope it can't re-declared
like here: 
```javascript
let show = 23
function show(){
    console.log("Ashish")
}
console.log(show)
```

let is block-scoped and cannot be redeclared within the same block, which leads to a conflict when both let and function declarations have the same name.

var is function-scoped and can be redeclared, so the function declaration takes precedence over the variable declaration.
