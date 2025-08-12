var findAnagrams = function (s, p) {
  const res = [];
  const need = new Array(26).fill(0);
  const aCode = "a".charCodeAt(0);
  // Count frequency of each char in p
  for (let i = 0; i < p.length; i++) {
    need[p.charCodeAt(i) - aCode]++;
  }

  let left = 0,
    right = 0,
    toMatch = p.length;

  // Expand the window with right pointer
  while (right < s.length) {
    const rIdx = s.charCodeAt(right) - aCode;
    // If this char is still needed, we'll match one
    if (need[rIdx] > 0) toMatch--;
    // Use up one count (may go negative)
    need[rIdx]--;
    right++;

    // When window size equals p.length, check for an anagram
    if (toMatch === 0) {
      res.push(left);
    }

    // Shrink window from the left if its size exceeds p.length
    if (right - left === p.length) {
      const lIdx = s.charCodeAt(left) - aCode;
      // If this char was part of a complete match, we'll need it again
      if (need[lIdx] >= 0) toMatch++;
      // Put the char back into need[]
      need[lIdx]++;
      left++;
    }
  }

  return res;
};
