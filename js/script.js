// Targets the unordered list for guessed letters
const guessedLetters = document.querySelector(".guessed-letters");
// Targets the guess the letters button
const guessButton = document.querySelector(".guess");
// Selects the text input element
const letterInput = document.querySelector(".letter");
// Selects the empty paragraph element for the word in progress
const wordInProgress = document.querySelector(".word-in-progress");
// Selects the paragraph for remaining guesses
const remainingGuesses = document.querySelector(".remaining");
// Targets the span for remaining guesses
const remainingGuessSpan = document.querySelector("span");
// Selects the paragraph where messages will appear after guessing a letter
const message = document.querySelector(".message");
// Targets the play again button
const playAgainButton = document.querySelector(".play-again");

// Here is a global variable with a value of magnolia
const word = "magnolia";

// Function to add placeholders for each letter
const placeholders = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        placeholderLetters.push("●");
        console.log(letter);
        wordInProgress.innerText = placeholderLetters.join("");
    }
}
placeholders(word);

// An Event Listener for the guess button
guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = "";

});