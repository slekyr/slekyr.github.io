const alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u" , "v", "w", "x", "y", "z"];
const alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const submitButton = document.querySelector(".submit-btn");
const decodeButton = document.querySelector(".decode-btn");
const secretMessageDisplay = document.querySelector("#secret-message");
const messageDisplay = document.querySelector("#message");

let message = "";
let messageArray;
let secretMessage = "";
let secretMessageArray;

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
                secretMessage += alphabetLower[(j + 3) % 26];
            }
        }
    
        for (let k = 0; k < alphabetUpper.length; k++) {
            const alphabetUpChar  = alphabetUpper[k];
    
            if (messageChar === alphabetUpChar) {
                secretMessage += alphabetUpper[(k + 3) % 26];
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
                message += alphabetLower[(j - 3 + 26) % 26];
            }
        }
    
        for (let k = 0; k < alphabetUpper.length; k++) {
            const alphabetUpChar  = alphabetUpper[k];
    
            if (secretMessageChar === alphabetUpChar) {
                message += alphabetUpper[(k - 3 + 26) % 26];
            }
        }
    }

    secretMessage = "";
    secretMessageArray.pop();
    messageDisplay.value = message;
    message = "";
    
}

decodeButton.addEventListener("click", decodeSecretMessage);