console.log("javascript variables");

// var is a global scope variables
var a = 5; //var can be redecalre and modify

// let is block scoped variables
let b = 5;  //let can modify but can't redeclare

// const can not change and redeclare
const c = "hello";
// c = "hi"; throws an error
{
    var a = "abc";    
    console.log(a);

    let b = "pqr";
    console.log(b);
}
console.log(a);
console.log(b);
console.log(c);