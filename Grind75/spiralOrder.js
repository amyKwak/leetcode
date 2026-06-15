function spiralOrder(matrix) {
  const result = [];
  if (matrix.length === 0) return result;

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // traverse top row left to right
    for (let j = left; j <= right; j++) {
      result.push(matrix[top][j]);
    }
    top++;

    // traverse right column top to bottom
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // traverse bottom row right to left (if still valid)
    if (top <= bottom) {
      for (let j = right; j >= left; j--) {
        result.push(matrix[bottom][j]);
      }
      bottom--;
    }

    // traverse left column bottom to top (if still valid)
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
}

// Time complexity: O(m * n) - every element is visited exactly once
// Space complexity: O(1) - excluding the output array, only constant extra space used for boundary pointers
