/*let fullName = "John Doe";
let age = 25;
let isMarried = false;
console.log(fullName);*/

//dynamic typed language

// var is not preferable to use to define variable so use let or const
// const is used to define constant variable (fro pie and all)
// block -> { } -> variables defined inside block are not accessible outside block

const student = {
  name: "John Doe",
  age: 25,
  isMarried: false,
  "full name": "John Doe",
};
// here student is an object which a collection of different variables with different data types

student["age"] = student["age"] + 1; // age changed to 26

console.log(student.age);