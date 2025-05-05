function maxConsecutiveOnes(nums, k) {
  let left = 0;
  let maxOnes = 0;
  let zeroCount = 0;

  for (let right = 0; right < nums.length; right++) {
    // Count zeroes in the window
    if (nums[right] === 0) {
      zeroCount++;
    }

    // If zeroCount exceeds k, shrink the window from the left
    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    // Update the maximum window size
    maxOnes = Math.max(maxOnes, right - left + 1);
  }

  return maxOnes;
}

// Time complexity: O(n)
// Space complexity: O(1)
