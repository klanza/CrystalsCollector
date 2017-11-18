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

//Variable to hold audio assets
var music = ["assets/audio/01.mp3", "assets/audio/02.mp3", "assets/audio/07.mp3",
             "assets/audio/09.mp3", "assets/audio/11.mp3", "assets/audio/13.mp3"]



function newAudio() {
    //Picks random track from list, plays, lowers volume
    audio = new Audio(music[Math.floor(Math.random() * 5)])
    audio.play();
    audio.volume = 0.05;
}

//Button functionality, checks game-state upon click and writes score
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
    //DEFUNCT
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
        //Player wins if score is equal to computer number
        //add to win counter
        ++wins
        //Functionality for showing text when winning, writes text, displays it, then fades
        $("#game-over").show()
        $("#game-over").html("Congratulations, you won!").fadeOut(3000)
        //Pauses old song, picks new random song
        audio.pause()
        newAudio()
        //Reset variables
        startGame()
    }

    if (currentScore > chosenNumber) {
        //Player loses if score is above computer number
        //add to loss counter
        ++losses
        //Functionality for showing text when losing, writes text, displays it, then fades
        $("#game-over").show()
        $("#game-over").html("Sorry! Try again!").fadeOut(3000)
        //Pauses old song, picks new random song
        audio.pause()
        newAudio()
        //Reset variables
        startGame()  
    }
}

//function calls to start game and start audio
startGame()
newAudio()