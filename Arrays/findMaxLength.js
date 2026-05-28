function findMaxLength(nums) {
  const map = new Map([[0, -1]]);
  let maxLen = 0;
  let balance = 0;

  for (let i = 0; i < nums.length; i++) {
    balance += nums[i] === 0 ? 1 : -1;

    if (map.has(balance)) {
      maxLen = Math.max(maxLen, i - map.get(balance));
    } else {
      map.set(balance, i);
    }
  }
  return maxLen;
}

// Time: O(n)
// Space: O(n)
