function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const top = result.at(-1);

    if (current[0] <= top[1]) {
      top[1] = Math.max(top[1], current[1]);
    } else {
      result.push(current);
    }
  }

  return result;
}

// Time: O (n log n)
// Space: O(n)
