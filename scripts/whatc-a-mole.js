const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const startBtn = document.querySelector(".start-button");
const startingTime = 10;
const startingScore = 0;

let result = startingScore;
let hitPosition;
let currentTime = startingTime;
let timerId = null;
let countDownTimerId = null;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove("mole");
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add("mole");

    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener("mousedown", () => {
        if (square.id === hitPosition) {
            result++;
            score.innerHTML = result;
            hitPosition = null;
            square.classList.remove("mole");
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 500);
}

function countDown() {
    countDownTimerId = setInterval(countDownDisplay, 1000);
}

function countDownDisplay() {
    timeLeft.innerHTML = currentTime;
    console.log(currentTime);

    if (currentTime === 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        setTimeout(function() {
            alert("Game Over");
        }, 100);
        currentTime = startingTime;
        result = startingScore;
        return;
    }
    
    currentTime--;
}

startBtn.addEventListener("click", () => {
    countDown();
    moveMole();
});

