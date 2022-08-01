// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise. Each letter in magazine can only be used once in ransomNote.

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

const canConstruct = function (ransomNote, magazine) {
  const map = {};
  if (magazine.length < ransomNote.length) {
    return false;
  }
  for (let i = 0; i < magazine.length; i++) {
    if (!map[magazine[i]]) {
      map[magazine[i]] = 1;
    }
    map[magazine[i]]++;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (!map[ransomNote[i]]) {
      return false;
    }
    map[ransomNote[i]]--;
  }
  return true;
};

// Time Complexity: O(M)
// Space Complexity: O(k) / O(1) because k is never more than 26, which is a constant, it'd be reasonable to say that this algorithm requires O(1) space
