function rightSideView(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelLength = queue.length;
    for (let i = 0; i < levelLength; i++) {
      const node = queue.shift();

      // If this is the last node in the current level, add it to the result
      if (i === levelLength - 1) {
        result.push(node.val);
      }

      // Enqueue child nodes for the next level
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
}
