function addBoldTag(s, words) {
  const n = s.length;
  const bold = new Array(n).fill(false); // Array to mark bold ranges

  // Step 1: Mark bold ranges
  for (const word of words) {
    let start = s.indexOf(word); // Find the first occurrence
    while (start !== -1) {
      for (let i = start; i < start + word.length; i++) {
        bold[i] = true; // Mark the indices as bold
      }
      start = s.indexOf(word, start + 1); // Find the next occurrence
    }
  }

  // Step 2: Construct the result with bold tags
  let result = "";
  let i = 0;

  while (i < n) {
    if (bold[i]) {
      result += "<b>"; // Open bold tag
      while (i < n && bold[i]) {
        result += s[i]; // Add characters inside the bold range
        i++;
      }
      result += "</b>"; // Close bold tag
    } else {
      result += s[i]; // Add non-bold characters
      i++;
    }
  }

  return result;
}
