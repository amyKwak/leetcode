function lengthOfLongestSubstring(s) {
  let max = 0;
  let l = 0;
  const lastSeen = new Map();

  for (let r = 0; r < s.length; r++) {
    const ch = s[r];

    if (lastSeen.has(ch) && lastSeen.get(ch) >= l) {
      l = lastSeen.get(ch) + 1;
    }

    max = Math.max(max, r - l + 1);
    lastSeen.set(ch, r);
  }

  return max;
}

// Time: O(n)
// Space: O(n)
