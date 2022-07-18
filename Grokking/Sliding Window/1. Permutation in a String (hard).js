// Given a string and a pattern, find out if the string contains any permutation of the pattern.

// Input: String="oidbcaf", Pattern="abc"
// Output: true
// Explanation: The string contains "bca" which is a permutation of the given patter

function find_permutation(str, pattern) {
  let start = 0, matched = 0, map = {};

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
      if (map[rightChar] === 0) {
        matched++;
      }
    }
    if (matched === Object.keys(map).length) {
      return true;
    }

    if (i >= pattern.length - 1) {
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
  return false;
}

// Time Complexity: O(N + M)
// Space Complexity: O(M)