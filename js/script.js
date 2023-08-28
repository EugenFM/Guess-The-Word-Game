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
const remainingGuessesElement = document.querySelector(".remaining");

// Targets the span inside the paragraph for the remaining guesses
const remainingGuessesSpan = document.querySelector(".remaining span");

// Targets the paragraph where messages will appear when the player guesses a letter
const message = document.querySelector(".message");

// Targets the play again button
const playAgainButton = document.querySelector(".play-again");

// Global varaiable for testing the game before fetchin data from API
let word = "magnolia";

// empty array for guessed letters
let guessedLetters = [];

// variable for the number of guesses
let remainingGuesses = 8;


// async function to fetch data from text api
const getWord = async function () {
    const response = await fetch('https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt');
    
    // parse the data into text
    const words = await response.text();
    console.log(words);
    
    // array for the data fetched, separated by a delimiter
    const wordArray = words.split("\n");
    console.log(wordArray);

    // variable to pull a random word from the array
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    console.log(randomIndex);

    // reassign the value of the existing word variable by pulling a random word 
    word = wordArray[randomIndex].trim();
    addPlaceholders(word);
}   


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
getWord();

// click event for the guessButton
guessButton.addEventListener("click", function (e) {
    // to prevent reloading
    e.preventDefault();
// variable to capture the value of the input
    const input = letterInput.value;
    letterInput.value = "";
    message.innerText = "";
    
    const validateLetter = validatePlayerInput(input);
    // console.log(validateLetter);

   makeGuess(validateLetter) ;
    
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
        showGuessedLetters();
        
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
//    console.log(guessedLetters);

   showGuessedLetters();

    countRemainingGuesses(input);

   updateWordInProgress(guessedLetters);
}
};
 

// function to show the Guessed Letters
const showGuessedLetters = function () {
    guessedLettersElement.innerHTML = "";

// looping through each letter of the guessedLetters array
    for (const letter of guessedLetters) { 
        // create a list item for each letter
        const listItem = document.createElement("li");
        // content for each li is the letter
        listItem.innerText = letter;
        // append the list items to the ul (guessedLettersElement)
        guessedLettersElement.append(listItem);
    }
  };

//   function to update the word in progress
function updateWordInProgress (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    // console.log(wordArray);

    // empty array for matched letters
    const revealWord = [];
    // looping through each letter of the wordArray
    for (const letter of wordArray) {
        // push the letter to the revealWord array if it's a match
    if (guessedLetters.includes(letter)) {
        revealWord.push(letter);

    } else {
        revealWord.push("●");
    }
    }
    wordInProgress.innerText = revealWord.join("");
    checkIfWin();
}


// function to count the remaining guesses
const countRemainingGuesses = function (input) {

    word = word.toUpperCase();

    if (word.includes(input)) {
        message.innerText = `Good guess! The word has the letter ${input}.`
    } else {
        message.innerText = `Sorry, the word doesn't have the letter ${input}.`;
        remainingGuesses -= 1;
    }
    if (remainingGuesses === 0) {
        message.innerText = `Game Over! The word is ${word}.`;
        
    } else if (remainingGuesses === 1) {
        remainingGuessesSpan.innerText = `${remainingGuesses} guess`;

    } else {
        remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
    }
}

// function to check if the player won
const checkIfWin = function () {
    if (wordInProgress.innerText === word.toUpperCase()) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed correct the word! Yayyy!!</p>`;
       
        startOver()
    }
    
};


// function to hide and show elements
const startOver = function () {
    guessButton.classList.add('hide');
    remainingGuessesElement.classList.add('hide');
    guessedLettersElement.classList.add('hide');
    playAgainButton.classList.remove('hide');
}
// startOver();


playAgainButton.addEventListener('click', function() {
    message.classList.remove('win');
    message.innerText = "";
    guessedLettersElement.innerHTML = "";
    remainingGuesses = 8;
    guessedLetters = [];
    remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
    getWord();
   
   
    guessButton.classList.remove('hide');
    remainingGuessesElement.classList.remove('hide');
    guessedLettersElement.classList.remove('hide');
    playAgainButton.classList.add('hide');
});