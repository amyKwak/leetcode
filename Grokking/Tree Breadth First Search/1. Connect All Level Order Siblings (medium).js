// Given a binary tree, connect each node with its level order successor. The last node of each level should point to the first node of the next level.

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

function connect_level_order_siblings(root) {
  if (root === null) {
    return;
  }

  const queue = new Deque();
  queue.push(root);
  let currentNode = null,
    previousNode = null;
  while (queue.length > 0) {
    currentNode = queue.shift();
    if (previousNode !== null) {
      previousNode.next = currentNode;
    }
    previousNode = currentNode;
    // insert the children of current node in the queue
    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
  }
}

// Time Complexity: O(N)
// Space Complexity: O(N)
