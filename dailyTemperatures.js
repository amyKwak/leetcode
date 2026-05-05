function dailyTemperatures(temperatures) {
  const n = temperatures.length;
  const stack = [];
  const result = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const temp = temperatures[i];
    while (stack.length && temp > temperatures[stack.at(-1)]) {
      const idx = stack.pop();
      result[idx] = i - idx;
    }
    stack.push(i);
  }

  return result;
}

// Time: O(n)
// Space: O(n)
