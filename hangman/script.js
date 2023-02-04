const wordEl = document.getElementById("word");
const wrongLetterEl = document.getElementById("wrong-letter");
const playAgainBtn = document.getElementById("play-again");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");

const words = [
  "application",
  "programming",
  "cuddle",
  "melody",
  "fragrance",
  "interface",
  "wizard",
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = ["w", "i", "z", "a", "r", "d"];
const wrongLetters = [];

//Show hidden word
function displayWord() {
  wordEl.innerHTML = `${selectedWord
    .split("")
    .map(
      (letter) =>
        `<span class="letter">${
          correctLetters.includes(letter) ? letter : ""
        }</span>`
    )
    .join("")}`;

  const innerWord = wordEl.innerText.replace(/\n/g, ""); //떨어져 나오던 문자들을 한줄에 나오도록 정규식으로 바꿔준다.
  console.log(wordEl.innerText, innerWord); //wordEl.innerText: 단어의 문자들이 떨어져서 나옴

  if (innerWord === selectedWord) {
    finalMessage.innerText = "Congratulations! You won! 🥳";
    popup.style.display = "flex";
  }
}

displayWord();
