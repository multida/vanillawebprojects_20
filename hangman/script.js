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

const correctLetters = [];
const wrongLetters = [];

//Show hidden word
function displayWord() {
  wordEl.innerHTML = `${
    selectedWord
      .split("")
      .map(
        (letter) =>
          `<span class="letter">${
            correctLetters.includes(letter) ? letter : ""
          }</span>`
      )
      .join("") //다시 빈무열자로 바꿔줌?
  }`;

  const innerWord = wordEl.innerText.replace(/\n/g, ""); //떨어져 나오던 문자들을 한줄에 나오도록 정규식으로 바꿔준다.
  console.log(wordEl.innerText, innerWord); //wordEl.innerText: 단어의 문자들이 떨어져서 나옴

  if (innerWord === selectedWord) {
    finalMessage.innerText = "Congratulations! You won! 🥳";
    popup.style.display = "flex";
  }
}

//Update the wrong letters
function updateWrongLettersEl() {
  console.log("Update wrong");
}

//Show notification
function showNotification() {
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}

//Keydown letter press
window.addEventListener("keydown", (e) => {
  //console.log(e.keyCode);
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;
    if (selectedWord.includes(letter))
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord();
      } else {
        showNotification();
      }
  } else {
    if (!wrongLetters.includes(letter)) {
      wrongLetters.push(letter);

      updateWrongLettersEl();
    } else {
      showNotification();
    }
  }
});

displayWord();
