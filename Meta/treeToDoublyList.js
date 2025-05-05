function treeToDoublyList(root) {
  if (!root) return null;

  let first = null; // Pointer to the smallest node
  let last = null; // Pointer to the largest node

  function inOrderTraversal(node) {
    if (!node) return;

    // Traverse the left subtree
    inOrderTraversal(node.left);

    // Process the current node
    if (!first) {
      // First node encountered (smallest element)
      first = node;
    } else {
      // Link the previous node (last) with the current node
      last.right = node;
      node.left = last;
    }

    // Update the last pointer to the current node
    last = node;

    // Traverse the right subtree
    inOrderTraversal(node.right);
  }

  // Perform in-order traversal to link nodes
  inOrderTraversal(root);

  // Connect the first and last nodes to make it circular
  last.right = first;
  first.left = last;

  return first; // Return the pointer to the smallest node
}
