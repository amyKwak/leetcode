function levelOrder(root) {
  if (!root) return [];

  const result = [];
  const q = [root];

  while (q.length > 0) {
    const levelSize = q.length;
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = q.shift();
      level.push(node.val);

      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }

    result.push(level);
  }

  return result;
}

// Time: O(n)
// Space: O(n)
