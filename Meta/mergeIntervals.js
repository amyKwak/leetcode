function merge(intervals) {
  if (intervals.length === 0) return [];

  // Step 1: Sort intervals by their start times
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  let currentInterval = intervals[0];
  result.push(currentInterval);

  // Step 2: Iterate through the intervals
  for (const interval of intervals) {
    const currentEnd = currentInterval[1];
    const nextStart = interval[0];
    const nextEnd = interval[1];

    // Check if intervals overlap
    if (currentEnd >= nextStart) {
      // Merge intervals by updating the end of the current interval
      currentInterval[1] = Math.max(currentEnd, nextEnd);
    } else {
      // No overlap, add the next interval
      currentInterval = interval;
      result.push(currentInterval);
    }
  }

  return result;
}

// Time complexity: O(n log n) due to sorting
// Space complexity: O(n) for the output array
