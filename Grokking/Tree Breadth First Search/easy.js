// Binary Tree Level Order Traversal

// Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function traverse(root) {
  result = [];
  if (root === null) {
    return result;
  }

  const queue = new Deque();
  queue.push(root);
  while (queue.length > 0) {
    const levelSize = queue.length;
    currentLevel = [];
    for (let i = 0; i < levelSize; i++) {
      currentNode = queue.shift();
      // add the node to the current level
      currentLevel.push(currentNode.val);
      // insert the children of the current node in the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(currentLevel);
  }
  return result;
}

// Time Complexity: O(N)
// Space Complexity: O(N)

// ---------------------------------------------------------------------------------------------------------------------

// Reverse Level Order Traversal

// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.

function traverse(root) {
  const result = new Deque();
  if (root === null) {
    return result;
  }
  const queue = new Deque();
  queue.push(root);
  while (queue.length > 0) {
    levelSize = queue.length;
    currentLevel = [];
    for (let i = 0; i < levelSize; i++) {
      currentNode = queue.shift();
      // add the node to the current level
      currentLevel.push(currentNode.val);
      // insert the children of the current node in the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.unshift(currentLevel);
  }
  return result;
}

// Time Complexity: O(N)
// Space Complexity: O(N)

// ---------------------------------------------------------------------------------------------------------------------

// Level Averages in a Binary Tree

// Given a binary tree, populate an array to represent the averages of all of its levels.

function find_level_averages(root) {
  const result = [];
  if (root === null) {
    return result;
  }

  const queue = new Deque();
  queue.push(root);
  while (queue.length > 0) {
    let levelSize = queue.length,
      levelSum = 0.0;
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      // add the node's value to the running sum
      levelSum += currentNode.val;
      // insert the children of current node to the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    // append the current level's average to the result array
    result.push(levelSum / levelSize);
  }
  return result;
}

// Time Complexity: O(N)
// Space Complexity: O(N)

// ---------------------------------------------------------------------------------------------------------------------

// Minimum Depth of a Binary Tree

// Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

function find_minimum_depth(root) {
  if (root === null) {
    return 0;
  }

  const queue = new Deque();
  queue.push(root);
  let minimumTreeDepth = 0;
  while (queue.length > 0) {
    minimumTreeDepth++;
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      currentNode = queue.shift();

      // check if this is a leaf node
      if (currentNode.left === null && currentNode.right === null) {
        return minimumTreeDepth;
      }
      //insert the children of current node in the queue
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

// ---------------------------------------------------------------------------------------------------------------------

// Level Order Successor

// Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.

function find_successor(root, key) {
  if (root === null) {
    return null;
  }

  const queue = new Deque();
  queue.push(root);
  while (queue.length > 0) {
    let currentNode = queue.shift();
    // insert the children of the current node in the queue
    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
    // break if we have found the key
    if (currentNode.val === key) {
      break;
    }
  }
  if (queue.length > 0) {
    return queue.peek();
  }
  return null;
}

// Time Complexity: O(N)
// Space Complexity: O(N)
