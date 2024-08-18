// take input from user
let g_n = prompt("Guess a number between 1 to 10 : ")

// generate a random number between 1 to 10
let r_n = math.random(1, 10)

// compare both number and show result
if (g_n == r_n) {
console.log("You Win")
}
else{
    console.log("You Lose!\nThe number was",r_n)
}
