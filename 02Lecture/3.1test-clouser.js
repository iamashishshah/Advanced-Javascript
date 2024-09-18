// function add(){
//     let a = 10
//     function test(){
//         return a + 2
//     }
//     return test
// }
// const fun = add()
// console.dir(fun)
// console.log(fun())

// 1. how to provide encapsulation, and data liking? first what does it mean?
/*
    * suppose we want a certain thing should be handled by a certain method only not all the methods, how can we do that by clouser
    *
    * 
*/

// make a function where your father can only increase your bank balance not anyone then him

// function bankBalance(){
//     let balance = 100

//     // here only father can modify balance variable and show will return only balance value
//     function father(){
//         balance += 200
//     }
    
//     function show(){
//         return balance;
//     }

//     return  { father, show }
// }

// const { father, show } = bankBalance()
// father()
// console.log(show())


// make a bank account for this a government PMO can change the bank balance but anyone can see the bank balance
// Make a bank account where anyone can donate the funds inside the account and govenment can see the balance PM care funds

function PMCareFunds(){
    let balance = 0;

    // here no one can modify accept the public, and no one can see the balance accept the PMO Office
    return {
        public: function( ammount, username ){
            balance += ammount
            console.log(`${username} donated $${ammount}`)
        },
        government: function ( name ){
            if(name === "PMO Office"){
                console.log(`${balance}`)
            }else{
                console.log(`sorry you don't have access to see balance, thank you for visiting us.`)
            }
        }
    }
}

const { government, public } = PMCareFunds()
government("PMO Office")
public(20, "Ashish")





function PMOBankAccount(){
    let balance = 0;

    return {
        government: function ( username, ammount ){
            if(username === "PMO"){
                balance += ammount
                console.log(`Balance incremented`)
            }else{
                console.log(`you can't add the balance`)
            }
        },
        public: function ( aadharNo){
            if(aadharNo){
                console.log(balance)
            }
        }
    }
}

// const { government, public } = PMOBankAccount()
// government("PMO", 20)
// public(100)
// government("Ashish", 200)
// public(100)
