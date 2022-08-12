const nameInput = document.getElementById("name-input");
const questionInput = document.getElementById("question-input");
const askBtn = document.getElementById("ask-btn");
const inputDisplayEl = document.getElementById("input-display-el");
const answerDisplayEl = document.getElementById("answer-display-el");

function getRandomNumber() {
    const randomNumber = Math.floor( Math.random() * 20 );
    return randomNumber;
}

function getMagicAnswer() {
    let magicAnswer = "";
    const randomNumber = getRandomNumber();
    switch (randomNumber) {
        case 0:
            magicAnswer = "It is certain";
            break;
        case 1:
            magicAnswer = "It is decidedly so";
            break;
        case 2:
            magicAnswer = "Without a doubt";
            break;
        case 3:
            magicAnswer = "Yes, definitely";
            break;
        case 4:
            magicAnswer = "You may rely on it";
            break;
        case 5:
            magicAnswer = "As I see it, yes";
            break;
        case 6:
            magicAnswer = "Most likely";
            break;
        case 7:
            magicAnswer = "Outlook good";
            break;
        case 8:
            magicAnswer = "Yes";
            break;
        case 9:
            magicAnswer = "Signs point to yes";
            break;
        case 10:
            magicAnswer = "Reply hazy, try again";
            break;
        case 11:
            magicAnswer = "Ask again later";
            break;
        case 12:
            magicAnswer = "Better not tell you now";
            break;
        case 13:
            magicAnswer = "Cannot predict now";
            break;
        case 14:
            magicAnswer = "Concentrate and ask again";
            break;
        case 15:
            magicAnswer = "Don't count on it";
            break;
        case 16:
            magicAnswer = "My reply is no";
            break;
        case 17:
            magicAnswer = "My sources say no";
            break;
        case 18:
            magicAnswer = "Outlook not so good";
            break;
        case 19:
            magicAnswer = "Very doubtful";
            break;
        default:
            magicAnswer = "ERROR";
            break;
    }
    return magicAnswer;
}

askBtn.addEventListener("click", function(){
    console.log("button clicked")
    render();
})

function render() {
    const name = nameInput.value;
    const question = questionInput.value;

    if (name == false || question == false) {
        answerDisplayEl.textContent = "Please enter your name and a question"
        nameInput.value = "";
        questionInput.value = "";
    } else {
        inputDisplayEl.textContent = `${name} asks: ${question}?`
        answerDisplayEl.textContent = getMagicAnswer();
        nameInput.value = "";
        questionInput.value = "";
    }
}
