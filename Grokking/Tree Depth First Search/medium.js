// All Paths for a Sum

// Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function find_paths(root, sum) {
  allPaths = [];
  find_paths_recursive(root, sum, new Dequeue(), allPaths);
  return allPaths;
}

function find_paths_recursive(currentNode, sum, current, allPaths) {
  if (currentNode === null) {
    return;
  }

  // add the current node to the path
  currentPath.push(currentNode.val);

  // if the current node is a leaf and its value is equal to sum, save the current path
  if (
    currentNode.val === sum &&
    currentNode.left === null &&
    currentNode.right === null
  ) {
    allPaths.push(currentPath.toArray());
  } else {
    // traverse the left sub-tree
    find_paths_recursive(
      currentNode.left,
      sum - currentNode.vale,
      currentPath,
      allPaths
    );
    // traverse the right sub-tree
    find_paths_recursive(
      currentNode.right,
      sum - currentNode.val,
      currentPath,
      allPaths
    );
  }
  // remove the current node from the path to backtrack,
  // we need to remove the current node while we are going up the recursive call stack
  currentPath.pop();
}

// Time Complexity: O(N^2)
// Space Complexity: O(N) if we ignore the space required for the allPaths list

// --------------------------------------------------------------

// Sum of Path Numbers

// Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.

// function find_sum_of_path_numbers(root) {
//   return find_root_to_leaf_path_numbers(root, 0);
// }

// function find_root_to_leaf_path_numbers(currentNode, pathSum) {
//   if (currentNode === null) {
//     return 0;
//   }

//   // calculate the path number of the current node
//   pathSum = 10 * pathSum + currentNode.val;

//   // if the current node is a leaf, return the current path sum
//   if (currentNode.left === null && currentNode.right === null) {
//     return pathSum;
//   }

//   // traverse the left and the right sub-tree
//   return find_root_to_leaf_path_numbers(currentNode.left, pathSum) +
//          find_root_to_leaf_path_numbers(currentNode.right, pathSum);
// }

// Time Complexity: O(N)
// Space Complexity: O(N)

// --------------------------------------------------------------

// Path With Given Sequence

// Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.

function find_path(root, sequence) {
  if (root === null) {
    return sequence.length === 0;
  }

  return find_path_recursive(root, sequence, 0);
}

function find_path_recursive(currentNode, sequence, sequenceIndex) {
  if (currentNode === null) {
    return false;
  }

  const seqLen = sequence.length;
  if (sequenceIndex >= seqLen || currentNode.val !== sequence[sequenceIndex]) {
    return false;
  }

  // if the current node is a leaf, add it is the end of the sequence, we have found a path!
  if (
    currentNode.left === null &&
    currentNode.right === null &&
    sequenceIndex === seqLen - 1
  ) {
    return true;
  }

  // recursively call to traverse the left and right sub-tree
  // return true if any of the two recursive call return true
  return (
    find_path_recursive(currentNode.left, sequence, sequenceIndex + 1) ||
    find_path_recursive(currentNode.right, sequence, sequenceIndex + 1)
  );
}

// Time Complexity: O(N)
// Space Complexity: O(N)

// --------------------------------------------------------------

// Count Paths for a Sum

// Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all the node values of each path equals ‘S’. Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).

function count_paths(root, S) {
  return count_paths_recursive(root, S, new Deque());
}

function count_paths_recursive(currentNode, S, currentPath) {
  if (currentNode === null) {
    return 0;
  }

  // add the current node to the path
  currentPath.push(currentNode.val);
  let pathCount = 0,
    pathSum = 0;
  // find the sums of all sub-paths in the current path list
  for (i = currentPath.length - 1; i >= 0; i--) {
    pathSum += currentPath[i];
    // if the sum of any sub-path is equal to 'S' we increment our path count.
    if (pathSum === S) {
      pathCount += 1;
    }
  }
  // traverse the left sub-tree
  pathCount += count_paths_recursive(currentNode.left, S, currentPath);
  // traverse the right sub-tree
  pathCount += count_paths_recursive(currentNode.right, S, currentPath);

  // remove the current node from the path to backtrack
  // we need to remove the current node while we are going up the recursive call stack
  currentPath.pop();
  return pathCount;
}

// Time Complexity: O(N^2)
// Space Complexity: O(N)
