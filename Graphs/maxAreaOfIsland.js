function maxAreaOfIsland(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let maxArea = 0;

  function dfs(r, c) {
    if (r < 0 || r >= rows) return 0;
    if (c < 0 || c >= cols) return 0;
    if (grid[r][c] !== 1) return 0;

    grid[r][c] = 0;

    return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        maxArea = Math.max(maxArea, dfs(r, c));
      }
    }
  }

  return maxArea;
}

// Time:  O(m * n) — every cell visited at most twice
// Space: O(m * n) — call stack worst case if entire grid is land
