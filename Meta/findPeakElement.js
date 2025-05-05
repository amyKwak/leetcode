function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid + 1]) {
      // Peak is on the left side (including mid)
      right = mid;
    } else {
      // Peak is on the right side
      left = mid + 1;
    }
  }

  // Left and right converge to the peak element
  return left;
}
