// Invert Binary Tree (easy)

// Given the root of a binary tree, invert the tree, and return its root.

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Input: root = [2,1,3]
// Output: [2,3,1]

const invertTree = (root) => {
  if (root === null) return root;
  root.left = root.left ? invertTree(root.left) : null;
  root.right = root.right ? invertTree(root.right) : null;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  return root;
};

// Time Complexity: O(N)
// Space Complexity: O(N)
