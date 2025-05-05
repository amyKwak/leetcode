function maxSubArrayLen(nums, k) {
  let sum = 0;
  let maxLength = 0;
  const sumIndexMap = new Map();
  sumIndexMap.set(0, -1); // Initialize to handle the case when a subarray from the beginning sums to k

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    // Check if there is a previous cumulative sum that would result in a subarray sum of k
    if (sumIndexMap.has(sum - k)) {
      maxLength = Math.max(maxLength, i - sumIndexMap.get(sum - k));
    }

    // Store the first occurrence of each cumulative sum
    if (!sumIndexMap.has(sum)) {
      sumIndexMap.set(sum, i);
    }
  }

  return maxLength;
}
