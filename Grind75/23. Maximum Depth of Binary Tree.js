// Maximum Depth of Binary Tree (easy)

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

const maxDepth = (root) => {
  return !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

// const maxDepth = (root) => {
//   if (!root) return 0;

//   return Math.max(maxDepth(root.left), maxDepth(root.right) + 1);
// };
