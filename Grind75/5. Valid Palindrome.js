// Valid Palindrome (easy)

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

const isPalindrome = (s) => {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return s === s.split("").reverse().join("");
};

// Time Complexity: O(N)
// Space Complexity: O(1)
