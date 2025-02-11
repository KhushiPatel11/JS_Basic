console.log("conditional expressions");

let a = prompt("what's your age?"); 
if(a < 8){
    console.log("a is invalid age");
}
else if(a < 9){
    console.log("you cannot driving bcoz you are a kid");
}
else if(a < 18 && a >= 9){
    console.log("you can think of driving after 18");
}
else{
    console.log("you can drive as you are above 18");
}

console.log("you can:", (a<18? "not drive" : "drive" ));