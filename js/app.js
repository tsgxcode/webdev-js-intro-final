"use strict";
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to check the user's guess
function checkGuess(secretNumber, userGuess) {
    if (userGuess < secretNumber) {
        return "Too low! Try again.";
    } else if (userGuess > secretNumber) {
        return "Too high! Try again.";
    } else {
        return "Congratulations! You guessed the correct number!";
    }
}