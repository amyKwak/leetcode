// Lowest Common Ancestor of a Binary Search Tree (easy)

// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.

const lowestCommonAncestor = (root, p, q) => {
  const min = Math.min(p.val, q.val),
    max = Math.max(p.val, q.val);

  while (root.val > max || root.val < min) {
    root = root.val > max ? root.left : root.right;
  }
  return root;
};

// Time Complexity: O(N)
// Space Complexity: O(N)
