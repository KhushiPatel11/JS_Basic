// let num = prompt("enter a number");
// switch (num){
//     case '0':
//         console.log("monday");
//     break;
//     case '1':
//         console.log("tuesday");
//     break;
//     case '2':
//         console.log("wednesday");
//     break;
//     case '3':
//         console.log("thrusday");
//     break;
//     case '4':
//         console.log("friday");
//     break;
//     case '5':
//         console.log("saturday");
//     break;
//     case '6':
//         console.log("sunday");
//     break;
//     default:
//         console.log("Invalid Input")
// }

let num1 = Number(prompt("enter the first number"));
let num2 = Number(prompt("enter the second number"));
const op = prompt("Enter operator"); 
switch(op){
    case "+":
        result = num1 + num2;
        console.log(`${num1} + ${num2} = ${result}`);
    break;
    case '-':
        result = num1 - num2;
        console.log(`${num1} - ${num2} = ${result}`);
    break;
    case '/':
        result = num1 / num2;
        console.log(`${num1} / ${num2} = ${result}`);
    break;
    case '*':
        result = num1 * num2;
        console.log(`${num1} * ${num2} = ${result}`);
    break;
    case '%':
        result = num1 % num2;
        console.log(`${num1} % ${num2} = ${result}`);
    break;
    default:
        console.log("Invalid Input");
}

// document.getElementById("num3").value = num1;