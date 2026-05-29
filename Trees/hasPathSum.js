const hasPathSum = (root, targetSum) => {
  if (!root) return false;

  // At a leaf, check if the remaining sum is exactly satisfied
  if (!root.left && !root.right) return root.val === targetSum;

  const remaining = targetSum - root.val;

  return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);
};

// Time Complexity:  O(n)
// Space Complexity: O(h)
