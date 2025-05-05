function updateMatrix(mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const queue = [];

  // Initialize the matrix: 0 stays 0, 1 becomes Infinity
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (mat[r][c] === 0) {
        queue.push([r, c]);
      } else {
        mat[r][c] = Infinity;
      }
    }
  }

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // BFS from all 0s
  while (queue.length > 0) {
    const [r, c] = queue.shift();

    for (const [dr, dc] of directions) {
      const newRow = r + dr;
      const newCol = c + dc;

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        mat[newRow][newCol] > mat[r][c] + 1
      ) {
        mat[newRow][newCol] = mat[r][c] + 1;
        queue.push([newRow, newCol]);
      }
    }
  }

  return mat;
}
