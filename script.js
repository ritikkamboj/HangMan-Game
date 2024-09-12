const word = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const playAgain = document.getElementById("play-again");
const finalMessage = document.getElementById("final-message");

const words = ["application", "programming", "interface", "wizard"];

const selecteWord = words[Math.floor(Math.random() * words.length)];
console.log(selecteWord); //string
const x = selecteWord.split("");
console.log(x);
console.log(typeof x);

console.log(selecteWord);

const correctLetters = [...selecteWord];
console.log(correctLetters)
const wrongLetters = [];

function displayWords() {

    word.innerHTML = `${selecteWord.split('').map(letter => `<div class='letter'>${correctLetters.includes(letter) ? letter : ''}</div>`).join('')}`

    // console.log(word.innerText);

    const innerWord = word.innerText.replace(/\n/g, '');
    console.log(innerWord, word.innerText);

    if (innerWord === selecteWord) {
        finalMessage.innerText = 'Cngratulations! You won'
        popup.style.display = 'flex';

    }

}


displayWords();

