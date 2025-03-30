const choices = ["rock", "paper", "scissors"];
const images = {
    rock: "./hand.png",
    paper: "./hand-paper.png",
    scissors: "./scissors.png"
};

const playerImg = document.getElementById("player-choice");
const computerImg = document.getElementById("computer-choice");
const resultText = document.getElementById("result-text");
const playAgainBtn = document.querySelector(".play_again");

document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];

        // Update images
        playerImg.src = images[playerChoice];
        computerImg.src = images[computerChoice];

        // Determine the result
        let result = getWinner(playerChoice, computerChoice);
        resultText.textContent = result;

        // Show play again button
        playAgainBtn.style.display = "block";
    });
});

playAgainBtn.addEventListener("click", function () {
    playerImg.src = "./placeholder.png";
    computerImg.src = "./placeholder.png";
    resultText.textContent = "Make your move!";
    playAgainBtn.style.display = "none";
});

// Function to determine winner
function getWinner(player, computer) {
    if (player === computer) {
        return "It's a Tie!";
    }
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "You Win!";
    } else {
        return "Computer Wins!";
    }
}
