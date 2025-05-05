function minMeetingRooms(intervals) {
  if (intervals.length === 0) return 0;

  // Sort intervals by their start time
  intervals.sort((a, b) => a[0] - b[0]);

  // Initialize a min-heap to keep track of end times
  const endTimes = [];

  // Push the end time of the first meeting
  endTimes.push(intervals[0][1]);

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    // If the earliest end time is less than or equal to the start time of the current meeting
    if (endTimes[0] <= start) {
      endTimes.shift(); // Remove the meeting that ended
    }

    // Add the current meeting's end time to the heap
    endTimes.push(end);
    endTimes.sort((a, b) => a - b); // Keep the heap sorted by end times
  }

  // The size of the heap is the number of rooms required
  return endTimes.length;
}
