// Strings are immutable string can not change
let str = "Harry";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.slice(2,4));
console.log(str.slice(2));                                                                                                                                                          
console.log(str.replace('Har', 'Per'));              

// Quick Quiz : Use a for loop to print a string
let str1 = "abcde";
for(let char of str1){
    console.log(char);
}
l