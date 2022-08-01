// Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

// Appointments: [[1,4], [2,5], [7,9]]
// Output: false
// Explanation: Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments.

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function can_attend_all_appointments(intervals) {
  intervals.sort((a, b) => a.start - b.start);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start < intervals[i - 1].end) {
      return false;
    }
  }
  return true;
}

// Time Complexity: O(N log N)
// Space Complexity: O(N)
