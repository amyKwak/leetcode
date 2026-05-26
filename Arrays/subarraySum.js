function subarraySum(nums, k) {
  const prefixCounts = new Map([[0, 1]]);
  let currentSum = 0;
  let count = 0;

  for (const num of nums) {
    currentSum += num;

    if (prefixCounts.has(currentSum - k)) {
      count += prefixCounts.get(currentSum - k);
    }

    prefixCounts.set(currentSum, (prefixCounts.get(currentSum) ?? 0) + 1);
  }

  return count;
}

// Time: O(n)
// Space: O(m)
