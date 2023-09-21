const dieButtonDisplay = document.querySelector(".dice-buttons-container");
const diceImagesRootDiv = document.querySelector(".dice-images-container");
const totalValueDisplay = document.querySelector(".total-dice-value");
let diceImagesDisplay = null;
let rollDiceBtn = document.querySelector(".roll-dice-btn");

// create and display six dice buttons
function createDiceButtons() {
    for (let i = 1; i <= 6; i++) {
        const dieButton =  document.createElement("button");
        dieButton.classList.add("dice-button");
        dieButton.innerHTML = i;
        dieButtonDisplay.append(dieButton);

        // display the number of dice selected
        dieButton.addEventListener("click", () => {
            displayNumDice(i);
            totalValueDisplay.innerHTML = "";
        });
    }
}
createDiceButtons();

// display the number of dice
function displayNumDice(numDice) {
    // remove old images if present
    if (diceImagesDisplay) {
        diceImagesDisplay.remove();
    } 
    
    // create dice image div
    diceImagesDisplay = document.createElement("div");
    diceImagesDisplay.classList.add("dice-image-container");
    diceImagesRootDiv.append(diceImagesDisplay);

    // create dice images and insert into div via loop
    for (let i = 1; i <= numDice; i++) {
        const dieImage =  document.createElement("img");
        dieImage.classList.add("dice-img");
        dieImage.src = `./images/roll-dice/b${i}.png`;
        diceImagesDisplay.append(dieImage);
    }
}
displayNumDice(6);

// create random number 1 to 6 return image string with random
function rollDie() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}

// on click roll die display new die
rollDiceBtn.addEventListener("click", () => {
    const allDieImages = document.querySelectorAll("img");
    let totalValue = 0;
    allDieImages.forEach(image => {
        const randomNumber = rollDie();
        image.src = `./images/roll-dice/b${randomNumber}.png`;
        totalValue += randomNumber;
    })
    totalValueDisplay.innerHTML = totalValue;
});