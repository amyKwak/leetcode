function goodNodes(root) {
  function dfs(node, maxSoFar) {
    if (!node) return 0;

    const isGood = node.val >= maxSoFar ? 1 : 0;
    const newMax = Math.max(maxSoFar, node.val);

    return isGood + dfs(node.left, newMax) + dfs(node.right, newMax);
  }

  return dfs(root, -Infinity);
}

// Time:  O(n)
// Space: O(h)
