Topics to be learned...

1. Dynamic type
2. typeof
3. NaN and -0
4. Clousere
5. IIFE
6. Curring
7. Hoisting
8. JS engine

## How javascript is dynamic typed language?

## why typeof 'null' is a 'object'?
javascript was made using c/c++ and in c/c++ null was treated like object, so as the developer of js took as it is.

## what are some pros and cons of dynamic type of js?
pros
```javascript
"4" - 2 = 2 (due to dynamic changes)
// due to dynamic type of javascript: it behave diff with operators
```


## while primitive values can't call methods how the hell 'num.toString()' calling it?
due to 'Boxing', for a certain period of time it call new Number() and then 'num' will behave like object

## Why 'NaN' is defined in javascript, what are the real application or where do we use in real application
1. Error Handling in Mathematical Operations:
2. Maintaining Consistency 
suppose you want to convert a string into number then I will give you NaN which is falsy value
--: suppose you're doing some mathematical operation in series of oprands and operator: and if some operands do not yeilds meaningfull number but it should return something, so they will return NaN and with NaN other operands and operator will also yeild NaN to maintain the consistency

### some are the practical example of NaN
```javascript
1. Error Checking: When performing calculations or parsing numbers from user input, you might encounter situations where the result is NaN. Checking for NaN helps ensure that your application handles erroneous or invalid data appropriately.

let result = parseFloat('abc');
if (Number.isNaN(result)) {
  console.log('Invalid number');
}


2. Data Validation: In applications where user input is involved, you might need to validate numerical input. If the input cannot be converted to a valid number, NaN can indicate this.

function safeDivide(a, b) {
  let result = a / b;
  if (Number.isNaN(result)) {
    return 'Invalid operation';
  }
  return result;
}


3. Handling Mathematical Errors: In complex mathematical computations, NaN can signal errors or invalid results, allowing you to handle these cases explicitly.

function computeRoot(value) {
  let result = Math.sqrt(value);
  if (Number.isNaN(result)) {
    return 'Cannot compute the square root of a negative number';
  }
  return result;
}


4. Data Cleaning: When processing datasets, NaN values can be used to represent missing or corrupted data. Handling these values properly is important for data integrity.

let data = [10, 20, NaN, 40, 50];
let cleanData = data.filter(value => !Number.isNaN(value));

```


## What is the meaning of object nature of javascript? How javascript 

## what is 'type tag' in javascript?
while there is primitive data type like: undefined, number, boolean, string, symbol, and bigint
other than this are 'object'
js internally uses 'type tag' to identify the type of variable, but while making js null value also got tag of 0, which is for objects, in this way null value became 'object' type

## how does automatic type conversion work? How js engine convert it?

## what is 'coersion' or coerce(convert)

## what is 'polymorphism' in js? how js uses polymorphism?
 JavaScript’s operations are designed to be flexible, allowing different types of values to be used in various contexts


## what is 'AST'(abstract syntax tree)
Abstract Syntax Tree (AST): Represents the structure of the code, helping the engine understand how to execute it.

## num.toString()? if num is primitive type then how is it calling a method? "Boxing"
javascript automatically wrap it into Number then use the method and after using the method it discard the wrapped value.

## but when we do 4.toString(), why do we get an error?
1. first: to represent 34.3, decimal values
2. sec: to access key from a object
but when we do 4.toString(), js gets confused, like are you trying to represnt a decimal value or you're trying to access method?
that's why it gives us error
if you don't want error then use "4".toString() or (4).toString() or 4..toString() this will work perfectely fine

## what is the meaning of [object Object] while you try to convert an 'object' into string
The output [object Object] in your JavaScript code represents an object that has been converted to a string.
it gives like that because javascript doesn't know how to make meaningfull sentence while converting 'object' data type, so it gives like this

## we can use JSON.stringigy({name: "Ashish"})
it will convert object into string {"name":"Ashish"}

## what is the difference between 'object' and 'Object'
object (lowercase): This is a general term that refers to any value that is an instance of the object type.
bject (uppercase): This refers to the built-in JavaScript Object constructor. It's a function that allows you to create new objects and is part of the JavaScript standard library. You can create objects using new Object() or simply using object literals ({}).

//TODO: note in 'js' creating object, accessing object is costely then doing same with primitive values


1. first: to represent 34.3, decimal values
2. sec: to access key from a object


## why NaN === NaN always gives false ?
where is the chance we can get NaN while doing some operation
parseInt("string")
"heelO" * 3;
Math.sqrt(-3) here in all above cases we'll get NaN as output
NaN === NaN will always give false, Since NaN is a unique value in JavaScript, the standard equality checks will not work as expected

console.log(Number.isNaN(NaN))   // true
isNaN(NaN)  // true
isNan(23)   false
isNaN("tr")  true

NaN is useful for identifying situations where a calculation does not yield a valid number, allowing you to handle errors or unexpected input gracefully. It's important to check for NaN appropriately using Number.isNaN() or isNaN() to avoid common pitfalls in JavaScript.

## when we'll get Number.isNaN() as true
Number.isNaN(value) returns true only if the value is of type Number and is actually NaN.
console.log(Number.isNaN('123')); // Output: false

It returns false for any other value, including strings, objects, and valid numbers, even if they may have produced NaN through some other operation.

This behavior helps avoid the pitfalls of the older isNaN() function, which could return true for non-numeric types as well. For example:

javascript
Copy code
console.log(isNaN('foo')); // Output: true (which can be misleading)


## what is the meaning of 'lexical scope'
Lexical scope refers to the visibility of variables within nested functions. In JavaScript, the scope is determined by the physical structure of the code (where functions are defined), not by how they are invoked.
A function can access variables from its own scope, its parent scope (lexical parent), and any global scope.


## what is the actual meaning of 'window object' or 'global object'
