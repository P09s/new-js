// //question 1
// for(let i =0; i<=100; i++) {
//     if(i%2 ===0) {
//         console.log(i); 
//     }
// }

// question2 

let gameNumber = 100;

let userNumber = prompt("Guess the game number");

while (userNumber !=  gameNumber) {
    userNumber = prompt("Guess the game number again");
}
console.log("CONGRATULATIONS!!! YOU GUESSED IT RIGHT");