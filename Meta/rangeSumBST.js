var rangeSumBST = function (root, low, high) {
  let result = 0;

  function helper(node) {
    if (!node) return;

    if (node.val >= low && node.val <= high) {
      result += node.val;
    }

    if (node.val > low) {
      helper(node.left); // Only search left if node.val is greater than low
    }

    if (node.val < high) {
      helper(node.right); // Only search right if node.val is less than high
    }
  }

  helper(root); // Start the helper function
  return result;
};
