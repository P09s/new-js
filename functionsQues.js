function vowels (str) {
    let count = 0;
    for(const char of str){
        if(
            char === 'a' ||
            char === 'e' ||
            char === 'i' ||
            char === 'o' ||
            char === 'u'
        ){
            count++;
        }
    }
    return count;
}

// question 2 --> square of each element in an array using forEach

let arr = [1,2,3,4,5,6,7,8,9,10];
arr.forEach((val)=> {
    sq = val*val;
    console.log(sq);
})

//or

let calSq = (val) => {
    console.log(val*val);
}
arr.forEach(calSq);