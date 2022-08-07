// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

const search = (nums, target) => {
  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    let mid = (low + high) >>> 1;
    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

// Time Complexity: O(log n)
// Space Complexity: O(1)

// ---------------------------------------------------------------------------------------------------------------------

// Recursive Solution

// const search = (nums, target, low = 0, high = nums.length - 1) => {
//   if (low > high) {
//     return -1;
//   }

//   let mid = (low + high) >>> 1;
//   if (nums[mid] === target) {
//     return mid;
//   }
//   if (target < nums[mid]) {
//     return search(nums, target, low, mid - 1);
//   } else {
//     return search(nums, target, mid + 1, high);
//   }
// };

// Time Complexity: O(log n)
// Space Complexity: O(1)
