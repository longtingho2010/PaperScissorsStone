const button = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
let playerScore = 0;
let computerScore = 0;

button.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultEl.innerText = result;
  });
});

const computerPlay = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomChoices = Math.floor(Math.random() * choices.length);
  return choices[randomChoices];
};

const playRound = (player, computer) => {
  if (player == computer) {
    return "It's a tie!!";
  } else if (
    (player == "rock" && computer == "scissors") ||
    (player == "scissors" && computer == "paper") ||
    (player == "paper" && computer == "rock")
  ) {
    playerScore++;
    playerScoreEl.innerText = playerScore;
    return `You win! 
    User: ${player} beats computer: ${computer} `;
  } else {
    computerScore++;
    computerScoreEl.innerText = computerScore;
    return `You lose! 
    computer: ${computer} beats Your: ${player} `;
  }
};
