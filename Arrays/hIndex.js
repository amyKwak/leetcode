function hIndex(citations) {
  const n = citations.length;
  const buckets = new Array(n + 1).fill(0);

  for (const c of citations) {
    buckets[Math.min(n, c)]++;
  }

  let cumulative = 0;
  for (let h = n; h >= 0; h--) {
    cumulative += buckets[h];

    if (cumulative >= h) return h;
  }

  return 0;
}

// Time: O(n)
// Space: O(n)
