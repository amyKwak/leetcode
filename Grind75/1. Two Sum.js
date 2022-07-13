// 1. Two Sum (easy)

// Notes: use a map instead of i + j for optimal solution
// Time: O(n)
// Space: O(n)


const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const x = target - nums[i];
    if (x in map) {
      return [map[x], i];
    }
    map[nums[i]] = i;
  }
  return null;
};