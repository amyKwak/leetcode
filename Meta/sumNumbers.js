function sumNumbers(root) {
  // Helper function to perform DFS
  function dfs(node, currentNumber) {
    if (!node) return 0; // Base case: if the node is null, return 0

    // Update the current number formed by the path
    currentNumber = currentNumber * 10 + node.val;

    // If it's a leaf node, return the current number
    if (!node.left && !node.right) {
      return currentNumber;
    }

    // Recursively calculate the sum for left and right subtrees
    return dfs(node.left, currentNumber) + dfs(node.right, currentNumber);
  }

  return dfs(root, 0); // Start DFS with initial number as 0
}

// Time complexity: O(n)
// Space complexity: O(h), where h is the height of the tree
