const validPalindrome = (s) => {
  // Helper function to check if a substring is a palindrome
  function isPalindrome(str, left, right) {
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  let left = 0;
  let right = s.length - 1;

  // Use two pointers to compare characters from both ends
  while (left < right) {
    if (s[left] !== s[right]) {
      // Try skipping either the left character or the right character
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }

  return true; // The string is already a palindrome
};
