function isTreeHeightBalanced(root) {
  // Helper function to calculate the height of a subtree
  // Returns -1 if the subtree is not height-balanced
  function getTreeHeight(node) {
    if (!node) return 0; // Base case: height of an empty tree is 0

    const leftSubtreeHeight = getTreeHeight(node.left);
    if (leftSubtreeHeight === -1) return -1; // Left subtree is not balanced

    const rightSubtreeHeight = getTreeHeight(node.right);
    if (rightSubtreeHeight === -1) return -1; // Right subtree is not balanced

    if (Math.abs(leftSubtreeHeight - rightSubtreeHeight) > 1) {
      return -1; // Current node is not balanced
    }

    return Math.max(leftSubtreeHeight, rightSubtreeHeight) + 1;
  }

  return getTreeHeight(root) !== -1;
}

// recursion, trees
// time O(n)
// space O(h) h is height of tree
