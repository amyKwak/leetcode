function findDiagonalOrder(mat) {
  const m = mat.length;
  const n = mat[0].length;
  const result = [];
  let row = 0,
    col = 0,
    direction = 1;

  while (result.length < m * n) {
    result.push(mat[row][col]);

    // Calculate the next position
    const newRow = row + (direction === 1 ? -1 : 1);
    const newCol = col + (direction === 1 ? 1 : -1);

    // Check if the next position is out of bounds
    if (newRow < 0 || newRow >= m || newCol < 0 || newCol >= n) {
      if (direction === 1) {
        // Moving up: prioritize moving right, otherwise move down
        if (col === n - 1) row++;
        else col++;
      } else {
        // Moving down: prioritize moving down, otherwise move right
        if (row === m - 1) col++;
        else row++;
      }
      direction = -direction; // Switch direction
    } else {
      // Update position if within bounds
      row = newRow;
      col = newCol;
    }
  }

  return result;
}
