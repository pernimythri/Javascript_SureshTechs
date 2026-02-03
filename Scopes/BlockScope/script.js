/* // When using let or const in block level , we get error when accessing outside the block

let username="mythri" // Global Scope
let password=123

{
    // Local scope
   let username="Dev"
   let password=12
   let a=20 //local scope , let or const give error when accessing outside
   console.log(a)
}
//console.log(a); //error
Valid() //error
function Valid(){
    //console.log("Inside fun ",a); //error  
    if(username=="mythri" && password==123){
        console.log("Valid Credentials")
        console.log(username,password) // mythri,123
    }
    else{
        console.log("Invalid Credentitals")
    }
}
 */





// Only use var in block level to access bloc level elements outside
let username="mythri" // Global Scope
let password=123

{
    // Local scope
   let username="Dev"
   let password=12
   var a=20 //local scope , let or const give error when accessing outside
   console.log(a)
}
console.log(a); //20
Valid() //Inside fun 20
function Valid(){
    console.log("Inside fun ",a); //error  
    if(username=="mythri" && password==123){
        console.log("Valid Credentials")
        console.log(username,password) // mythri,123
    }
    else{
        console.log("Invalid Credentitals")
    }
}