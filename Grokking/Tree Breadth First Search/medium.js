// Zigzag Traversal

// Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function traverse(root) {
  const result = [];
  if (root === null) {
    return result;
  }

  const queue = new Deque();
  queue.push(root);
  leftToRight = true;
  while (queue.length > 0) {
    levelSize = queue.length;
    currentLevel = new Deque();
    for (let i = 0; i < levelSize; i++) {
      currentNode = queue.shift();

      // add the node to the current level based on the traverse direction
      if (leftToRight) {
        currentLevel.push(currentNode.val);
      } else {
        currentLevel.unshift(currentNode.val);
      }

      // insert the children of the current node in the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(currentLevel.toArray());
    // reverse the traverse direction
    leftToRight = !leftToRight;
  }
  return result;
}

// Time Complexity: O(N)
// Space Complexity: O(N)

// ---------------------------------------------------------------------------------------------------------------------

// Connect Level Order Siblings

// Given a binary tree, connect each node with its level order successor. The last node of each level should point to a null node.

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
  while (queue.length > 0) {
    let previousNode = null,
      levelSize = queue.length;
    // connect all nodes of this level
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
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
}

// Time Complexity: O(N)
// Space Complexity: O(N)
