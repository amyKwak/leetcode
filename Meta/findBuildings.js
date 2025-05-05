function findBuildings(heights) {
  const result = [];
  let maxRight = -Infinity; // Initialize maxRight to the smallest possible value

  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] > maxRight) {
      result.push(i);
      maxRight = heights[i];
    }
  }

  return result.reverse();
}

// Time complexity: O(n)
// Space complexity: O(n)
