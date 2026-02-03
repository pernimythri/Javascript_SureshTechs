let globalVar="Global Scope"
function OuterFun(){
    let outerVar="Outer function scope"
    function InnerFun(){
        let innerVar="Inner function scope"
        console.log(globalVar) // print
        console.log(outerVar) // print
        console.log(innerVar) // print
        }
    InnerFun()
    }
OuterFun()
