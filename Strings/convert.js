function convert(s, numRows) {
  if (numRows === 1 || numRows >= s.length) return s;

  const rows = Array.from({ length: numRows }, () => "");
  let row = 0;
  let goingDown = false;

  for (const char of s) {
    rows[row] += char;
    if (row === 0 || row === numRows - 1) goingDown = !goingDown;
    row += goingDown ? 1 : -1;
  }

  return rows.join("");
}

// Time Complexity:  O(n) — single pass through the string
// Space Complexity: O(n) — storing all characters across the row buckets
