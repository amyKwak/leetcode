// Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

// Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
// Output: [2, 3], [5, 6], [7, 7]
// Explanation: The output list contains the common intervals between the two lists.

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function merge(intervals_a, intervals_b) {
  let result = [],
    i = 0,
    j = 0;

  while (i < intervals_a.length && intervals_b.length) {
    // check if intervals overlap and intervals_a[i]'s start time lies within the other intervals_b[j]
  }
}
