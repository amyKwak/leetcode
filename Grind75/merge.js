var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [];
  let [curStart, curEnd] = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    if (start <= curEnd) {
      curEnd = Math.max(curEnd, end);
    } else {
      merged.push([curStart, curEnd]);
      [curStart, curEnd] = [start, end];
    }
  }
  merged.push([curStart, curEnd]);
  return merged;
};
