//forEach is a method that is used to iterate over an array. It takes a callback function as an argument and runs that callback function on each element present in the array.
//Map is also used to iterate over an array. It also takes a callback function as an argument and runs that callback function on each element present in the array. The difference is that forEach just iterates over the array and runs the callback but map returns a new array of the same length after applying the callback function on each element of the array.
//Filter is also used to iterate over an array. It also takes a callback function as an argument and runs that callback function on each element present in the array. The difference is that filter returns a new array of the same or smaller length after applying the callback function on each element of the array. It returns only those elements for which the callback function returns true.

// map

let nums = [1,2,3,4,5,6,7,8,9,10];

let newarr = nums.map((val) => {
    return val*val;
});

console.log(newarr);
console.log(nums);

// filter -> creates a new array pf elements that give true for a condition/filter, ex. all even elements.

let arr = [1,2,3,4,5,6,7,8,9,10];

let even = arr.filter((val) => {
    return val%2 ===0;
})
console.log(even);

//reduce method --> performers some operation on the array and returns a single value. It takes a callback function as an argument and runs that callback function on each element present in the array. It returns a single value which is the result of the operation performed by the callback function.

let arrr = [1,2,3,4];

const output = arrr.reduce((res, curr) => {
    return res + curr;
});

console.log(output); 