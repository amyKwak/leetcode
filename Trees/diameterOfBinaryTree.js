function diameterOfBinaryTree(root) {
  let maxDiameter = 0;

  function dfs(node) {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    maxDiameter = Math.max(maxDiameter, left + right);

    return 1 + Math.max(left, right);
  }

  dfs(root);
  return maxDiameter;
}

// Time: O(n)
// Space: O(h)
