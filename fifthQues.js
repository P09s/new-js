// average marks of entire class

let marks = [85,97,44,37,76,60];
let num = 0;
let deno = marks.length;

for (let val of marks) {
    num += val;   
}

let avg = num/deno;
console.log(`average marks of entire class is ${avg}`);

// offer question

let items = [250, 645, 789, 123, 542];

for (let i=0; i<items.length; i++) {
    let offer = items[i]/10;
    items[i] -= offer;
}

console.log(items);