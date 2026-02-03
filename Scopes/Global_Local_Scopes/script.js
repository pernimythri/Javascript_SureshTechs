let username="mythri" // Global Scope
let password=123

{
    // Local scope
   let username="Dev"
   let password=12
   let a=20 //local scope
   console.log(a)
}
//console.log(a); //error

function Valid(){
    if(username=="mythri" && password==123){
        console.log("Valid Credentials")
        console.log(username,password) // mythri,123
    }
    else{
        console.log("Invalid Credentitals")
    }
}
Valid()