var maxSubArray = function (nums) {
  let result = nums[0];
  let current = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], nums[i] + current);
    result = Math.max(result, current);
  }
  return result;
};
