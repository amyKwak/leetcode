function maxArea(height) {
  let max = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    const area = Math.min(height[l], height[r]) * (r - l);
    max = Math.max(max, area);

    if (height[l] < height[r]) l++;
    else r--;
  }

  return max;
}

// Time: O(n)
// Space: O(1)
