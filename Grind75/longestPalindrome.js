function longestPalindrome(s) {
  let start = 0;
  let maxLen = 0;

  function expand(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // loop exits one step too far in each direction
    // so actual palindrome is s[left+1 ... right-1]
    const len = right - left - 1;
    if (len > maxLen) {
      maxLen = len;
      start = left + 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expand(i, i);     // odd-length:  center is s[i]
    expand(i, i + 1); // even-length: center is gap between s[i] and s[i+1]
  }

  return s.slice(start, start + maxLen);

}
// Time  O(n²) — n centers × up to n expansion steps each
// Space O(1)  — only tracking indices, no table