// Get the game board elements
const gameBoard = document.querySelector(".game-board");
const cells = document.querySelectorAll(".cell");
const newGameButton = document.getElementById("new-game-button");
const resetButton = document.getElementById("reset-button");
const gameStatus = document.getElementById("game-status");

// Initialize the game state
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

// Handle cell clicks
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (!gameOver && gameState[index] === "") {
      gameState[index] = currentPlayer;
      cell.textContent = currentPlayer;
      checkWin();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});

// Check for winning conditions
function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    if (gameState[condition[0]] === gameState[condition[1]] && gameState[condition[1]] === gameState[condition[2]] && gameState[condition[0]] !== "") {
      gameOver = true;
      gameStatus.textContent = `Player ${gameState[condition[0]]} wins!`;
      return;
    }
  }

  if (!gameState.includes("")) {
    gameOver = true;
    gameStatus.textContent = "It's a draw!";
  }
}

// Handle new game button click
newGameButton.addEventListener("click", () => {
  gameState = ["", "", "", "", "", "", "", "", ""];
  gameOver = false;
  currentPlayer = "X";
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  gameStatus.textContent = "";
});

// Handle reset button click
resetButton.addEventListener("click", () => {
  gameState = ["", "", "", "", "", "", "", "", ""];
 