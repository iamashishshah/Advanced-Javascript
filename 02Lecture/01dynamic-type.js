/*
    -- there are two type of variable:
    1. dynamic type: javascript or python(ig)
    2. static type: e.g c/java, int a = 28; int num; at the time of declaration we say
*/

let randomeVariable = 10;
randomeVariable = "Ashish"
randomeVariable = true
randomeVariable = Symbol()
randomeVariable = 10
console.log(randomeVariable)

console.log(typeof null)
console.log(typeof undefined);
console.log(typeof NaN);
console.log(7-"2")
console.log("7"-"2")
console.log('ashish' + 2)
console.log(Number(true));
console.log(Number(false));
console.log("4" + 2);  //42 why: because in js '+' opearator has two thing to do: first addition of number & second concat of str
console.log("Ashish: "+"Shah")
console.log("4" * 10)
console.log("4" / 3);
let num = "5"
console.log(num++);  // first do your jusr previous work then do ++ operation
console.log(num)
let name = "Ashish"
console.log(name++); //NaN
console.log(Number("shah")); // NaN

// concatenation become easy when 'string literal came es6'
let contcat = `ashish  ${[23, [34 ,[343, [343, 34, 43, [43 , 4343], 343], 34]]]}  shah` // js always removes all brackets
console.log(contcat)

let obj = {
    name: "Ashish Shah"
}
let msg = `Hi ${obj}`
console.log(msg)  // Why: Hi [object Object]
/*
object (lowercase "o"): This typically refers to the general concept of an object in JavaScript. It denotes the type of data that can be used to store collections of data and more complex entities. When you write object with a lowercase "o", you're talking about the idea of objects as a data type, but not referencing any specific type or built-in function.

Object (uppercase "O"): This refers to a built-in JavaScript constructor function. The Object constructor function is used to create new objects. When you use Object, you're referring to the global Object object that provides methods and properties for working with objects in JavaScript.
*/
console.log(typeof null);

let a = 23;
console.log(typeof a);
a = a.toString()
console.log(typeof a)
let txt = new String()
console.log(typeof txt);
let myNum = new Number()
console.log(typeof myNum);
myNum = "Ashish"
console.log(typeof myNum)
myNum = 10
console.log(typeof myNum)
// everything is working dynamically

// typecasting

console.log(Boolean(-0));  // 0 and -0 is false
console.log(Boolean("")); // empty string is false and everything is true
let iff = ""
if(iff)
    console.log("test")  // empty string is false

console.log(String([34, 343, 342, 234,[3, 43, [34, 22]]]))
console.log(Object("Ashish", "shah"));


let numm = 234
console.log(numm.toString())  // this works perfectly fine but
// console.log(12.toString()) // not this why? because in js: "." operator has to basic things to do: 
// 1. to represent decimal point
// 2. access the key from any object
/*
In JavaScript, numeric literals like 23 are considered expressions. When you write 23.toString(), JavaScript interprets this as 23 (a number literal) followed by .toString(). However, the . operator has higher precedence than numeric literals, which leads to an attempt to interpret .toString as a decimal point rather than a method call. Since 23.toString is not valid syntax, this results in an error.
*/
console.log((23).toString());
// Here, (23) is evaluated first, and then .toString() is called on the result. but in the previous case: '.' operator were evaluated first then numeric operator due to preferece 
console.log(23..toString());


/*
Summary: 
1. How the numbers compare with different data types
2. when arrays got converted into string, all square brackets removes
3. when object convert into string: we get [object, Object]
4. due to autoBoxing we can perform some methods on primitve data types
5. Prefer Static method when want to go from one data type to another data type

*/


