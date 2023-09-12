const jsResult = document.querySelector('.js-results');
const jsChoices = document.querySelector('.js-choices');
const jsScores = document.querySelector('.js-scores');

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0, 
    losses: 0, 
    ties: 0
};

function getRandomNumber() {
    const randomNumber = Math.ceil(Math.random() * 3);
    return randomNumber;
}

function getComputerChoice() {
    const randomNumber = getRandomNumber();

    if (randomNumber === 1) {
    computerChoice = 'rock';
    } else if (randomNumber === 2) {
        computerChoice = 'paper';
    } else if (randomNumber === 3) {
        computerChoice = 'scissors';
    } else {
        computerChoice = 'ERROR';
    }

    return computerChoice;
}

function getResult(playerChoice) {
    const computerChoice = getComputerChoice();
    let result = '';

    switch (playerChoice) {
        case 'rock':
            if (computerChoice === 'paper') {
                result = 'You lose';
            } else if (computerChoice === 'scissors') {
                result = 'You win!';
            } else {
                result = 'Tie';
            }
            break;

        case 'paper':
            if (computerChoice === 'rock') {
                result = 'You win!';
            } else if (computerChoice === 'scissors') {
                result = 'You lose';
            } else {
                result = 'Tie';
            }
            break;

        case 'scissors':
            if (computerChoice === 'rock') {
                result = 'You lose';
            } else if (computerChoice === 'paper') {
                result = 'You win!';
            } else {
                result = 'Tie';
            }
            break;

        default:
            result = 'ERROR';
            break;
    }

    updateScore(result);

    updateGraphics(playerChoice, computerChoice, result);
}

function updateScore(result) {
    if (result === 'You win!') {
        score.wins++;
    } else if (result === 'You lose') {
        score.losses++;
    } else {
        score.ties++;
    }

    setScoreToStorage();
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    jsChoices.innerHTML = '&nbsp';

    jsResult.innerHTML = '&nbsp';

    jsScores.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

    setScoreToStorage();
}

function updateGraphics(playerChoice, computerChoice, result) {
    jsChoices.innerHTML = `You <img class="move-icon" src="./images/${playerChoice}-emoji.png"> <img class="move-icon" src="./images/${computerChoice}-emoji.png"> Computer `;

    jsResult.innerHTML = `${result}`;

    jsScores.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function setScoreToStorage() {
    localStorage.setItem('score', JSON.stringify(score));
}