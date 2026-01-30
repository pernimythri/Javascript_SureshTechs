let marks=100
let firstName="Perni"
let cash="14100"
let emptyString="";
let isPassed=true
let result; //undefined
let myValue=null;
let bigValue=52n;
let id1=Symbol("id1");
console.log(marks,firstName,cash,emptyString,isPassed,result,myValue,bigValue,id1)

let marksStr=Number(marks) //100
let firstNameStr=Number(firstName) //NaN
let cashStr=Number(cash) //14100
let emptyStringStr=Number(emptyString) //0
let isPassedStr=Number(isPassed) //1
let resultStr=Number(result); //NaN
let myValueStr=Number(myValue) //0
let bigValueStr=Number(bigValue) //52
// id1Str=Number(id1) -> error
console.log(marksStr,firstNameStr,cashStr,emptyStringStr,isPassedStr,resultStr,myValueStr,bigValueStr) 
console.log(Number(null)) // 0
console.log(Number(undefined)) //NaN
console.log(Number("1four8")) //NaN
console.log(Number(" 144  ")) //144
console.log(Number(" 144  53"))//NaN 
console.log(Number("   "))//0
console.log(Number("1 4 5"))//NaN
console.log(Number("\n \t"))//0