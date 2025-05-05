function verticalOrder(root) {
  if (!root) return [];

  const columnTable = new Map();

  const queue = [[root, 0]];

  let minColumn = 0;
  let maxColumn = 0;

  while (queue.length > 0) {
    const [node, column] = queue.shift();

    if (node) {
      if (!columnTable.has(column)) {
        columnTable.set(column, []);
      }
      columnTable.get(column).push(node.val);

      minColumn = Math.min(minColumn, column);
      maxColumn = Math.max(maxColumn, column);

      queue.push([node.left, column - 1]);
      queue.push([node.right, column + 1]);
    }
  }

  const result = [];
  for (let col = minColumn; col <= maxColumn; col++) {
    if (columnTable.has(col)) {
      result.push(columnTable.get(col));
    }
  }

  return result;
}
