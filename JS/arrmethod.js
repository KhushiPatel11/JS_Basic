let number = [3, 34, 5, 4]
let num1= [3, 34, 5, 4, 898, 90, 23]
let b = number.toString();
console.log(b, typeof b );
let c = number.join("_");
console.log(c, typeof c)
let r1 = number.pop();
console.log(num, r1);
let r2 = number.push(59);
console.log(num, r2);
let r3 = number.shift();
console.log(r3, num);
let r = number.unshift(78);
console.log(r, num);

delete num[0];
console.log(num)

let newArr = num.concat(num1);
console.log(newArr);

let num = [32, 7, 99, 102, 23, 65, 87];
num.sort();
console.log(num);