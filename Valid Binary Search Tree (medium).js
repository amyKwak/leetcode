// Valid Binary Search Tree

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// const isValidBST = (root, min = -Infinity, max = Infinity) => {
//   if (root === null) return true;
//   return root.val < max && root.val > min
//     ? isValidBST(root.left, min, root.val) &&
//         isValidBST(root.right, root.val, max)
//     : false;
// };

const isValidBST = (root) => {
  return dfs(root, -Infinity, Infinity);

  function dfs(root, min, max) {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
  }
};
