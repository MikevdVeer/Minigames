let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');
const resetButton = document.getElementById('reset');

function checkWinner() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            status.textContent = `Speler ${currentPlayer} heeft gewonnen!`;
            return true;
        }
    }

    if (board.every(cell => cell !== '')) {
        status.textContent = 'Het is een gelijkspel!';
        return true;
    }

    return false;
}

function handleClick(event) {
    const cellIndex = event.target.id.split('-')[1];
    if (board[cellIndex] === '' && !checkWinner()) {
        board[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        status.textContent = `Speler ${currentPlayer} is aan de beurt`;
        checkWinner();
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    cells.forEach(cell => cell.textContent = '');
    status.textContent = `Speler ${currentPlayer} is aan de beurt`;
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);
