function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    // Width between the two lines
    const width = right - left;
    // Height is limited by the shorter line
    const h = Math.min(height[left], height[right]);
    // Compute area and update max
    max = Math.max(max, width * h);

    // Move the pointer at the shorter line inward,
    // since only that has a chance to find a taller boundary
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}
