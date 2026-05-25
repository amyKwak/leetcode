function characterReplacement(s, k) {
  const freq = {};
  let left = 0;
  let maxCount = 0;
  let max = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    freq[ch] = (freq[ch] ?? 0) + 1;

    maxCount = Math.max(maxCount, freq[ch]);

    if (right - left + 1 - maxCount > k) {
      freq[s[left]]--;
      left++;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
}

// Time: O(n)
// Space: O(1)
