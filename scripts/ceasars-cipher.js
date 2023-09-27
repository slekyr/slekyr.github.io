const alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u" , "v", "w", "x", "y", "z"];
const alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const submitButton = document.querySelector(".submit-btn");
const decodeButton = document.querySelector(".decode-btn");

const secretMessageDisplay = document.querySelector("#secret-message");
const messageDisplay = document.querySelector("#message");

const numberSliderDisplay = document.querySelector("#number-slider");
const cipherNumberDisplay = document.querySelector(".cipher-number");

let message = "";
let messageArray;
let secretMessage = "";
let secretMessageArray;
let cipherNumber;

cipherNumberDisplay.innerHTML = numberSliderDisplay.value;

numberSliderDisplay.addEventListener("input", () => {
    cipherNumberDisplay.innerHTML = numberSliderDisplay.value;
    cipherNumber = Number(numberSliderDisplay.value);
    return cipherNumber;
})

function createSecretMessage() {
    message = document.querySelector("#message").value;
    messageArray = message.split("");

    for (let i = 0; i < message.length; i++) {
        const messageChar = message[i];
    
        if (messageChar === " " || messageChar === "." || messageChar === "'" || messageChar === ",") {
            secretMessage += messageChar;
        }
    
        for (let j = 0; j < alphabetLower.length; j++) {
            const alphaLowChar  = alphabetLower[j];
    
            if (messageChar === alphaLowChar) {
                secretMessage += alphabetLower[(j + cipherNumber) % 26];
            }
        }
    
        for (let k = 0; k < alphabetUpper.length; k++) {
            const alphabetUpChar  = alphabetUpper[k];
    
            if (messageChar === alphabetUpChar) {
                secretMessage += alphabetUpper[(k + cipherNumber) % 26];
            }
        }
    }

    message = "";
    messageArray.pop();
    secretMessageDisplay.value = secretMessage;
    secretMessage = "";
}

submitButton.addEventListener("click", createSecretMessage);

function decodeSecretMessage() {
    secretMessage = document.querySelector("#secret-message").value;
    secretMessageArray = secretMessage.split("");

    for (let i = 0; i < secretMessage.length; i++) {
        const secretMessageChar = secretMessage[i];
    
        if (secretMessageChar === " " || secretMessageChar === "." || secretMessageChar === "'" || secretMessageChar === ",") {
            message += secretMessageChar;
        }
    
        for (let j = 0; j < alphabetLower.length; j++) {
            const alphaLowChar  = alphabetLower[j];
    
            if (secretMessageChar === alphaLowChar) {
                message += alphabetLower[(j - cipherNumber + 26) % 26];
            }
        }
    
        for (let k = 0; k < alphabetUpper.length; k++) {
            const alphabetUpChar  = alphabetUpper[k];
    
            if (secretMessageChar === alphabetUpChar) {
                message += alphabetUpper[(k - cipherNumber + 26) % 26];
            }
        }
    }

    secretMessage = "";
    secretMessageArray.pop();
    messageDisplay.value = message;
    message = "";
    
}

decodeButton.addEventListener("click", decodeSecretMessage);
