let firstCard = 10
let secondCard = 7
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
// More powerful than getElementById. Does the same thing.
let cardsEl = document.getElementById("cards-el")
let sum = firstCard + secondCard

function start() {
     sumEl.textContent = "Sum : " + sum
     cardsEl.textContent = "Cards : " + firstCard + " " + secondCard
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
     messageEl.textContent = message
}