// 1. Two Sum (easy)

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

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
