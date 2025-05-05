function canJump(nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
      return false; // Cannot move forward
    }
    maxReach = Math.max(maxReach, i + nums[i]);
    if (maxReach >= nums.length - 1) {
      return true; // Can reach or exceed the last index
    }
  }
  return false;
}

// Example usage:
const nums = [2, 3, 1, 1, 4];
console.log(canJump(nums)); // Output: true
