// Balanced Binary Tree (easy)

// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

// Input: root = [3,9,20,null,null,15,7]
// Output: true

const isBalanced = (root) => {
  return getHeight(root) !== -1;

  function getHeight(root) {
    if (!root) return 0;

    let left = getHeight(root.left),
      right = getHeight(root.right);
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
    return Math.max(left, right) + 1;
  }
};

// left 9
// right 20

// Time Complexity: O(N)
// Space Complexity: O(1)
