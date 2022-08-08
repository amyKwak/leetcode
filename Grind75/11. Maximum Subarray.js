// Maximum Subarray (easy)

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Dynamic Programming, Kadane's Algorithm
const maxSubArray = (nums) => {
  if (nums.length === 0) return 0;

  let currentSubarray = nums[0],
    maxSubarray = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];

    currentSubarray = Math.max(num, currentSubarray + num);
    maxSubarray = Math.max(maxSubarray, currentSubarray);
  }
  return maxSubarray;
};

// Time Complexity: O(N)
// Space Complexity: O(1)

// Alternative Solution: Divide and Conquer (recursion)

// Divide and conquer algorithms involve splitting up the input into smaller chunks until they're small enough to be easily solved, and then combining the solutions to get the final overall solution.

// If we were to split our input in half, then logically the optimal subarray either:

// Uses elements only from the left side
// Uses elements only from the right side
// Uses a combination of elements from both the left and right side
// Thus, the answer is simply the largest of:

// The maximum subarray contained only in the left side
// The maximum subarray contained only in the right side
// The maximum subarray that can use elements from both sides

// Time Complexity: O(N log N)
// Space Complexity: O(N)
