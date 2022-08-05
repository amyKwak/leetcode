// We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running. Our goal is to find the maximum CPU load at any time if all the jobs are running on the same machine.

// Jobs: [[1,4,3], [2,5,4], [7,9,6]]
// Output: 7
// Explanation: Since [1,4,3] and [2,5,4] overlap, their maximum CPU load (3+4=7) will be when both the
// jobs are running at the same time i.e., during the time interval (2,4).

class Job {
  constructor(start, end, cpuLoad) {
    this.start = start;
    this.end = end;
    this.cpuLoad = cpuLoad;
  }
}

function find_max_cpu_load(jobs) {
  // sort the jobs by start time
  jobs.sort((a, b) => a.start - b.start);

  let maxCPULoad = 0,
    currentCPULoad = 0;
  const minHeap = new Heap([], null, (a, b) => a.end - b.end);

  for (let i = 0; i < jobs.length; i++) {
    // remove all the jobs that have ended
    while (minHeap.length > 0 && jobs[i].start >= minHeap.peek().end) {
      currentCPULoad -= minHeap.pop().cpuLoad;
    }
    // add the current job into min_heap
    minHeap.push(jobs[i]);
    currentCPULoad += jobs[i].cpuLoad;
    maxCPULoad = Math.max(maxCPULoad, currentCPULoad);
  }
  return maxCPULoad;
}

// Time Complexity: O(N log N)
// Space Complexity: O(N)
