let firstCard = 10
let secondCard = 7
let cards = [firstCard, secondCard] // Creating an array.
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
     console.log("Starting game")
     render()
}

function render() {
     // It renders first and second card.
     cardsEl.textContent = "Cards : " + cards[0] + " " + cards[1]
     // It renders all the cards.
     
     sumEl.textContent = "Sum : " + sum
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

function newCard(){
     console.log("Drawing new card")
     let newCard = 2
     sum += newCard
     render()
}