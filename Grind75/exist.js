function exist(board, word) {
  const rows = board.length;
  const cols = board[0].length;

  function dfs(r, c, index) {
    if (index === word.length) return true; // ✅ full match

    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols || // out of bounds
      board[r][c] !== word[index]
    )
      return false; // wrong char / visited

    const temp = board[r][c];
    board[r][c] = "#"; // mark visited

    const found =
      dfs(r + 1, c, index + 1) ||
      dfs(r - 1, c, index + 1) ||
      dfs(r, c + 1, index + 1) ||
      dfs(r, c - 1, index + 1);

    board[r][c] = temp; // backtrack
    return found;
  }

  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++) if (dfs(r, c, 0)) return true;

  return false;
}

// time: O(m x n x 4^L), L = len(word)
// space: O(L)
