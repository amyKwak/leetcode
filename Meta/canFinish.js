function canFinish(numCourses, prerequisites) {
  const graph = new Map();
  const visited = new Array(numCourses).fill(0); // State of each course

  // Build the graph
  for (const [course, prereq] of prerequisites) {
    if (!graph.has(prereq)) {
      graph.set(prereq, []);
    }
    graph.get(prereq).push(course);
  }

  // DFS to detect cycles
  const dfs = (course) => {
    if (visited[course] === 1) return false; // Cycle detected
    if (visited[course] === 2) return true; // Already processed

    visited[course] = 1; // Mark as visiting
    const neighbors = graph.get(course) || [];

    for (const neighbor of neighbors) {
      if (!dfs(neighbor)) {
        return false; // Cycle found
      }
    }

    visited[course] = 2; // Mark as visited
    return true;
  };

  // Check each course
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false; // Cycle detected
    }
  }

  return true; // No cycles found, can finish all courses
}

// Time Complexity: O(V + E), where V is the number of courses and E is the number of prerequisites.
// Space Complexity: O(V + E), where V is the number of courses and E is the number of prerequisites.
