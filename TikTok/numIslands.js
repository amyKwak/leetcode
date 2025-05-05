// DFS
const numIslands = (grid) => {
  if (!grid || grid.length === 0) {
    return 0;
  }

  const dfs = (grid, i, j) => {
    if (
      i < 0 ||
      i > grid.length ||
      j < 0 ||
      j > grid[0].length ||
      grid[i][j] === "0"
    ) {
      return;
    }

    grid[i][j] = "0";
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);

    let count = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === " 1") {
          dfs(grid, i, j);
          count++;
        }
      }
    }
  };
  return count;
};

const numIslands = (grid) => {
  if (!grid || grid.length === 0) {
    return 0;
  }

  const bfs = (grid, i, j) => {
    const queue = [[i, j]];
    while (queue.length > 0) {
      const [x, y] = queue.shift();
      for (const [dx, dy] of [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ]) {
        const nx = x + dx;
        const ny = y + dy;

        if (
          nx >= 0 &&
          nx < grid.length &&
          ny >= 0 &&
          ny < grid[0].length &&
          grid[nx][ny] === "1"
        ) {
          grid[nx][ny] = "0";
          queue.push([nx, ny]);
        }
      }
    }
  };

  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        bfs(grid, i, j);
        count++;
      }
    }
  }

  return count;
};
