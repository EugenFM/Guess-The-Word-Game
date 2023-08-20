// Guess the Word 

// Selects the list for guessed letters
const guessedLettersElement = document.querySelector(".guessed-letters");

// Selects the guess button element
const guessButton = document.querySelector(".guess");

// Selects the input where the player will guess a letter
const letterInput = document.querySelector(".letter");

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
// empty array for guessed letters
const guessedLetters = [];



// STEP 1
// Function to add placeholders for each letter
const addPlaceholders = function () {
//  empty array for the symbols (one for each letter)
    const placeholders = [];
// for... of loop to loop through each letter of the word magnolia
 for (let letter of word) {
     placeholders.push("●");
     wordInProgress.innerText = placeholders.join("");
 }
    
};
addPlaceholders(word);

// click event for the guessButton
guessButton.addEventListener("click", function (e) {
    // to prevent reloading
    e.preventDefault();
// variable to capture the value of the input
    const input = letterInput.value;
    letterInput.value = "";
    message.innerText = "";
    // console.log(input);
    validatePlayerInput(input);
   makeGuess(input) ;
    
});


// STEP 2
// function to check the player's input
const validatePlayerInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "Please enter a letter from A to Z";
    } else if (input.length > 1 && input.match(acceptedLetter)) {
        message.innerText = "Please enter a single letter from A to Z";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "We need you to enter a letter from A to Z, please :)";
    } else {
        message.innerText = "Thanks for the input, please keep guessing :)";

}
     return input;
}

// function to capture input
const makeGuess = function (input) {
// transform input letters to uppercase
    input = input.toUpperCase();
// checks if the players already guessed that letter
  if (guessedLetters.includes(input)) {
     message.innerText = "You already gueesed this letter, please try another one";
  } 
else {
   guessedLetters.push(input);
   console.log(guessedLetters);  
}
};
 

