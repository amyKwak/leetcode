function kthSmallest(matrix, k) {
  const n = matrix.length;

  // Helper function to count elements ≤ target
  function countLessEqual(target) {
    let count = 0;
    let row = n - 1; // Start from the bottom-left corner
    let col = 0;

    while (row >= 0 && col < n) {
      if (matrix[row][col] <= target) {
        count += row + 1; // All elements in the current column above this row are ≤ target
        col++;
      } else {
        row--;
      }
    }
    return count;
  }

  // Binary search
  let left = matrix[0][0];
  let right = matrix[n - 1][n - 1];

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const count = countLessEqual(mid);

    if (count < k) {
      left = mid + 1; // Narrow down to the larger side
    } else {
      right = mid; // Narrow down to the smaller side
    }
  }

  return left; // `left` converges to the kth smallest
}
