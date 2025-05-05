function smallestSubsequence(s) {
  const stack = [];
  const visited = new Set();
  const freq = {};

  // Frequency map
  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (const char of s) {
    // Decrease frequency count as we process this character
    freq[char]--;

    // If character is already in the stack, skip it
    if (visited.has(char)) continue;

    // Maintain the lexicographically smallest order
    while (
      stack.length > 0 &&
      stack[stack.length - 1] > char &&
      freq[stack[stack.length - 1]] > 0
    ) {
      visited.delete(stack.pop());
    }

    // Add current character to stack and mark it as visited
    stack.push(char);
    visited.add(char);
  }

  // Join stack to form the resulting string
  return stack.join("");
}
