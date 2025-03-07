// let num = prompt("Enter a number");
// if (num % 5 === 0) {
//     console.log("Number is divisible by 5");
// } else {
//     console.log("Number is not divisible by 5");    
// }

let scores = 75;
let grade;

if (scores >= 90) {
    console.log("You got A grade");
}
else if (scores >= 80) {
    console.log("You got B grade");
} 
else if (scores >= 70) {
    console.log("You got C grade");
}
else if (scores >= 60) {
    console.log("You got D grade");
}
else {
    console.log("You got F grade");
}

let score = 85;

if (score >= 90 && score <= 100) {
    grade = "A";
    
} else if (score >= 80 && score < 90) {
    grade = "B";
    
}
else if (score >= 70 && score < 80) {
    grade = "C";
    
}
else if (score >= 60 && score < 70) {
    grade = "D";
    
}
else {
    grade = "F";
    
}
console.log("You got " + grade + " grade");