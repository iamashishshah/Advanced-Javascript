// there are 7 falsy values in js
/*
1. false
2. NaN
3. ""
4. 0
5. null
6. -0
7. 0n
8. undefined
*/
if(function (){}){
    console.log("truethy")
}else{
    console.log("Hey");
    
}

// some special method on 'NaN'

// console.log(isNaN(NaN));   // true
// console.log(isNaN(12));   // false
// console.log(Number.isNaN(NaN));  // true
// console.log(Number.isNaN(343));  // false
// console.log(NaN === NaN) // strictly type checking without type coercion
// console.log(NaN == NaN)  // it allows type to convert from one data type to another data type


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

// console.log(Object.is(-0, -0));   // true                        it is kind of same as ===
// console.log(Object.is(-0, 0)); // false
// console.log(Object.is(NaN, NaN)) // true while NaN is never true with NaN

if(-0 == -0){

}else console.log("Else part")

// console.log(0/0)  // NaN
// console.log(10 + NaN); // NaN

// console.log(Math.sqrt(-2)); // NaN

// WHERE AND HOW DO WE USE NaN
// I know that value from server is coming is number but in case of it doesn't come as number made an type conversion to convert it
// but if something else will come then I'll get NaN, and 
let valueFromServer = Number(serverCall)  
// if(valueFromServer === NaN){ isntead of this
// if(isNaN(valueFromServer)){
if(Number.isNaN(valueFromServer)){
    //something here
    console.log(`NaN problem, try again`)
}else{
    //something here also
    console.log(`Your work is done`)
}

/*
I know that NaN === NaN always gives false then I need to check with another way that if data coming from server is NaN or not
for this we can do like this
isNaN(valueFromServer)  true is value is NaN
*/

/*
Summary: ----------
1. 0 and -0 is treated same but not in Object.is() case
2. NaN and NaN always gives false but not in Object.is() test
*/
