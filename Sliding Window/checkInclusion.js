function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;

  const count = new Array(26).fill(0);
  const a = "a".charCodeAt(0);

  // Build frequency map for s1, and first window of s2
  for (let i = 0; i < s1.length; i++) {
    count[s1[i].charCodeAt(0) - a]++;
    count[s2[i].charCodeAt(0) - a]--;
  }

  if (count.every((c) => c === 0)) return true;

  // Slide the window across s2
  for (let i = s1.length; i < s2.length; i++) {
    count[s2[i].charCodeAt(0) - a]--; // add incoming char
    count[s2[i - s1.length].charCodeAt(0) - a]++; // remove outgoing char

    if (count.every((c) => c === 0)) return true;
  }

  return false;
}

// Time Complexity:  O(n) — single pass over s2, each check is O(26) = O(1)
// Space Complexity: O(1) — fixed array of 26 characters regardless of input size
