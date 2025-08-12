const exist = (board, word) => {
  const rows = board.length;
  const cols = board[0].length;

  const dfs = (i, j, k) => {
    if (k === word.length) return true;
    if (i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] !== word[k]) {
      return false;
    }
    const temp = board[i][j];
    board[i][j] = "#";

    const found =
      dfs(i + 1, j, k + 1) ||
      dfs(i - 1, j, k + 1) ||
      dfs(i, j + 1, k + 1) ||
      dfs(i, j - 1, k + 1);

    board[i][j] = temp;
    return found;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === word[0] && dfs(r, c, 0)) {
        return true;
      }
    }
  }
  return false;
};
