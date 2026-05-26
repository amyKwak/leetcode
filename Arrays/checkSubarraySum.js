function checkSubarraySum(nums, k) {
  const remainderIndex = new Map([[0, -1]]);
  let prefixSum = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    const remainder = prefixSum % k;

    if (remainderIndex.has(remainder)) {
      if (i - remainderIndex.get(remainder) >= 2) return true;
    } else {
      remainderIndex.set(remainder, i);
    }
  }

  return false;
}

// Time: O(n)
// Space: O(min(n, k))
