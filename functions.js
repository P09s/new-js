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