function largestRectangleArea(heights) {
  const stack = []; // stores indices
  let maxArea = 0;

  for (let i = 0; i <= heights.length; i++) {
    const currHeight = i === heights.length ? 0 : heights[i];

    while (stack.length > 0 && currHeight < heights[stack[stack.length - 1]]) {
      const height = heights[stack.pop()];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }

    stack.push(i);
  }

  return maxArea;
}

// Time complexity: O(n) - each index is pushed and popped from the stack at most once
// Space complexity: O(n) - stack can hold up to n indices in the worst case
