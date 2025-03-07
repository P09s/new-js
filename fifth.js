//array in js //

// array is a collection of elements, vsriables, objects, functions, etc.
// array is object in js *****

// strings are immutable, arrays are mutable

let marks = [34, 23, 24, 93, 73, 25];
for (let index = 0; index < marks.length; index++) {
    const element = marks[index];
    console.log(element);
}   

console.log('We are done'); 

for (let mark of marks) {
    console.log(mark);
}

// array methods //

// push() - add element at the end of the array
// unshift() - add element at the beginning of the array
// pop() - remove element from the end of the array
// shift() - remove element from the beginning of the array
// tosString() - convert array to string    
// combine two arrays - concat()
// reverse() - reverse the array
// sort() - sort the array
// splice() - add or remove or replace elements from the original array
// slice() - copy portion of array

let companies = ['Google', 'Bloomberg', 'Uber', 'Microsoft', 'IBM', 'Netflix',];
companies.shift();
companies.splice(1, 1, 'Ola');
companies.push('Amazon');
console.log(companies);