// string in javascript

let str = "hello world";

//str.length -> lenght of string

console.log(str.length);
console.log(str[0]); 

// template literals -> backticks ``
// ${} -> placeholder
let name = "John";
let age = 25;
let sentence = `Hello, my name is ${name} and I am ${age} years old`;
console.log(sentence);

// string methods
 str.toUpperCase(); // result --> "HELLO WORLD"
 str.toLowerCase(); // result --> "hello world"
 str.trim(); // removes white spaces from both ends
 str.slice(0, 5); // result --> "hello"
 str.slice(6); // result --> "world"
 str.concat("!!!"); // result --> "hello world!!!"
 str.replace("world", "earth"); // result --> "hello earth"
 str.charAt(0); // result --> "h"