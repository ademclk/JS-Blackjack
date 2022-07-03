let firstCard = getRandomCard()
let secondCard = getRandomCard()
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

function getRandomCard() {
     return Math.floor(Math.random() * 13) + 1
}

function start() {
     console.log("Starting game")
     render()
}

function render() {
     // It renders first and second card.
     cardsEl.textContent = "Cards : "
     // It renders all the cards.
     for (let i = 0; i < cards.length; i++) {
          cardsEl.textContent += cards[i] + " "
     }
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
     let newCard = getRandomCard()
     cards.push(newCard)
     sum += newCard
     render()
}