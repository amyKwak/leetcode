var TicTacToe = function (n) {
  this.n = n; // size of the board
  this.rows = Array(n).fill(0); // track sum of each row
  this.cols = Array(n).fill(0); // track sum of each column
  this.diagonal = 0; // track sum of the main diagonal
  this.antiDiagonal = 0; // track sum of the anti-diagonal
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function (row, col, player) {
  const playerMark = player === 1 ? 1 : -1; // Player 1 is +1, Player 2 is -1

  // Update row, column, and diagonals
  this.rows[row] += playerMark;
  this.cols[col] += playerMark;

  if (row === col) {
    this.diagonal += playerMark;
  }

  if (row + col === this.n - 1) {
    this.antiDiagonal += playerMark;
  }

  // Check for winner
  if (
    Math.abs(this.rows[row]) === this.n ||
    Math.abs(this.cols[col]) === this.n ||
    Math.abs(this.diagonal) === this.n ||
    Math.abs(this.antiDiagonal) === this.n
  ) {
    return player; // Player 1 or 2 wins
  }

  return 0; // No winner yet
};

// Example usage:
var game = new TicTacToe(3);
console.log(game.move(0, 0, 1)); // 0, no winner
console.log(game.move(0, 1, 2)); // 0, no winner
console.log(game.move(1, 1, 1)); // 0, no winner
console.log(game.move(1, 0, 2)); // 0, no winner
console.log(game.move(2, 2, 1)); // 1, player 1 wins
