const findMinHeightTrees = (n, edges) => {
  if (n === 1) return [0];

  const adj = Array.from({ length: n }, () => new Set());
  for (const [a, b] of edges) {
    adj[a].add(b);
    adj[b].add(a);
  }

  let leaves = [];
  for (let i = 0; i < n; i++) {
    if (adj[i].size === 1) leaves.push(i);
  }

  let remaining = n;
  while (remaining > 2) {
    remaining -= leaves.length;

    const nextLeaves = [];

    for (const leaf of leaves) {
      const neighbor = adj[leaf].values().next().value;
      adj[neighbor].delete(leaf);

      if (adj[neighbor].size === 1) {
        nextLeaves.push(neighbor);
      }
    }

    leaves = nextLeaves;
  }

  return leaves;

  // Time: O(n) — each node and edge is processed at most once during leaf trimming
  // Space: O(n) — adjacency list stores all n nodes and their connections
};
