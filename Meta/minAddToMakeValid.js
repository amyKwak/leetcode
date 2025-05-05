function minAddToMakeValid(s) {
  let openCount = 0; // Tracks unmatched opening parentheses
  let closeCount = 0; // Tracks unmatched closing parentheses

  for (const char of s) {
    if (char === "(") {
      openCount++; // Increment for each opening parenthesis
    } else {
      if (openCount > 0) {
        openCount--; // Pair with an unmatched opening parenthesis
      } else {
        closeCount++; // Increment for unmatched closing parenthesis
      }
    }
  }

  // Total moves needed will be the sum of unmatched opening and closing parentheses
  return openCount + closeCount;
}
