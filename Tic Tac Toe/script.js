const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("statusText");
const restartBtn = document.getElementById("restartBtn");
const winningLine = document.getElementById("winningLine");
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
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `Player ${currentPlayer}'s turn`;
    running = true;
}

function cellClicked() {
    const cellIndex = this.getAttribute("data-cell-index");

    if (options[cellIndex] !== "" || !running) {
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWinner() {
    let roundWon = false;

    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if (cellA === "" || cellB === "" || cellC === "") {
            continue;
        }
        if (cellA === cellB && cellB === cellC) {
            roundWon = true;
            showWinningLine(condition); 
            break;
        }
    }

    if (roundWon) {
        statusText.textContent = `Player ${currentPlayer} wins!`;
        running = false;
    } else if (!options.includes("")) {
        statusText.textContent = "Draw!";
        running = false;
    } else {
        changePlayer();
    }
}

function showWinningLine(winCondition) {
    const firstCell = cells[winCondition[0]].getBoundingClientRect();
    const lastCell = cells[winCondition[2]].getBoundingClientRect();

    const cellContainer = document.getElementById("cellContainer").getBoundingClientRect();
    
    const lineX = (firstCell.left + lastCell.right) / 2 - cellContainer.left;
    const lineY = (firstCell.top + lastCell.bottom) / 2 - cellContainer.top;
    
    const distance = Math.sqrt(Math.pow(lastCell.right - firstCell.left, 2) + Math.pow(lastCell.bottom - firstCell.top, 2));
    
    winningLine.style.width = `${distance}px`;
    winningLine.style.top = `${lineY}px`;
    winningLine.style.left = `${lineX - distance / 2}px`;
    
    if (winCondition[0] % 3 === winCondition[2] % 3) {
        winningLine.style.transform = 'rotate(90deg)';
    } else if (winCondition[0] === 0 && winCondition[2] === 8 || winCondition[0] === 2 && winCondition[2] === 6) {
        winningLine.style.transform = 'rotate(45deg)';
    } else {
        winningLine.style.transform = 'rotate(0deg)';
    }
}

function restartGame() {
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `Player ${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
    winningLine.style.width = '0';
}
