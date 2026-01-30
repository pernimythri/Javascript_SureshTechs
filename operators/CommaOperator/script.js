// Allows us to evaluate multiple expressions in a single statement ,
// resulting the last expression as output

let values=(1,2,3)
console.log(values) //3 last value come

let a=2
let b=24
let result=(a++,b++)
console.log(a,b,result) // 3 25 24

console.log(0.5+0.4) //0.9
console.log(0.1+0.2) //0.30000000000000004
console.log((0.1+0.2).toFixed(1)) //0.3
console.log((0.1+0.2).toFixed(2)) //0.30