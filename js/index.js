let cards = [] // Creating an array.
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
// More powerful than getElementById. Does the same thing.
let cardsEl = document.getElementById("cards-el")
let sum = 0

function getRandomCard() {
     let temp = Math.floor(Math.random() * 13) + 1
     if (temp === 1) {
          return 11
     }
     else if (temp > 10) {
          return 10
     }
     else {
          return temp
     }
}

function start() {
     console.log("Starting game")
     isAlive = true
     let firstCard = getRandomCard()
     cards.push(firstCard)
     let secondCard = getRandomCard()
     cards.push(secondCard)
     sum = cards[0] + cards[1]
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