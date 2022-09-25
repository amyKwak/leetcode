// First Bad Version (easy)

const solution = (isBadVersion) => {
  return function (n) {
    let left = 1,
      right = n;

    while (left < right) {
      const mid = (left + right) >>> 1;

      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return right;
  };
};

// Time Complexity: O(log n)
// Space Complexity: O(1)
