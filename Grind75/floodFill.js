function floodFill(image, sr, sc, color) {
  const startingColor = image[sr][sc];
  if (startingColor === color) return image; // No need to fill if the color is the same

  const rows = image.length;
  const cols = image[0].length;

  function dfs(row, col) {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      image[row][col] !== startingColor
    ) {
      return;
    }

    image[row][col] = color;

    // Check all 4 adjacent directions (up, down, left, right)
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  }

  dfs(sr, sc);
  return image;
}
