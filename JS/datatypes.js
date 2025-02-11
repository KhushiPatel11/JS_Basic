// Primitives datatype
// nn ss bb u - null number symbol string  boolean bigint undefined 
let a = null;
let b = 234;
let c = Symbol("Hello");
let d = true; //false
let e = BigInt("567") + BigInt("3");
let f = undefined;
console.log(a, b, c, d, e, f);
console.log(typeof e);

// non primitives
// objects - key value pair
const item = {
    "abc": 234, 
    "Hello": true,
    "Hi": false
}

console.log(item["abc"]);