// Contains Duplicate (easy)

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true

const containsDuplicate = (nums) => {
  const map = {};

  for (let num of nums) {
    if (map[num]) {
      return true;
    } else {
      map[num] = 1;
    }
  }
  return false;
};

// Time Complexity: O(N)
// Space Complexity: O(N)
