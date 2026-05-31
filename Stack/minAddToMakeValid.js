function minAddToMakeValid(s) {
  let openNeeded = 0;
  let closeNeeded = 0;

  for (const ch of s) {
    if (ch === "(") {
      closeNeeded++;
    } else {
      if (closeNeeded > 0) {
        closeNeeded--;
      } else {
        openNeeded++;
      }
    }
  }

  return openNeeded + closeNeeded;
}

// Time: O(n)
// Space: O(1)
