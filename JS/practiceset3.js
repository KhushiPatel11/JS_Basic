// Question - 1
let marks = {
    harry: 98,
    rohan: 57,
    aakash: 40
}

for(let i = 0; i<Object.keys(marks).length; i++){
    console.log("The marks of "+ Object.keys(marks)[i] + "are" +marks[Object.keys(marks)[i]]);
}

// Question - 2 
for(let x in marks){
    console.log(x+ ":" + marks[x]);
}

// Question - 3
let cn = 4;
let i;
while ( i != cn){
    i = prompt("enter the correct number");
    console.log("Try Again!!");
}

console.log("you entered correct code");

// Question - 4
const mean = (a,b,c,d) => {
    return (a,b,c,d)/4
}
console.log(mean(4,5,6,7 ))