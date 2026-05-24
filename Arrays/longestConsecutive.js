function longestConsecutive(nums) {
  const set = new Set(nums);
  let longest = 0;

  for (const num of nums) {
    if (!set.has(num - 1)) {
      let length = 1;

      while (set.has(num + length)) length++;

      longest = Math.max(longest, length);
    }
  }

  return longest;
}

// Time: O(n)
// Space: O(n)
