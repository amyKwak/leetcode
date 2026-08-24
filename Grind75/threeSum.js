function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // skip duplicate values for the outer element
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // early exit: smallest possible sum is already > 0
    if (nums[i] > 0) break;

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      if (sum === 0) {
        result.push([nums[i], nums[l], nums[r]]);
        // skip duplicates on both sides before moving on
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }

  return result;

  // Time  O(n²) — O(n log n) sort + O(n) two-pointer scan per element
  // Space O(1)  — ignoring output array, no extra data structures
}