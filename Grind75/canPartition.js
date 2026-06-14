function canPartition(nums) {
  const totalSum = nums.reduce((a, b) => a + b, 0);

  if (totalSum % 2 !== 0) return false;

  const target = totalSum / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
    for (let j = target; j >= num; j--) {
      if (dp[j - num]) dp[j] = true;
    }
  }

  return dp[target];
}

// Time complexity: O(n * target) - n is nums.length, target = totalSum / 2
// Space complexity: O(target) - 1D dp array of size target + 1
