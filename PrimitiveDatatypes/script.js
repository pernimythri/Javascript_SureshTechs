let num=432
console.log(num)
console.log(typeof(num)) // type of variable 

// maximum safe number we can store inside the variable is 2^53-1 = 9007199254740991
// 2^53-1 after this ,if we try to store then we will get less accuracy
// let us take example where accuracy looses
let a=9007199254740991
a+=1
console.log(a) //9007199254740992
a+=2
console.log(a) //9007199254740992 no updation
a+=1
console.log(a) //9007199254740992 no updation
a+=2
console.log(a) //9007199254740994 updation

// How to print maximum safe accuracy and minimum safe accuracy 
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER)

// maximum and minimum value 
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
console.log(Number.MIN_VALUE) // 5e-324

console.log(1/0) //infinity
console.log(-1/0) //-infinity

console.log(Infinity) // it is global object , infinity comes under number
console.log(typeof Infinity)

console.log(0/0) // NaN (not a number)
console.log("mythri"/0) // NaN (not a number)
console.log("30"/10) // 3  "30" convert to number  -> type conversion 

// further operations on NaN gives NaN
let name="mythri"
name/=20
console.log(name) 
console.log(typeof name) // number
console.log(23/"hi") // NaN
console.log(typeof 23/"hi") //NaN
console.log(typeof(23/"hi")) // number
console.log(typeof("hi"/20)) // number

// but NaN power 0 is 1 (because anything power 0 is 1)
console.log(name ** 0)
console.log(typeof name) ///number



// so maximum safe number is 9007199254740991 , then how to assign beyond that number , for this we use BigInt 

// BigInt - keep 'n' after a number
let likes=9007199254740999n
console.log(likes)
console.log(typeof likes)
// likes+=1 // error because likes is bigint , 1 is number
likes+=1n
console.log(likes)


// Boolean datatype
let bool=true
console.log(bool)
console.log(typeof bool)
if(bool){
    console.log("true one")
}


// string -> inString_datatype folder 

// undefined -> when we did not pass any value to declared variable then js engine keeps undefined
let undefinedvar
console.log(undefinedvar) // undefined 

// we can also keep manually undefined to variable
let manualUndefinedar 
manualUndefinedar=undefined
console.log(manualUndefinedar) // undefined 
console.log(typeof manualUndefinedar) // undefined ->black colour -> string type

/*we can also keep manually undefined , 
but it is not our task ,its js engine task,
so it is good practice not to initialise as undefined 
if u want to keep manually then use "null"
*/
let manualUndefined 
manualUndefined=null
console.log(manualUndefined) // null -> means no value 
console.log(typeof manualUndefined) // object



