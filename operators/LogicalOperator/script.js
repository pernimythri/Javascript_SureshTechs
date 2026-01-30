// username and password
// single line comment - ctrl+/ 
// multiple comment - shift+alt+A

/* let username=prompt("Enter username")
let password=prompt("Enter Password")
if(username=="mythri")
{
    if(password=="123")
    {
        console.log("welcome")
    }
    else{
        console.log("Invalid details")
    }
}
else{
    console.log("Invald details")
} */

// Instead of nested if , use logical oprators
// Logical And - && 
// let username=prompt("Enter username")
// let password=prompt("Enter Password")
// if(username=="mythri" && password=="123"){
//     console.log("Welcome")
// }
// else{
//     console.log("Invalid details")
// }

// Logical or - || 
console.log(0 ||17) //17
console.log(false ||17) //17
console.log(1 ||17) //1
console.log(true ||17)//true
console.log(785 ||17) //785

//Nullish Coalescing Operator -> ??
// First defined value
console.log(0  ?? 17)//0
console.log(120  ?? 0)//120
console.log(false  ?? 17)//false
console.log(17  ?? false) //17
console.log(true  ?? 17)//true
console.log(null  ?? 17)//17
console.log(undefined  ?? 17)//17
console.log(0  ?? null)//0
console.log(null  ?? 0)//0
// if null, undefined both there , right side one will return
console.log(null  ?? undefined)//undefined
console.log(undefined  ?? null) //null

// logical not -> !
console.log(!true) //false
console.log(!false)//true
console.log(!(null  ?? undefined))//true
console.log(!(undefined  ?? null))//true
console.log(!0)//true
console.log(!1)//false 
// inverse logical not -> !! -> so same character
console.log(!!1)//true


