let username="mythri"
let password=123

{
   var a=20 
   var b=46
}
console.log(a+b); //66
Valid() // Lexical Scope ->not depend from where it called.
function Valid(){
    var isAccessGranted=false
    if(username=="mythri" && password==123){
        console.log("Valid Credentials")
        console.log(username,password) // mythri,123
        isAccessGranted=true
        var allowUser=true
    }
    console.log(isAccessGranted) //true
    console.log(allowUser) //true
}
/* console.log(isAccessGranted) //errorr
console.log(allowUser) //error 
*/