// Longest Palindrome (easy)

const longestPalindrome = function (s) {
  let set = new Set(),
    count = 0;

  for (const char of s) {
    if (set.has(char)) {
      count += 2;
      set.delete(char);
    } else {
      set.add(char);
    }
  }
  return count + (set.size > 0 ? 1 : 0);
};
