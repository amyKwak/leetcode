// Flood Fill (easy)

// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

// Return the modified image after performing the flood fill.

// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

const floodFill = (image, sr, sc, newColor) => {
  fill(image, sr, sc, image[sr][sc], newColor);
  return image;
};

const fill = (image, x, y, oldColor, newColor) => {
  if (
    x < 0 ||
    y < 0 ||
    x >= image.length ||
    y >= image[x].length ||
    image[x][y] === newColor ||
    image[x][y] !== oldColor
  ) {
    return;
  }
  image[x][y] = newColor;
  fill(image, x + 1, y, oldColor, newColor);
  fill(image, x - 1, y, oldColor, newColor);
  fill(image, x, y + 1, oldColor, newColor);
  fill(image, x, y - 1, oldColor, newColor);
};

// Time Complexity: O(N)
// Space Complexity: O(1)
