function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);

  let closest = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      if (Math.abs(sum - target) < Math.abs(closest - target)) closest = sum;

      if (sum === target) return sum;

      if (sum < target) l++;
      else r--;
    }
  }

  return closest;
}

// Time complexity: O (n log n)
// Space complexity: O(log n) - sorting stack space
