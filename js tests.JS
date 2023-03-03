/*
var yourName = prompt("Enter your name: ")
var repetitions = prompt("How many times do you want to have your name repeated?")

for (var index = 0; index < repetitions; index++){
    document.write(index + yourName + "<br>");
}
*/

function guessingGame() {
  var x = Math.round(Math.random() * 50 + 1);
  var input = "";

  while (input != x){
    input = prompt("Enter a number:");

    if (input < x){
      alert("Input lower than chosen number");
    }
    else if (input > x){
      alert("Input greater than chosen number");
    }
    else if (input == x){
      alert("You win! Input matches chosen number");
      var name = prompt("Enter your name for a prize: ")

      for (var i = 0; i < 500; i++){
        //document.write(name + "You are a winner");
        document.getElementById('name').innerHTML += "You are a winner " + name + " ";
      }
    }
  }
}

var x = Math.floor(Math.random() * 50 + 1);
var guesses = 0;

function guessingGame2() {
  var input = document.getElementById('guess').value;
  var msg = "";
  var scoreboard = document.getElementById('scoreboard');

    if (input < x){
      guesses++;
    msg = "Too Low  " + guesses + " guesses";
      document.getElementById('name').innerHTML = "";
    }
    else if (input > x){
      guesses++;
      msg = "Too High " + guesses + " guesses";
      document.getElementById('name').innerHTML = "";
    }
    else if (input == x){
      msg = "You Win!";
      scoreboard.innerHTML += "You guessed " + x + " in " + guesses + <br>;
      document.getElementById('name').innerHTML = "";
      var name = prompt("Enter your name for a prize: ");

      for (var i = 0; i < 500; i++){
        document.getElementById('name').innerHTML += "You are a winner " + name + " ";
      }


      newGame();
    }
    document.getElementById('result').innerHTML = msg;
    document.getElementById('guess').focus();
    document.getElementById('guess').select();
  }

  function newGame(){
    x = Math.floor(Math.random() * 50 + 1);
    guesses = 0;

    document.getElementById('guess').focus();
    document.getElementById('guess').select();
  }



function drawCat(){
  document.getElementById('cat').innerHTML = " =/^.^\\= ";
  //document.write(" =^.^= ");
}
