var computerChoices = ['0', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedNumbers = [];
var NumberToGuess = null;



//Lets the computer select a random Number from the available choices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Allows the user 9 guesses
// guesses = guesses || 9
var updateGuessesLeft = function() {
  // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateNumberToGuess = function() {
  this.NumberToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {
  // Here we take the guesses the user has tried -- then display it as Numbers separated by commas.
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedNumbers.join(', ');
};
// Function will be called when we reset everything
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedNumbers = [];

  updateNumberToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateNumberToGuess();
updateGuessesLeft();


//When key is released it becomes the users guess
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedNumbers.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == NumberToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Yes, you are psychic!");
                reset();
            }
        }else if(guessesLeft == 0){
            // Then we will loss and we'll update the html to display the loss
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Sorry, you're not psychic, maybe try again?");
            // Then we'll call the reset.
            reset();
        }
};
