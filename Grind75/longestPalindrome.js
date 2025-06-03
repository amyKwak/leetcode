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
