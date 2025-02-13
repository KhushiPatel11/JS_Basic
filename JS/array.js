let marks = [89, 56, 75, 67, false, "Not Present"];
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[6]);
console.log(marks.length);
marks[6] = 79;
marks[0] = 97;
console.log(marks);
console.log(typeof marks);

for(let arr of marks){
    console.log(arr);
}