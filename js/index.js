let firstCard = 10
let secondCard = 7
let hasBlackJack = false
let isAlive = true
let message = ""
let sum = firstCard + secondCard

if (sum < 21) {
     message = "Wanna draw another card?"
}
else if (sum === 21) {
     message = "Blackjack!"
     hasBlackJack = true
}
else if (sum > 21) {
     message = "Bust!"
     isAlive = false
}

console.log(hasBlackJack)
console.log(isAlive)
console.log(message)