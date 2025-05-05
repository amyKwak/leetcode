function nextPermutation(nums) {
  let n = nums.length;
  let i = n - 2;

  // Step 1: Find the first decreasing element from the right
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    // Step 2: Find the smallest element larger than nums[i] and swap them
    let j = n - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // Step 3: Reverse the elements after the position i to get the next smallest permutation
  let left = i + 1,
    right = n - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}

// Time complexity: O(n)
// Space complexity: O(1)
