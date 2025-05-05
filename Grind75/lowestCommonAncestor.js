function lowestCommonAncestor(root, p, q) {
  if (!root) return null;

  while (root !== null) {
    if (p.val < root.val && q.val < root.val) {
      root = root.left; // Both nodes are in the left subtree
    } else if (p.val > root.val && q.val > root.val) {
      root = root.right; // Both nodes are in the right subtree
    } else {
      return root; // Found the split point, this is the LCA
    }
  }
  return null;
}

var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;

  return left ? left : right;
};
