function longestPalindrome(s) {
  let pairs = 0;
  const unpaired = new Set();

  for (const char of s) {
    if (unpaired.has(char)) {
      unpaired.delete(char);
      pairs++;
    } else {
      unpaired.add(char);
    }
  }

  // Each pair contributes 2 to the length.
  // If there's any unpaired character left, add 1 for the center.
  return pairs * 2 + (unpaired.size > 0 ? 1 : 0);
}

// Longest palindromic substring
function longestPalindrome(s) {
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    // odd-length palindrome (center at i)
    const len1 = expand(s, i, i);
    // even-length palindrome (center between i and i+1)
    const len2 = expand(s, i, i + 1);
    const len = Math.max(len1, len2);

    if (len > end - start + 1) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}

/**
 * Expand around the given center [left, right] and return
 * the length of the longest palindrome found.
 */
function expand(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  // when the loop exits, (left+1 .. right-1) is the longest valid palindrome
  return right - left - 1;
}

// Example usage:
console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd")); // "bb"
