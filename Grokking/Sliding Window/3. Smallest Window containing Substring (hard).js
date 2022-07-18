// Given a string and a pattern, find the smallest substring in the given string which has all the character occurrences of the given pattern.

// Input: String="aabdec", Pattern="abc"
// Output: "abdec"
// Explanation: The smallest substring having all characters of the pattern is "abdec"

function find_substring(str, pattern) {
  let start = 0,
    matched = 0,
    substrStart = 0,
    minLength = str.length + 1,
    map = {};

  for (i = 0; i < pattern.length; i++) {
    const chr = pattern[i];
    if (!(chr in map)) {
      map[chr] = 0;
    }
    map[chr]++;
  }
  for (i = 0; i < str.length; i++) {
    const rightChar = str[i];
    if (rightChar in map) {
      map[rightChar]--;
      if (map[rightChar] >= 0) {
        matched++;
      }
    }
    while (matched === pattern.length) {
      if (minLength > i - start + 1) {
        minLength = i - start + 1;
        substrStart = start;
      }

      const leftChar = str[start];
      start++;
      if (leftChar in map) {
        if (map[leftChar] === 0) {
          matched--;
        }
        map[leftChar]++;
      }
    }
  }
  if (minLength > str.length) {
    return "";
  }
  return str.substring(substrStart, substrStart + minLength);
}

// Time Complexity: O(N + M)
// Space Complexity: O(M) or O(N)
