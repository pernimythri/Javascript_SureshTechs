/* let title1="js by suresh techs"
let price1=200
let nPages1=300
console.log(title1,price1,nPages1)


let title2="python by suresh techs"
let price2=100
let nPages2=200
console.log(title2,price2,nPages2)


let title3="cpp by suresh techs"
let price3=400
let nPages3=100
console.log(title3,price3,nPages3)


let title4="c by suresh techs"
let price4=400
let nPages4=500
console.log(title4,price4,nPages4)
 */


// class and objects 
/* class has state and behaviour
   state - properties
   behaviour-actions
*/

class Book{ 

    // state 
    static author="suresh" // common for every book ,keep as static , only once memory allocates
    constructor(title,price,nPages){
        this.title=title; // instance variables
        this.price=price;
        this.nPages=nPages //automatic semicolon insertion in background 
    }

    // behaviour 
    updatePrice(newprice){ // instance methods
        this.price=newprice
    }
 
    // static methods 
    static getBookAuthor(){
        return Book.author
    }

}

let jsBookObj=new Book("js by suresh techs",200,300) // constructor called automatically
console.log(jsBookObj.title,jsBookObj.price,jsBookObj.nPages,Book.author)
jsBookObj.updatePrice(1000) // instance me thods call with object name
console.log(jsBookObj.title,jsBookObj.price,jsBookObj.nPages,Book.author)

let pythonBookObj=new Book("python by suresh techs",400,300)
console.log(pythonBookObj.title,pythonBookObj.price,pythonBookObj.nPages,Book.author)


let cBookObj=new Book("c by suresh techs",800,300)
console.log(cBookObj.title,cBookObj.price,cBookObj.nPages,Book.author)


let cppBookObj=new Book("cpp by suresh techs",500,300)
console.log(cppBookObj.title,cppBookObj.price,cppBookObj.nPages,Book.author)
console.log(Book.getBookAuthor()) // static methods call with name