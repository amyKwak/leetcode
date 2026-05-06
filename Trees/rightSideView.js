function rightSideView(root) {
  if (!root) return [];

  const result = [];
  const q = [root];

  while (q.length > 0) {
    const levelSize = q.length;

    for (let i = 0; i < levelSize; i++) {
      const node = q.shift();
      if (i === levelSize - 1) result.push(node.val);

      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }

  return result;
}
