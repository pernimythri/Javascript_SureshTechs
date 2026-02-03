/* console.log(name) // Uncaught ReferenceError: Cannot access 'name' before initialization
let name="Mythri" 
console.log(name) // not print because of error (interpreter)  */ 

/* 
console.log(name) // Uncaught ReferenceError: Cannot access 'name' before initialization
const name="Mythri" 
console.log(name) // not print because of error (interpreter) */


/* console.log(name)   // Mythri
var name="Mythri" 
console.log(name)   //Mythri */

/* 
// defaultly name is var 
console.log(name)   // Mythri
name="Mythri" 
console.log(name)   //Mythri */


// Without Functions
/* let mythriAge = prompt("Mythri , waht is your age ? ")
console.log(`Mythri your age is: ${mythriAge}`)
console.log("Thank you for answering ")
console.log("Please , subscribe to the channel")
let vinayAge = prompt("Vinay , waht is your age ? ")
console.log(`Vinay your age is: ${vinayAge}`)
console.log("Thank you for answering ")
console.log("Please , subscribe to the channel")
let krishAge = prompt("krish , waht is your age ? ")
console.log(`Krish your age is: ${krishAge}`)
console.log("Thank you for answering ")
console.log("Please , subscribe to the channel") 
*/



// With Functions  (function declaration)
/* let mythriAge = prompt("Mythri , waht is your age ? ")
console.log(`Mythri your age is: ${mythriAge}`)
functionMessage()
let vinayAge = prompt("Vinay , waht is your age ? ")
console.log(`Vinay your age is: ${vinayAge}`)
functionMessage()
let krishAge = prompt("krish , waht is your age ? ")
console.log(`Krish your age is: ${krishAge}`)
functionMessage()

function functionMessage(){  
    console.log("Thank you for answering ")
    console.log("Please , subscribe to the channel")
} */



// function declaration to function expression
// Function - let keyword
// With functions (Function Expressions)

/* let functionExpression = function(){  
    console.log("Thank you for answering ")
    console.log("Please , subscribe to the channel")
}

let mythriAge = prompt("Mythri , waht is your age ? ")
console.log(`Mythri your age is: ${mythriAge}`)
functionExpression()
let vinayAge = prompt("Vinay , waht is your age ? ")
console.log(`Vinay your age is: ${vinayAge}`)
functionExpression()
let krishAge = prompt("krish , waht is your age ? ")
console.log(`Krish your age is: ${krishAge}`)
functionExpression() */



/* // Function - let keyword
// with functions (function expressions using before declaration gives ERRORRRRRR
//Errrorrr ->script.js:78 Uncaught ReferenceError: Cannot access 'functionExpression' before initialization
let mythriAge = prompt("Mythri , waht is your age ? ")
console.log(`Mythri your age is: ${mythriAge}`)
functionExpression()
let vinayAge = prompt("Vinay , waht is your age ? ")
console.log(`Vinay your age is: ${vinayAge}`)
functionExpression()
let krishAge = prompt("krish , waht is your age ? ")
console.log(`Krish your age is: ${krishAge}`)
functionExpression()


let functionExpression = function(){  
    console.log("Thank you for answering ")
    console.log("Please , subscribe to the channel")
}
 */



/* // // Function - var keyword
// with functions 

var functionExpression = function(){  
    console.log("Thank you for answering ")
    console.log("Please , subscribe to the channel")
}    

let mythriAge = prompt("Mythri , waht is your age ? ")
console.log(`Mythri your age is: ${mythriAge}`)
functionExpression()
let vinayAge = prompt("Vinay , waht is your age ? ")
console.log(`Vinay your age is: ${vinayAge}`)
functionExpression()
let krishAge = prompt("krish , waht is your age ? ")
console.log(`Krish your age is: ${krishAge}`)
functionExpression() */



/* // // Function - var keyword
// with functions (function expressions using before declaration gives ERRORRRRRR
// Errorr ->  script.js:98 Uncaught TypeError: functionExpression is not a function
let mythriAge = prompt("Mythri , waht is your age ? ")
console.log(`Mythri your age is: ${mythriAge}`)
functionExpression()
let vinayAge = prompt("Vinay , waht is your age ? ")
console.log(`Vinay your age is: ${vinayAge}`)
functionExpression()
let krishAge = prompt("krish , waht is your age ? ")
console.log(`Krish your age is: ${krishAge}`)
functionExpression()


var functionExpression = function(){  
    console.log("Thank you for answering ")
    console.log("Please , subscribe to the channel")
} */



/* // Function  Parameters 
var functionExpression = function(name,age){  
    console.log(`${name}'s age is ${age || "Not entered"}`) // if we not pass value it takes null for age , so if not entered , it will print not entered
    console.log("Thank you for answering ")
    console.log("Please , subscribe to the channel")
}    

let mythriAge = prompt("Mythri , waht is your age ? ")
functionExpression("Mythri",mythriAge)
let vinayAge = prompt("Vinay , waht is your age ? ")
functionExpression("Vinay",vinayAge)
let krishAge = prompt("krish , waht is your age ? ")
functionExpression("Krish",krishAge)
 */


/* // Sum of ages
var functionExpression = function(name,Age){  
    console.log(`${name}'s age is ${Age || "Not entered"}`) // if we not pass value it takes null for age , so if not entered , it will print not entered
    currentTotalAge+=Age // Global Scope
    console.log(`Current total age is ${currentTotalAge}`)
    console.log("Thank you for answering ")
    console.log("Please , subscribe to the channel")
}    
let currentTotalAge=0;
let mythriAge = +prompt("Mythri , waht is your age ? ")
functionExpression("Mythri",mythriAge)
let vinayAge = +prompt("Vinay , waht is your age ? ")
functionExpression("Vinay",vinayAge)
let krishAge = +prompt("krish , waht is your age ? ")
functionExpression("Krish",krishAge)
console.log("Total age  : ",currentTotalAge) 
*/


 // Task - voting - using functions
var functionExpression = function(name,Age){  
    console.log(`${name}'s age is ${Age || "Not entered"}`)
    let eligibleForVote=Age>=18 // By writing like this (instead in if statement) -> we can use this variable anywhere
    if(eligibleForVote){
    console.log(`${name} u eligible for voting`)
    }
    else{
        console.log(`${name} u have to wait ${18-Age} for voting`)
    }
    console.log("Thank you for answering ")
    console.log("Please , subscribe to the channel")
}    
let currentTotalAge=0;
let mythriAge = +prompt("Mythri , waht is your age ? ")
functionExpression("Mythri",mythriAge)
let vinayAge = +prompt("Vinay , waht is your age ? ")
functionExpression("Vinay",vinayAge)
let krishAge = +prompt("krish , waht is your age ? ")
functionExpression("Krish",krishAge)
//Errror ->  console.log(eligibleForVote) // Local scope -> error
 