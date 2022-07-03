let firstCard = 10
let secondCard = 7
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sum = firstCard + secondCard

function start() {
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