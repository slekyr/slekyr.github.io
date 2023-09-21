const cardArray = [
    {
        name: "fries", 
        image: "./images/memory-game/fries.png"
    },
    {
        name: "cheeseburger", 
        image: "./images/memory-game/cheeseburger.png"
    },
    {
        name: "hotdog", 
        image: "./images/memory-game/hotdog.png"
    },
    {
        name: "ice-cream", 
        image: "./images/memory-game/ice-cream.png"
    },
    {
        name: "milkshake", 
        image: "./images/memory-game/milkshake.png"
    },
    {
        name: "pizza", 
        image: "./images/memory-game/pizza.png"
    },
    {
        name: "fries", 
        image: "./images/memory-game/fries.png"
    },
    {
        name: "cheeseburger", 
        image: "./images/memory-game/cheeseburger.png"
    },
    {
        name: "hotdog", 
        image: "./images/memory-game/hotdog.png"
    },
    {
        name: "ice-cream", 
        image: "./images/memory-game/ice-cream.png"
    },
    {
        name: "milkshake", 
        image: "./images/memory-game/milkshake.png"
    },
    {
        name: "pizza", 
        image: "./images/memory-game/pizza.png"
    }
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");

let cardsChosenName = [];
let cardsChosenId = [];
const cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
       const card = document.createElement("img");
       card.setAttribute("src", "./images/memory-game/blank.png")
       card.setAttribute("data-id", i);
       card.addEventListener("click", flipCard);
       gridDisplay.append(card);
    }
}

createBoard();

function checkMatch() {
    const cards = document.querySelectorAll("#grid img")
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId === optionTwoId) {
        alert("you have clicked the same image!");
        cards[optionOneId].setAttribute("src", "./images/memory-game/blank.png");
    } else if (cardsChosenName[0] === cardsChosenName[1]) {
        alert("you found a match");
        cards[optionOneId].setAttribute("src", "./images/memory-game/white.png");
        cards[optionTwoId].setAttribute("src", "./images/memory-game/white.png");
        cards[optionOneId].removeEventListener("click", flipCard);
        cards[optionTwoId].removeEventListener("click", flipCard);
        cardsWon.push(cardsChosenName);
    } else {
        cards[optionOneId].setAttribute("src", "./images/memory-game/blank.png");
        cards[optionTwoId].setAttribute("src", "./images/memory-game/blank.png");
        alert("sorry, try again!")
    }

    cardsChosenName = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;

    if (cardsWon.length === (cardArray.length/2)) {
        resultDisplay.innerHTML = "Congratulations, you found them all!"
    }
    
}

function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosenName.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].image);

    if (cardsChosenName.length === 2) {
        setTimeout(checkMatch, 500)
    }

}