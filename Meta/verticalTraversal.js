var verticalTraversal = function (root) {
  // Map to store nodes by column index, where each entry is [row, value]
  const columnMap = new Map();
  // Queue for BFS traversal: [node, row, column]
  const queue = [[root, 0, 0]];

  while (queue.length > 0) {
    const [node, row, col] = queue.shift();

    if (node) {
      // Add node to the column map
      if (!columnMap.has(col)) columnMap.set(col, []);
      columnMap.get(col).push([row, node.val]);

      // Add left and right children to the queue
      queue.push([node.left, row + 1, col - 1]);
      queue.push([node.right, row + 1, col + 1]);
    }
  }

  // Sort columns by column index
  const sortedColumns = [...columnMap.keys()].sort((a, b) => a - b);

  // Generate result for each column
  const result = [];
  for (const col of sortedColumns) {
    // Sort nodes in the column by row first, then by value
    const nodes = columnMap.get(col);
    nodes.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
    result.push(nodes.map(([row, val]) => val));
  }

  return result;
};
