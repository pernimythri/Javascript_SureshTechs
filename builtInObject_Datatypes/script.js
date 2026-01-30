// normal
let mathsMarks=90
console.log(mathsMarks)
console.log(typeof mathsMarks) // number
// Built in objects 
let englishMarks=Number(80)
console.log(englishMarks)
console.log(typeof englishMarks) //number

// object created uing new keyword, here Number is object , so let create it using new keyword
let socialMarks=new Number(100)
console.log(socialMarks) 
//output :
/* Number {100} 
[[Prototype]]: Number
[[PrimitiveValue]]: 100
*/
console.log(typeof socialMarks) // object




// BigInt Buile-In-Object
let likes=BigInt(9007199254749995)
console.log(likes) // it round of the 9007199254749995 actual value ,output:9007199254749996n
console.log(typeof likes)

// u can give bigint inside "double quotes also"
let likes2=BigInt("900719995")
console.log(likes) // it round of the 9007199254749995 actual value ,output:9007199254749996n
console.log(typeof likes)

// convert bigint to number  - this makes actual vvalue gone and gives rounded value
let likes3=9007199254749995546
let convertBigIntToNumber=Number(likes3)
console.log(likes3)
console.log(typeof likes3)

// String containing alphabets to Number
let s="mythri"
console.log(Number(s)) // NaN
console.log(typeof s) //string
 
// String containing numbers to number 
let k="54"
console.log(k) // 54
console.log(typeof k) // string

// other way to convert string to number without built in object->Number()
let val="1234"
console.log(+val) // 1234
console.log(typeof +val) //number
console.log(typeof val) //string

// But we cannot convert BigInt to Number using unary operator(+)
// let r=64n
// console.log(+r) //error
// console.log(typeof +r) //error


// Built-In-object -> Boolean
let bool=Boolean(false)
console.log(bool)
console.log(typeof bool)
if(bool){
    console.log("True one")
}
else{
    console.log("False one")
}

let bool2=Boolean() // defaulty false
console.log(bool2)
console.log(typeof bool2)
if(bool2){
    console.log("True one")
}
else{
    console.log("False one")
}

// String -> BuiltInObject

let myName=new String("Mythri")
console.log(myName)
console.log(typeof myName) // object
myName=new String("Mythri")
console.log(myName.toUpperCase()) //MYTHRI


// Symbol datatype - To create unique Identifiers - Built-In-Object 
let id1=Symbol("id1 value")
console.log(id1) // output : Symbol(id1 value) 
console.log(id1.description)
let id2=Symbol("id2 value") //output :id1 value
console.log(id2) // output : Symbol(id2 value)
console.log(id2.description) //output :id2 value
console.log(typeof id2) //output : symbol

