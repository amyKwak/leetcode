const distanceK = (root, target, k) => {
  const graph = new Map();

  // Step 1: Build an undirected graph from the binary tree
  const buildGraph = (node, parent) => {
    if (!node) return;
    if (!graph.has(node.val)) graph.set(node.val, []);
    if (parent !== null) {
      graph.get(node.val).push(parent.val);
      graph.get(parent.val).push(node.val);
    }
    buildGraph(node.left, node);
    buildGraph(node.right, node);
  };

  buildGraph(root, null);

  // Step 2: Perform BFS starting from the target node
  const result = [];
  const visited = new Set();
  const queue = [[target.val, 0]]; // [node value, current distance]

  while (queue.length > 0) {
    const [current, distance] = queue.shift();

    visited.add(current);

    if (distance === k) {
      result.push(current);
    } else if (distance < k) {
      for (const neighbor of graph.get(current) || []) {
        if (!visited.has(neighbor)) {
          queue.push([neighbor, distance + 1]);
        }
      }
    }
  }

  return result;
};
