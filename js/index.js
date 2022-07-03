let firstCard = 10
let secondCard = 7
let hasBlackJack = false
let sum = firstCard + secondCard

if (sum < 21) {
     console.log("Wanna draw another card?")
}
else if (sum === 21) {
     console.log("Blackjack!")
        hasBlackJack = true
}
else if (sum > 21) {
     console.log("Bust!")
}

console.log(hasBlackJack)