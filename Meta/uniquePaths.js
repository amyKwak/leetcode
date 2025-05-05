function uniquePaths(m, n) {
  // Create a 2D array filled with zeros
  const dp = Array.from({ length: m }, () => Array(n).fill(0));

  // Fill the first row and first column with 1s
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1; // There's only one way to reach any cell in the first column
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1; // There's only one way to reach any cell in the first row
  }

  // Fill the rest of the dp array
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]; // Sum paths from the top and left
    }
  }

  // The bottom-right corner has the total unique paths
  return dp[m - 1][n - 1];
}

// Example usage:
console.log(uniquePaths(3, 7)); // Output: 28

function uniquePaths(m, n) {
  let dp = Array(n).fill(1); // 1 way to reach each cell in the first row

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] += dp[j - 1]; // Update the current cell's paths
    }
  }

  return dp[n - 1]; // The last cell contains the total unique paths
}

// Example usage:
console.log(uniquePaths(3, 7)); // Output: 28
