function shortestPathBinaryMatrix(grid) {
  const n = grid.length;

  // If the start or end is blocked, return -1
  if (grid[0][0] !== 0 || grid[n - 1][n - 1] !== 0) {
    return -1;
  }

  // Directions for moving in 8 possible ways
  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1],
    [-1, 0],
    [-1, 1],
    [-1, -1],
    [0, -1],
  ];

  // Queue for BFS, starting from the top-left cell
  const queue = [[0, 0, 1]]; // [row, col, distance]
  grid[0][0] = 1; // Mark the starting cell as visited

  while (queue.length > 0) {
    const [row, col, dist] = queue.shift();

    // If we've reached the bottom-right cell, return the distance
    if (row === n - 1 && col === n - 1) {
      return dist;
    }

    // Explore all 8 possible directions
    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      // Check if the new position is valid and unvisited
      if (
        newRow >= 0 &&
        newRow < n &&
        newCol >= 0 &&
        newCol < n &&
        grid[newRow][newCol] === 0
      ) {
        queue.push([newRow, newCol, dist + 1]);
        grid[newRow][newCol] = 1; // Mark as visited
      }
    }
  }

  // If we finish BFS without reaching the bottom-right cell, return -1
  return -1;
}
