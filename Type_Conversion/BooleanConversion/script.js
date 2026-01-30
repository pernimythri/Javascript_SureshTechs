let marks=100
let firstName="Perni"
let cash=14100
let emptyBoolean="";
let isPassed=true
let result; //undefined
let myValue=null;
let bigValue=52n;
let id1=Symbol("id1");
console.log(marks,firstName,cash,emptyBoolean,isPassed,result,myValue,bigValue,id1)

let marksStr=Boolean(marks) //true
let firstNameStr=Boolean(firstName) //true
let cashStr=Boolean(cash) //true
let emptyBooleanStr=Boolean(emptyBoolean) //false
let isPassedStr=Boolean(isPassed) //true
let resultStr=Boolean(result); //false
let myValueStr=Boolean(myValue)  //false
let bigValueStr=Boolean(bigValue)  //true
id1Str=Boolean(id1)  //true
console.log(marksStr,firstNameStr,cashStr,emptyBooleanStr,isPassedStr,resultStr,myValueStr,bigValueStr,id1Str) 
           