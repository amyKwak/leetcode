const lengthOfLongestSubstring = (s) => {
  let result = 0;
  let start = 0;
  const map = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char in map && map[char] > start) {
      start = map[char] + 1;
    }
    map[char] = i;
    result = Math.max(result, i - start);
  }
  return result;
};

console.log(lengthOfLongestSubstring("abba"));
