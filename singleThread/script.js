// Synchronous programming 

// console.log("1 kg onion")
// console.log("1 liter milk")
// for(let i=0;i<=30000000000;i++){
//     if(i==200000000)
//     {
//         console.log("1 onion dosa")
       
//     }
// }
// console.log("drop brother at school") 

// output : kg onion, milk, dosa, drop at school





// Aynchronous programming
console.log("1 kg onion")
console.log("1 liter milk")
setTimeout(function(){
for(let i=0;i<=30000;i++){
    if(i==200)
    {
        console.log("1 onion dosa")
       
    }
}},0);
console.log("drop brother at school")


// output : kg onion, milk, drop at school  ,dosa
