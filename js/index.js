let firstCard = 10
let secondCard = 7

let sum = firstCard + secondCard

if (sum < 21) {
     console.log("Wanna draw another card?")
}
else if (sum === 21) {
     console.log("Blackjack!")
}
else if (sum > 21) {
     console.log("Bust!")
}
