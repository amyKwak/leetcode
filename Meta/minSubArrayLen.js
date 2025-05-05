function minSubArrayLen(nums, k) {
  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]; // Expand the window by adding the current element to the sum

    // While the current window sum is greater than or equal to k
    while (sum >= k) {
      // Update minLength to be the smaller of the current minLength or the window size
      minLength = Math.min(minLength, right - left + 1);

      // Shrink the window from the left to try finding a smaller valid subarray
      sum -= nums[left];
      left++;
    }
  }

  // If no valid subarray was found, return 0; otherwise, return the minLength found
  return minLength === Infinity ? 0 : minLength;
}

// with negative numbers
function minSubArrayLenWithExactSumAny(target, nums) {
  let minLength = Infinity;
  let sum = 0;
  const sumIndexMap = new Map();
  sumIndexMap.set(0, -1); // To handle cases where the subarray starts from index 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    // Check if there's a subarray that sums to target
    if (sumIndexMap.has(sum - target)) {
      minLength = Math.min(minLength, i - sumIndexMap.get(sum - target));
    }

    // Only store the sum if it’s not already in the map to keep the smallest index
    if (!sumIndexMap.has(sum)) {
      sumIndexMap.set(sum, i);
    }
  }

  return minLength === Infinity ? 0 : minLength;
}
