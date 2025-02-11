// question 1
let age = prompt("what is your age");
if(age > 10 && age < 20){
    console.log("Age is between 10 and 20")
}

else{
    console.log("Age is not between 10 and 20");
}

// question 2
let num = prompt("enter a number");
switch (num){
    case '0':
        console.log("monday");
    break;
    case '1':
        console.log("tuesday");
    break;
    case '2':
        console.log("wednesday");
    break;
    case '3':
        console.log("thrusday");
    break;
    case '4':
        console.log("friday");
    break;
    case '5':
        console.log("saturday");
    break;
    case '6':
        console.log("sunday");
    break;
    default:
        console.log("Invalid Input")
}

// question 3
let number = prompt("enter number");
if(number%2 == 0 && number%3 == 0){
    console.log("number is divisible by 2 and 3")
}

else{
    console.log("number is not divisible by 2 and 3");
}

// question 4
let number1 = prompt("enter number");
if(number1%2 == 0 || number1%3 == 0){
    console.log("number is divisible by 2 or 3")
}

else{
    console.log("number is not divisible by 2 and 3");
}

// question 5
let a = age>18? "you can drive" : "you can not drive";
console.log(a);

// check number is even or odd 
let number2 = prompt("Enter the number");
if(number2%2 == 0){
    console.log("number is even");
}
else{
    console.log("number is odd");
}