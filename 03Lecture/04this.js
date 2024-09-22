/*
    * is function is invoked with 'new' keyword
    * call bind apply
    * obj.fn // obj
    * window  // undefined
*/


// 1. first and Second way to invoke function
// show()
// new show()
// what is the difference we've to find it


// function one(){
//     username: "Ashish",
//     console.log(this.username)  // undefined because we can't access username using this keyword
//     // console.log(username)
//     console.log(this)
// }
// one()


function show(){
    console.log("Inside of show", this.name, this?.hobby, this?.age)
    console.log(this)
}

const obj = {name: "ashish "}
const hero = {name: "iron man"}
const someppl = {name: "you're", hobby:"testing", age: 8}

show.call(someppl, 23, 232, 12)
// show.apply(someppl)
// show.bind(someppl)



// but what if you want to print values of hero then?? how will you do that because each time we don't know how many and what values a object is containing, so how will you de-structure them? and each time I don't know which object is passing as an argument, this is also not feasible

// function showName(obj){
//     console.log(obj.name)
// }




// but what is suppose there are 1000 fields of a user then how will you handle it, because it clearly seems impossible to write 100 arguments so this is not feasible

// function showName(name, hobby, age){
//     console.log(name, hobby)
// }
