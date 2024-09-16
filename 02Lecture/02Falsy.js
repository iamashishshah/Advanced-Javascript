// there are 7 falsy values in js
/*
1. false
2. NaN
3. ""
4. 0
5. null
6. -0
7. 0n
*/
if(0n){

}else{
    console.log("Hey");
    
}

// some special method on 'NaN'

console.log(isNaN(NaN));   // true
console.log(isNaN(12));   // false
console.log(Number.isNaN(NaN));  // true
console.log(Number.isNaN(343));  // false
console.log(NaN === NaN) // strictly type checking without type coercion
console.log(NaN == NaN)  // it allows type to convert from one data type to another data type


/*
-0 === 0: true
-0 == 0: true
-0 is always treated as 0 in most of the cases
but here is exception:
console.log(1 / -0);  // -Infinity
console.log(1 / 0);   // Infinity
or
Object.is(0, -0) : false
*/
console.log(Object.is(-0, -0));   // true                        it is kind of same as ===
console.log(Object.is(-0, 0)); // false
console.log(Object.is(NaN, NaN)) // true while NaN is never true with NaN

if(-0 == -0){

}else console.log("Else part")

console.log(0/0)  // NaN
console.log(10 + NaN); // NaN

console.log(Math.sqrt(-2)); // NaN


/*
Summary: ----------
1. 0 and -0 is treated same but not in Object.is() case
2. NaN and NaN always gives false but not in Object.is() test
*/
