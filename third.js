//loops in js

let sum = 0;

for(let i = 0; i<=5; i++) {
    sum += i; //  or (sum = sum + i;)
}
// varibales such as i only exist within the loop and can't be accessed publicly outside the {} block.
console.log(sum);
console.log("loop has ended");

// while loop

let i = 1;

while(i <= 5) {
    console.log("Parag Sharma");
    i++;
}

// do while loop
let a = 10;
do {
    console.log("Parag Sharma");
    a++;
}while(a < 20);

// for-of loop is used to iterate over the elements of an array

let str = "Parag Sharma";
for(let char of str) {
    console.log(char); // this will print all the charcaters in the string
}

// for-in loop is used to iterate over the properties of an object

let student = {
    name: "Parag Sharma",
    age:20,
    course: "B.Tech",
    isPassed: true
}

for (let key in student) {
    console.log(key, student[key]); 
}