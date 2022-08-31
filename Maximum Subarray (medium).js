// Maximum Subarray

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

const maxSubArray = (nums) => {
  let currentSubarray = nums[0],
    maxSubarray = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];

    currentSubarray = Math.max(num, currentSubarray + num);
    maxSubarray = Math.max(maxSubarray, currentSubarray);
  }
  return maxSubarray;
};
