const word = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const playAgain = document.getElementById("play-again");
const finalMessage = document.getElementById("final-message");
const bodyParts = Array.from(document.querySelectorAll('.body-part'));
console.log(bodyParts);


const words = ["application", "programming", "interface", "wizard"];

let selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord); //string
const x = selectedWord.split("");
console.log(x);
console.log(typeof x);

console.log(selectedWord);

const correctLetters = [];
console.log(correctLetters)
const wrongLetters = [];

function displayWords() {

    word.innerHTML = `${selectedWord.split('').map(letter => `<div class='letter'>${correctLetters.includes(letter) ? letter : ''}</div>`).join('')}`

    // console.log(word.innerText);

    const innerWord = word.innerText.replace(/\n/g, '');
    console.log(innerWord, word.innerText);

    if (innerWord === selectedWord) {
        finalMessage.innerText = 'Cngratulations! You won'
        popup.style.display = 'flex';

    }

}
function updateWrongLettersEl() {
    console.log('update wrong');
    wrongLettersEl.innerHTML = `${wrongLetters.length > 0 ? `<p>Wrong Letters </p>` : ''}
    
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    bodyParts.forEach((part, index) => {
        console.log(part);

        const errors = wrongLetters.length;
        if (index < errors) {
            console.log('jai baabe ki');

            part.style.display = 'block';

        }
        else {
            part.style.display = 'none';
        }
    })

    if (wrongLetters.length === bodyParts.length) {
        finalMessage.innerText = `Unfortunately You lost `;
        popup.style.display = 'flex';
    }


}
function showNotification() {
    // console.log();
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);

}

window.addEventListener('keydown', e => {
    let key = e.key;
    console.log(key.charCodeAt(0));
    if (key.charCodeAt(0) >= 65 && key.charCodeAt(0) <= 122) {
        const letter = e.key;

        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);

                displayWords();
            }
            else {
                showNotification();
            }
        }
        else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);

                updateWrongLettersEl();

            }
            else {
                showNotification();
            }

        }
    }


});

playAgain.addEventListener('click', () => {

    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)];
    displayWords();
    updateWrongLettersEl();

    popup.style.display = 'none'
})

displayWords();

