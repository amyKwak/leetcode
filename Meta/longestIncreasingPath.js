function longestIncreasingPath(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const memo = Array.from({ length: rows }, () => Array(cols).fill(-1));
  let maxPath = 0;

  const dfs = (row, col, prevValue) => {
    // Check for boundaries and increasing path condition
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      matrix[row][col] <= prevValue
    ) {
      return 0;
    }

    // Use memoized result if available
    if (memo[row][col] !== -1) {
      return memo[row][col];
    }

    // Explore all four possible directions
    const currentVal = matrix[row][col];
    const up = dfs(row - 1, col, currentVal);
    const down = dfs(row + 1, col, currentVal);
    const left = dfs(row, col - 1, currentVal);
    const right = dfs(row, col + 1, currentVal);

    // Calculate the longest path from this cell
    const longestFromCell = 1 + Math.max(up, down, left, right);
    memo[row][col] = longestFromCell; // Memoize the result

    return longestFromCell;
  };

  // Run DFS from each cell
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      maxPath = Math.max(maxPath, dfs(row, col, -Infinity));
    }
  }

  return maxPath;
}
