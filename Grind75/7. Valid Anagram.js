// Valid Anagram (easy)

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false

const sortStr = (str) => {
  return str.split("").sort().join("");
};

const isAnagram = (s, t) => {
  return sortStr(s) === sortStr(t);
};

// Time Complexity: O(N log N)
// Space Complexity: O(N)
