// Variable to store random value to be guessed
var chosenNumber;

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

$("#amethyst").click(function() {
    currentScore = crystalOne + currentScore
    $("#current-value").html(currentScore)
    winOrLose()
    console.log(currentScore)
});

$("#diamond").click(function() {
    currentScore = crystalTwo + currentScore
    $("#current-value").html(currentScore)
    winOrLose()
    console.log(currentScore)
});

$("#emerald").click(function() {
    currentScore = crystalThree + currentScore
    $("#current-value").html(currentScore)
    winOrLose()
    console.log(currentScore)
});

$("#ruby").click(function() {
    currentScore = crystalFour + currentScore
    $("#current-value").html(currentScore)
    winOrLose()
    console.log(currentScore)
});

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
    $("#losses").html("Losses: " + losses)

    //Clear game-over heading of text after a 3 second delay
    // setTimeout(function(){
    //     $("#game-over").html("");
    //   }, 3000);
    
    


    console.log(chosenNumber)
    console.log(crystalOne)
    console.log(crystalTwo)
    console.log(crystalThree)
    console.log(crystalFour)

}

function winOrLose() {

    if (currentScore === chosenNumber) {
        ++wins
        $("#game-over").show()
        $("#game-over").html("Congratulations, you won!").fadeOut(3000)
        startGame()
    }

    if (currentScore > chosenNumber) {
        ++losses
        $("#game-over").show()
        $("#game-over").html("Sorry! Try again!").fadeOut(3000)
        startGame()  
    }
}
startGame()