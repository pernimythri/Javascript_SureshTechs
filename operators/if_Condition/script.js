// cinema super then go ,else drop

/* let cinema=prompt("rey , how was cinema ,can i go or no").toLowerCase()
if(cinema=='yes')
{
    console.log("superrrr u go")
}
else{
    console.log("go back boring cinema")
} */

//ternary operator  ? :
/* let cinema=prompt("rey , how was cinema ,can i go or no").toLowerCase()
cinema=='yes'? console.log("superrrrr, go ") : console.log("boring, dont go")
 */


//multiple statements in ternary operator (,)
// let cinema=prompt("rey , how was cinema ,can i go or no").toLowerCase()
// cinema=='yes'? (console.log("superrrrr, go "),console.log("enjoy")) : console.log("boring, dont go")



let marks=90
if(marks>=90){
    console.log("excellent")
}
else if(marks>=35){
    console.log("good")
}
else{
    console.log("fail")
}
marks=34
// using ternary 
marks>=90 ? console.log("excellent") : marks>=35 ? console.log("good") :console.log("fail")