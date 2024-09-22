/*
    * this keyword is used to refere currenct execution context(when it is executing inside of any function, then it will refer to them)
    * in browser this keyword refer to window object, that mean everything that is in window object can be accessible using this.objectName but variable created using 'let' keyword is not attached to window object so it won't be accessible, likewise in node environment

*/
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    obj: {
            username: "Ashish",
            pass: 12,
            fun: function name(params) {
                return this.username
                // for this 'this' keyword execution context is obj{ } only not outside of it.
            }
        }
  };
console.log(person.obj.fun())