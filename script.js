// GMN
let totalGuesses = 0;
var totalScore = 0;
let correctGuesses = 0;
var lives = 5;
let highscore = 0;
var playerGuess = [];

randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

// score
function scoreSubmit() {
  document.getElementById("highscore").innerHTML = "Highscore: " + highscore;
  if (totalScore > highscore) {
    highscore = totalScore;
  } else {
    highscore = highscore;
  }
}


function resetFunction() {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber);
  document.getElementById("submitBtn").disabled = false;
  document.getElementById("win").innerHTML = "";
  correctGuesses = 0;
  totalScore = 0;
}

// submit
function myFunction() {
  var x, text;
  x = document.getElementById("numb").value;

// game
  if (correctGuesses == 19) {
    document.getElementById("win").innerHTML = "Congratulations you win nothing, but hey you can tell all your friends you won.";
    document.getElementById("submitBtn").disabled = true;
  }


  if (x < 1 || x > 20) {
    text = "NOT SO FAST... You Must enter a number 1 - 20 to proceed on your journey. ";
    document.getElementById("response").innerHTML = text;


  } else if (x == randomNumber) {
    text = "Youre lucky.";
    document.getElementById("response").innerHTML = text;
    document.getElementById("answer").innerHTML =
      "The number I chose was " + randomNumber;
    document.getElementById("yourGuess").innerHTML = "You chose" + x;
    totalScore = totalScore + 5;
    document.getElementById("score").innerHTML = "Score: " + totalScore;
    document.getElementById("corGuess").innerHTML =
      "Correct Guesses: " + ++correctGuesses;
    randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber);


  } else {
    text = "Try Again";
    document.getElementById("response").innerHTML = text;
    document.getElementById("yourGuess").innerHTML = "You chose" + x;
    totalScore = totalScore - 2;
    document.getElementById("score").innerHTML = "Score: " + totalScore;
    document.getElementById("geuNum").innerHTML = "Guessed Numbers:" + x;
  }

  playerGuess.push(x);
  document.getElementById("gueNum").innerHTML =
    "Numbers Guessed: " + playerGuess;
}