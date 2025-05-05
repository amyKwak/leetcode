var cloneGraph = function (node) {
  if (!node) return null;

  const visited = new Map();

  const dfs = (currentNode) => {
    if (visited.has(currentNode)) {
      return visited.get(currentNode);
    }

    // Clone the current node
    const clone = new Node(currentNode.val);
    visited.set(currentNode, clone);

    // Recursively clone all neighbors
    for (const neighbor of currentNode.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  };

  return dfs(node);
};

var cloneGraph = function (node) {
  if (!node) return null;

  const visited = new Map();
  const queue = [node];

  // Clone the root node and add it to the visited map
  visited.set(node, new Node(node.val));

  while (queue.length > 0) {
    const currentNode = queue.shift();

    for (const neighbor of currentNode.neighbors) {
      if (!visited.has(neighbor)) {
        // Clone the neighbor and mark it as visited
        visited.set(neighbor, new Node(neighbor.val));
        queue.push(neighbor);
      }

      // Link the clone of the current node to the clone of the neighbor
      visited.get(currentNode).neighbors.push(visited.get(neighbor));
    }
  }

  return visited.get(node);
};
