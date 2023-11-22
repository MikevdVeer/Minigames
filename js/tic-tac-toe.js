let currentPlayer = 'X';
    let player1Name = '';
    let player2Name = '';
    let player1Score = 0;
    let player2Score = 0;

    const cells = document.querySelectorAll('.cell');
    const scoreboard = document.getElementById('scoreboard');

    function startGame() {
      player1Name = document.getElementById('player1').value;
      player2Name = document.getElementById('player2').value;

      if (!player1Name || !player2Name) {
        return;
      }

      currentPlayer = 'X';
      cells.forEach(cell => {
        cell.textContent = '';
        cell.addEventListener('click', handleCellClick, { once: true });
      });

      updateScoreboard();
    }

    function handleCellClick(event) {
      const cell = event.target;
      cell.textContent = currentPlayer;
      if (checkWin()) {
        // alert(`Gefeliciteerd, ${getCurrentPlayerName()} wint!`);
        updateScore();
        startGame();
      } else if (isBoardFull()) {
        alert('Gelijkspel!');
        startGame();
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }

    function checkWin() {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];

      return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return cells[a].textContent &&
               cells[a].textContent === cells[b].textContent &&
               cells[a].textContent === cells[c].textContent;
      });
    }

    function isBoardFull() {
      return Array.from(cells).every(cell => cell.textContent !== '');
    }

    function updateScore() {
      if (currentPlayer === 'X') {
        player1Score++;
      } else {
        player2Score++;
      }

      updateScoreboard();
    }

    function updateScoreboard() {
      scoreboard.textContent = `${player1Name} (${player1Score}) - (${player2Score}) ${player2Name}`;
      if (player1Score >= 5) {
        alert(`congratulations ${player1Name} won the game!`);
        resetGame();
      } else if (player2Score >= 5) {
        alert(`congratulations ${player2Name} won the game!`);
        resetGame();
      }
    }

    function getCurrentPlayerName() {
      return currentPlayer === 'X' ? player1Name : player2Name;
    }

    function resetGame() {
      player1Score = 0;
      player2Score = 0;
      startGame();
    }
    
    startGame();  
    
    


