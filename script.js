let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  const resultElement = document.getElementById("result");

  if (playerChoice === computerChoice) {
    resultElement.textContent = `It's a tie! Both chose ${playerChoice}.`;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    resultElement.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    playerScore++;
  } else {
    resultElement.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    computerScore++;
  }

  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
  document.getElementById("result").textContent = "";
}
