function searchMatrix(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  let l = 0;
  let r = m * n - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    const row = Math.floor(mid / n);
    const col = mid % n;
    const val = matrix[row][col];

    if (val === target) return true;
    else if (val < target) l = mid + 1;
    else r = mid - 1;
  }

  return false;
}

// Time: O(log(m * n))
// Space: O(1)
