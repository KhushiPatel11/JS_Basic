// For loop
// let sum = 0;
// let n = prompt("enter the value");
// for(let i = 0; i < n; i++){
//     sum += (i + 1);
//     // console.log(i)
// }
// console.log("sum of integer" + sum);

// For in loop is used to display objects key 
let obj ={
    name: "abc",
    age: "23",
    city:"xyz"
}

for(let key in obj){
    console.log(key + ":" + obj[key]);
}

// for of loop is used to dispaly  iterable objects, such as arrays, strings, maps,
let fruits = ['banana', 'apple', 'mango'];
for (let fruit of fruits){
    console.log(fruit);
}

let char = "string"
for (let str of char){
    console.log(str);
}

// while loop
let n = prompt("enter the number");
let i = 1;
while(i <= n){
    console.log(i);
    i++
}

let m = prompt("enter the number");
let j = 10;
do{
    console.log(j);
    j++
}while(j < m)