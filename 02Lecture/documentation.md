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