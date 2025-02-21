function myDesplayer(some) {
    debugger
    console.log(some)
    document.getElementById("demo").innerHTML = some;
}

function calculator(num1, num2, myCallback) {
    debugger
    let sum = num1 + num2;
    myCallback(sum);
}

function onClickHere(){
    calculator(5, 5, myDesplayer);
}

setTimeout(myFunction, 3000);

function myFunction(){
    document.getElementById("demo1").innerHTML = "Hello";
}


// document.addEventListener('DOMContentLoaded', function () {
//     function myDesplayer(some) {
//         debugger
//         console.log(some)
//         document.getElementById("demo").innerHTML = some;
//     }


//     function calculator(num1, num2, myCallback) {
//         debugger
//         let sum = num1 + num2;
//         myCallback(sum);
//     }

//     calculator('hi', 'hi', myDesplayer);

// })