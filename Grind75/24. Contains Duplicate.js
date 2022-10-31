// Contains Duplicate (easy)

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true

const containsDuplicate = (nums) => {
  const map = {};

  for (let num of nums) {
    if (map[num]) return true;
    map[num] = 1;
  }
  return false;
};

// Time Complexity: O(N)
// Space Complexity: O(N)

// Another solution - uses sort which is slower O (n log n) but improved space complexity O(1)

// const containsDuplicate = (nums) => {
//   return new Set(nums).size < nums.length;
// }

// Time Complexity: O(N log N)
// Space Complexity: O(1)
