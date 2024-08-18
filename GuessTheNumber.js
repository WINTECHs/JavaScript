// take input from user
let g_n = prompt("Guess a number between 1 to 5 : ")

// generate a random number between 1 to 5
let r_n = Math.floor(Math.random(1, 5)*10)

// compare both number and show result
if (g_n == r_n) {
console.log("You Win")
}
else{
    console.log("You Lose!\nThe number was",r_n)
}