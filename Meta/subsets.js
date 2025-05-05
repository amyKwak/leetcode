function subsets(nums) {
  const result = [];
  const subset = [];

  function backtrack(start) {
    result.push([...subset]);
    for (let i = start; i < nums.length; i++) {
      subset.push(nums[i]); // Include nums[i] in the subset
      backtrack(i + 1); // Explore further subsets
      subset.pop(); // Remove nums[i] to backtrack
    }
  }

  backtrack(0);
  return result;
}

// Time Complexity: O(N * 2^N)
// Space Complexity: O(N * 2^N)
