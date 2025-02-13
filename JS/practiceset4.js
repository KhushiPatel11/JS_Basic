// Question - 1
let str = "har\"";
console.log(str.length);

// Question - 2
// include 
const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox2";
console.log(sentence.includes(word)); //includes is written true and false values if he word is in the sentence so its return true oterwise it's return false
console.log(
  `The word "${word}" ${sentence.includes(word) ? "is" : "is not"} in the sentence`,
);

// starts with and end with 
const str1 = "Cats are the best!";
console.log(str1.endsWith("best!"));
// Expected output: true

console.log(str1.endsWith("best", 17));
// Expected output: true

const str2 = "Is this a question?";
console.log(str2.endsWith("question"));
// Expected output: false

// Question - 3
let str3 = "abcdefg";
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());

// Question - 4
let sentence1 = "please give me rs 1000";
let amount = parseInt(sentence1.slice(18));
console.log(amount);
console.log(typeof amount);