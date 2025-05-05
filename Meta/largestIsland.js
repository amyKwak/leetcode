function largestIsland(grid) {
  const n = grid.length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const islandSizes = new Map(); // Map to store island size by ID
  let islandId = 2; // Start IDs from 2 (0 and 1 are reserved for grid values)
  let maxIsland = 0;

  // Helper function to perform DFS and calculate island size
  function dfs(x, y, id) {
    if (x < 0 || x >= n || y < 0 || y >= n || grid[x][y] !== 1) return 0;
    grid[x][y] = id; // Mark the cell with the current island ID
    let size = 1;
    for (const [dx, dy] of directions) {
      size += dfs(x + dx, y + dy, id);
    }
    return size;
  }

  // Step 1: Mark all islands with unique IDs and calculate their sizes
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const size = dfs(i, j, islandId);
        islandSizes.set(islandId, size);
        maxIsland = Math.max(maxIsland, size); // Update maxIsland
        islandId++;
      }
    }
  }

  // Step 2: Try changing each 0 to 1 and calculate the potential island size
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        const uniqueIslands = new Set(); // To avoid double counting islands
        let potentialSize = 1; // Start with the flipped 0

        // Check all 4 neighbors
        for (const [dx, dy] of directions) {
          const nx = i + dx;
          const ny = j + dy;
          if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[nx][ny] > 1) {
            const neighborId = grid[nx][ny];
            if (!uniqueIslands.has(neighborId)) {
              potentialSize += islandSizes.get(neighborId);
              uniqueIslands.add(neighborId);
            }
          }
        }
        maxIsland = Math.max(maxIsland, potentialSize);
      }
    }
  }

  return maxIsland;
}
