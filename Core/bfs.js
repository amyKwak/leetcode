function bfs(graph, start) {
  const visited = new Set([start]);
  const queue = [start]; // use an array as a queue

  while (queue.length > 0) {
    const node = queue.shift(); // dequeue from front — O(n), use a proper deque for perf

    // process node here
    console.log(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor); // enqueue to back
      }
    }
  }
}
