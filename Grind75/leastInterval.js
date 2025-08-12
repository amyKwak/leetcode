var leastInterval = function (tasks, n) {
  const freq = Array(26).fill(0);
  const A = "A".charCodeAt(0);
  for (const task of tasks) {
    freq[task.charCodeAt(0) - A]++;
  }

  freq.sort((a, b) => b - a);
  const maxFreq = freq[0];

  let countMax = 0;
  for (const f of freq) {
    if (f === maxFreq) {
      countMax++;
    } else {
      break;
    }
  }

  const partCount = maxFreq - 1;
  const partLength = n + 1;
  const minIntervals = partCount * partLength + countMax;

  return Math.max(tasks.length, minIntervals);
};
