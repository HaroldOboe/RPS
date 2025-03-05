// JavaScript for 16_Rock_Paper_Scissors
function game(choice) {
  let computerChoice = Math.floor(Math.random() * 3);
  let choices = ["rock", "paper", "scissors"];
  document.getElementById("com-move").innerHTML =
    "The computer chose: " + choices[computerChoice] + ".";
  if (choice === computerChoice) {
    document.getElementById("result").innerHTML = "It's a tie!";
  }
  if (choice === 0 && computerChoice === 2) {
    document.getElementById("result").innerHTML = "You win!";
  } else if (choice === 1 && computerChoice === 0) {
    document.getElementById("result").innerHTML = "You win!";
  } else if (choice === 2 && computerChoice === 1) {
    document.getElementById("result").innerHTML = "You win!";
  } else {
    document.getElementById("result").innerHTML = "You lose!";
  }
}
