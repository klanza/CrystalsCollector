// Variable to store random value to be guessed
var chosenNumber = "";

// Variables to store random values of crystals
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;

// Current number as a sum of clicked crystals
var currentScore = 0

// Stat counter
var wins = 0
var losses = 0



function startGame() {
    //Pick random number between 19-120
    chosenNumber = Math.floor(Math.random()*(120-19 + 1)) + 19;

    //Create random variables tied to each
    crystalOne = Math.floor(Math.random()*12-1 + 1) + 1;
    crystalTwo = Math.floor(Math.random()*12-1 + 1) + 1;
    crystalThree = Math.floor(Math.random()*12-1 + 1) + 1;
    crystalFour = Math.floor(Math.random()*12-1 + 1) + 1;

    //Reset the score
    currentScore = 0
    $("#random-value").html(chosenNumber)
    $("#current-value").html(currentScore)
    $("#wins").html("Wins: " + wins)
    $("#losses").html("Losses: " + wins)
    
    console.log(chosenNumber)
    console.log(crystalOne)
    console.log(crystalTwo)
    console.log(crystalThree)
    console.log(crystalFour)

}

$("#amethyst").click(function() {
    currentScore = crystalOne + currentScore
    $("#current-value").html(currentScore)
    console.log(currentScore)
});

$("#diamond").click(function() {
    currentScore = crystalTwo + currentScore
    $("#current-value").html(currentScore)
    console.log(currentScore)
});

$("#emerald").click(function() {
    currentScore = crystalThree + currentScore
    $("#current-value").html(currentScore)
    console.log(currentScore)
});

$("#ruby").click(function() {
    currentScore = crystalFour + currentScore
    $("#current-value").html(currentScore)
    console.log(currentScore)
});

startGame()