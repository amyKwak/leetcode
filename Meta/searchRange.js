var searchRange = function (nums, target) {
  // Helper function to find the first or last occurrence
  const binarySearch = (findFirst) => {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        result = mid; // Record the index
        if (findFirst) {
          right = mid - 1; // Narrow search to the left
        } else {
          left = mid + 1; // Narrow search to the right
        }
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  };

  // Find the first and last positions
  const firstPosition = binarySearch(true);
  const lastPosition = binarySearch(false);

  return [firstPosition, lastPosition];
};
