const canFinish = (numCourses, prerequisites) => {
  const graph = new Map();
  const visited = new Array(numCourses).fill(false);
  const inStack = new Array(numCourses).fill(false);

  for (let [c2, c1] of prerequisites) {
    if (!graph.has(c1)) graph.set(c1, []);
    graph.get(c1).push(c2);
  }

  const dfs = (course) => {
    if (inStack[course]) return true; // Found a cycle
    if (visited[course]) return false; // Already fully processed, no cycle from here

    visited[course] = true;
    inStack[course] = true;

    if (graph.has(course)) {
      for (let neighbor of graph.get(course)) {
        if (dfs(neighbor)) return true;
      }
    }

    inStack[course] = false;
    return false;
  };

  // Check for cycles in each course
  for (let i = 0; i < numCourses; i++) {
    if (dfs(i)) return false;
  }

  return true;
};
