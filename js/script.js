// Guess the Word 

// Selects the list for guessed letters
const guessedLettersElement = document.querySelector(".guessed-letters");

// Selects the guess button element
const guessButton = document.querySelector(".guess");

// Selects the input where the player will guess a letter
const inputLetter = document.querySelector(".letter");

// Selects the paragraph for the word in progress
const wordInProgress = document.querySelector(".word-in-progress");

// Selects the element for the remaining guesses
const remainingGuesses = document.querySelector(".remaining");

// Targets the span inside the paragraph for the remaining guesses
const remainingGuessesSpan = document.querySelector(".remaining span");

// Targets the paragraph where messages will appear when the player guesses a letter
const message = document.querySelector(".message");

// Targets the play again button
const playAgainButton = document.querySelector(".play-again");

// Global varaiable for testing the game before fetchin data from API
const word = "magnolia";

// Function to add placeholders for each letter of the word until guessed (test word is magnolia)
const placeholders = function (word) {
    const placeholderLetters = [];
    // An array for populating the circle symbols for each letter of the word (magnolia)
    // A for..of method to loop through the characters of the word
    for (const letter of word) {
        // .push() method to add the circle symbols to the array placeholderLetters
        placeholderLetters.push("●");
        wordInProgress.innerText = placeholderLetters.join("");
        // console.log(letter);
    }
    
}
placeholders(word);

// a click event listener for the guess button
guessButton.addEventListener("click", function (e) {
    // to prevent the reloading behavior of the form
    e.preventDefault();
    const input = inputLetter.value;
    console.log(input);
    // to empty the value of the input after each guess
    inputLetter.value = "";
});

