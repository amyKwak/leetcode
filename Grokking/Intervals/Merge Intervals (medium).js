// Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

// Intervals: [[1,4], [2,5], [7,9]]
// Output: [[1,5], [7,9]]
// Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into
// one [1,5].

// 1. Sort the intervals on the start time to ensure a.start <= b.start
// 2. If 'a' overlaps 'b' (i.e. b.start <= a.start), we need to merge them into a new interval 'c' such that:
// c.start = a.start
// c.end = max(a.end, b.end)

// 3. We will keep repeating the above two steps to merge 'c' with the next interval if it overlaps with 'c'

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function merge(intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  // sort the intervals on the start time
  intervals.sort((a, b) => a.start - b.start);

  const mergedIntervals = [];
  let start = intervals[0].start,
    end = intervals[0].end;
  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval.start <= end) {
      // overlapping intervals, adjust the 'end'
      end = Math.max(interval.end, end);
    } else {
      // non-overlapping interval, add the previous interval and reset
      mergedIntervals.push(new Interval(start, end));
      start = interval.start;
      end = interval.end;
    }
  }
  // add the last interval
  mergedIntervals.push(new Interval(start, end));
  return mergedIntervals;
}

// Time Complexity: O(N log N)
// Space Complexity: O(N)

// --------------------------------------------------------------

// Similiar Problem: Given a set of intervals, find out if any two intervals overlap

// Intervals: [[1,4], [2,5], [7,9]]
// Output: true
// Explanation: Intervals [1,4] and [2,5] overlap

// Solution: We can follow the same appraoch as discussed above to find if any two intervals overlap
