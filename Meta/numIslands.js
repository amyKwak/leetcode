function numIslands(grid) {
  if (!grid || grid.length === 0) return 0;

  let islandCount = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  const dfs = (i, j) => {
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === "0") {
      return;
    }

    grid[i][j] = "0"; // Mark the cell as visited by setting it to '0'

    // Check all 4 directions (up, down, left, right)
    dfs(i + 1, j); // Down
    dfs(i - 1, j); // Up
    dfs(i, j + 1); // Right
    dfs(i, j - 1); // Left
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        islandCount++; // Found a new island
        dfs(i, j); // Start DFS to mark the entire island
      }
    }
  }

  return islandCount;
}
