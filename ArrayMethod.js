//forEach is a method that is used to iterate over an array. It takes a callback function as an argument and runs that callback function on each element present in the array.
//Map is also used to iterate over an array. It also takes a callback function as an argument and runs that callback function on each element present in the array. The difference is that forEach just iterates over the array and runs the callback but map returns a new array of the same length after applying the callback function on each element of the array.
//Filter is also used to iterate over an array. It also takes a callback function as an argument and runs that callback function on each element present in the array. The difference is that filter returns a new array of the same or smaller length after applying the callback function on each element of the array. It returns only those elements for which the callback function returns true.

// map

let nums = [1,2,3,4,5,6,7,8,9,10];

let newarr = nums.map((val) => {
    return val;
});

console.log(newarr);