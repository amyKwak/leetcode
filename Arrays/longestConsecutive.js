function longestConsecutive(nums) {
  const numSet = new Set(nums);
  let maxLen = 0;

  for (const num of numSet) {
    // only start counting from the beginning of a sequence
    if (numSet.has(num - 1)) continue;

    let len = 1;
    while (numSet.has(num + len)) len++;
    maxLen = Math.max(maxLen, len);
  }

  return maxLen;

  // Time  O(n) — each number is visited at most twice (once in outer loop, once in while)
  // Space O(n) — the hash set
}