function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (nums[mid] === target) {
      return true;
    }

    // If the left half is sorted
    if (nums[left] < nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1; // Search in the left half
      } else {
        left = mid + 1; // Search in the right half
      }
    }
    // If the right half is sorted
    else if (nums[mid] < nums[left]) {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1; // Search in the right half
      } else {
        right = mid - 1; // Search in the left half
      }
    }
    // If nums[left] == nums[mid], we cannot determine the sorted half
    else {
      left++; // Skip the duplicate
    }
  }

  return false;
}

// Time Complexity: O(log(N)), where N is the number of elements in the input array
// Space Complexity: O(1)
