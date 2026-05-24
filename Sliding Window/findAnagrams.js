function findAnagrams(s, p) {
  if (p.length > s.length) return [];

  const result = [];
  const count = new Array(26).fill(0);
  const a = "a".charCodeAt(0);

  for (let i = 0; i < p.length; i++) {
    count[p[i].charCodeAt(0) - a]++;
    count[s[i].charCodeAt(0) - a]--;
  }

  if (count.every((c) => c === 0)) result.push(0);

  for (let i = p.length; i < s.length; i++) {
    count[s[i].charCodeAt(0) - a]--;
    count[s[i - p.length].charCodeAt(0) - a]++;

    if (count.every((c) => c === 0)) result.push(i - p.length + 1);
  }

  return result;
}

// Time Complexity:  O(n) — single pass over s, each check is O(26) = O(1)
// Space Complexity: O(1) — fixed 26-slot array + result array
