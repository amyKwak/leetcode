/**
 * startTime[i], endTime[i], profit[i]
 * Return max profit with no overlapping jobs.
 * If a job ends at time X, you can start another at time X.
 */
function jobScheduling(startTime, endTime, profit) {
  const n = startTime.length;
  const jobs = Array.from({ length: n }, (_, i) => ({
    s: startTime[i],
    e: endTime[i],
    p: profit[i],
  }));

  // Sort jobs by end time (ascending)
  jobs.sort((a, b) => a.e - b.e);

  // ends[i] = end time of jobs[i]
  const ends = jobs.map((j) => j.e);

  // dp[i] = max profit using first i jobs (in sorted order)
  // dp[0] = 0 (no jobs)
  const dp = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    const { s, e, p } = jobs[i - 1];

    // Find the last job that ends <= s (non-overlapping).
    // Returns count of ends <= s, which is the dp index we can add.
    const prevCount = upperBound(ends, s); // number of jobs ending <= s

    // Option 1: skip this job → dp[i-1]
    // Option 2: take this job → profit + dp[prevCount]
    dp[i] = Math.max(dp[i - 1], p + dp[prevCount]);
  }

  return dp[n];

  // Upper bound: first index where ends[idx] > x
  // So it returns the number of elements <= x
  function upperBound(arr, x) {
    let lo = 0,
      hi = arr.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid] <= x) lo = mid + 1;
      else hi = mid;
    }
    return lo; // count of elements <= x
  }
}
