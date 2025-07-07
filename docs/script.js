let userScore = 0;
let computerScore = 0;

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("user-choice").textContent = `Your Choice: ${userChoice}`;
  document.getElementById("computer-choice").textContent = `Computer's Choice: ${computerChoice}`;

  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a Tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    result = "You Win!";
    userScore++;
  } else {
    result = "Computer Wins!";
    computerScore++;
  }

  document.getElementById("winner").textContent = `Result: ${result}`;
  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("user-choice").textContent = `Your Choice: -`;
  document.getElementById("computer-choice").textContent = `Computer's Choice: -`;
  document.getElementById("winner").textContent = `Result: -`;
}
