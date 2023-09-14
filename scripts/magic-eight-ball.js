const magicEightBallImage = document.querySelector(".js-magic-image");
const shakeBallBtn = document.querySelector(".js-shake-ball-btn");

function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 20 );
    return randomNumber;
}

function getMagicAnswer() {
    let magicAnswer = {
        text: " ", 
        number: 0
    };

    const randomNumber = getRandomNumber();

    switch (randomNumber) {
        case 0:
            magicAnswer.text = "It is certain";
            break;
        case 1:
            magicAnswer.text = "It is decidedly so";
            break;
        case 2:
            magicAnswer.text = "Without a doubt";
            break;
        case 3:
            magicAnswer.text = "Yes, definitely";
            break;
        case 4:
            magicAnswer.text = "You may rely on it";
            break;
        case 5:
            magicAnswer.text = "As I see it, yes";
            break;
        case 6:
            magicAnswer.text = "Most likely";
            break;
        case 7:
            magicAnswer.text = "Outlook good";
            break;
        case 8:
            magicAnswer.text = "Yes";
            break;
        case 9:
            magicAnswer.text = "Signs point to yes";
            break;
        case 10:
            magicAnswer.text = "Reply hazy, try again";
            break;
        case 11:
            magicAnswer.text = "Ask again later";
            break;
        case 12:
            magicAnswer.text = "Better not tell you now";
            break;
        case 13:
            magicAnswer.text = "Cannot predict now";
            break;
        case 14:
            magicAnswer.text = "Concentrate and ask again";
            break;
        case 15:
            magicAnswer.text = "Don't count on it";
            break;
        case 16:
            magicAnswer.text = "My reply is no";
            break;
        case 17:
            magicAnswer.text = "My sources say no";
            break;
        case 18:
            magicAnswer.text = "Outlook not so good";
            break;
        case 19:
            magicAnswer.text = "Very doubtful";
            break;
        default:
            magicAnswer.text = "ERROR";
            break;
    }

    magicAnswer.number = randomNumber;

    magicEightBallImage.innerHTML = `<img src="./images/magic-eight-ball/${magicAnswer.number}.png">`

    console.log(magicAnswer);

    return magicAnswer;
}

shakeBallBtn.addEventListener("click", function() {
    console.log("button clicked");
    getMagicAnswer();
})
