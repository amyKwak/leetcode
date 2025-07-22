const insert = (intervals, newInterval) => {
  const result = [];
  let i = 0;
  const n = intervals.length;

  // Add all intervals before newInterval
  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Merge overlapping intervals
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);

  // Add all intervals after newInterval
  while (i < n) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};
