// functions in js

// function is a block of code that performs a specific task
// function is a object in js

// function declaration
function functionName(parameter1, parameter2) {
    //do something here
}
// function call
functionName();

//example of function declaration

function myFunction() {
    console.log('This is my function');
}

myFunction();

// functions minimizes the code repetition
// functions makes the code more organized

function newFunction(msg) { //parameter --> msg
    console.log(msg);
}

newFunction('This is new function'); //argument --> 'This is new function'

// parameter and argument are not the same but they are related

function sum(a, b) { // a and b are parameters(local varibales and can only be called inside the function block)
    s = a + b;
    return s;
}

let val = sum(4,10);
console.log(val);

// arrow function --> they are part of modern js
// arrow function are more concise and shorter

const arrowFunction = (a,b) => {
    return a+b;
}
let arrowVal = arrowFunction(4,3);
console.log(arrowVal);

// forEach loop in js is used to iterate over an array
//------A callback function is a function that is passed as an argument to another function---//

let arr = [1,2,3,4,5,6,7,8,9,10];

arr.forEach(function printVal(val){
    console.log(val);
})

// forEach loop can also be written using arrow function

let arrr = ["John", "Doe", "Jane", "Doe"];
arrr.forEach((val, idx, arrr) => {
    console.log(val.toUpperCase(), idx, arrr);
})

// forEach is higher order function because it takes a function as an argument and executes it --> callback function