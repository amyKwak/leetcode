// Largest Rectangle in Histogram — O(n) time, O(n) space
function largestRectangleArea(heights) {
  const stack = []; // each item: { index: startIndex, height }
  let maxArea = 0;

  for (let i = 0; i <= heights.length; i++) {
    const h = i === heights.length ? 0 : heights[i]; // sentinel 0 at the end
    let start = i;

    // Maintain a strictly increasing stack of heights
    while (stack.length && stack[stack.length - 1].height > h) {
      const { index, height } = stack.pop();
      maxArea = Math.max(maxArea, height * (i - index));
      start = index; // extend the start to the left for the next bar
    }

    stack.push({ index: start, height: h });
  }

  return maxArea;
}
