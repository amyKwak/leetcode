function connect(root) {
  if (!root) return null;

  let leftmost = root; // Start with the leftmost node at each level.

  while (leftmost.left) {
    let current = leftmost;

    while (current) {
      // Connect the left child to the right child of the same parent.
      current.left.next = current.right;

      // Connect the right child to the left child of the next parent, if it exists.
      if (current.next) {
        current.right.next = current.next.left;
      }

      // Move to the next node at the same level.
      current = current.next;
    }

    // Move to the next level.
    leftmost = leftmost.left;
  }

  return root;
}

// Time complexity: O(n)
// Space complexity: O(1)
