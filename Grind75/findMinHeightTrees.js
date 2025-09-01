var findMinHeightTrees = function (n, edges) {
  if (n <= 2) {
    return [...Array(n).keys()];
  }
  const adj = Array.from({ length: n }, () => []);
  const degree = Array(n).fill(0);
  for (const [n1, n2] of edges) {
    adj[n1].push(n2);
    adj[n2].push(n1);
    degree[n1]++;
    degree[n2]++;
  }

  let leaves = [];
  for (let i = 0; i < n; i++) {
    if (degree[i] === 1) leaves.push(i);
  }

  let remaining = n;
  while (remaining > 2) {
    remaining -= leaves.length;
    const newLeaves = [];

    for (let leaf of leaves) {
      for (let nei of adj[leaf]) {
        degree[nei]--;
        if (degree[nei] === 1) {
          newLeaves.push(nei);
        }
      }
    }
    leaves = newLeaves;
  }
  return leaves;
};
