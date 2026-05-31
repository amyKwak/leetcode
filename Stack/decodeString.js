function decodeString(s) {
  const countStack = [];
  const stringStack = [];
  let current = "";
  let k = 0;

  for (const char of s) {
    if (char >= "0" && char <= "9") {
      k = k * 10 + Number(char);
    } else if (char === "[") {
      countStack.push(k);
      stringStack.push(current);
      current = "";
      k = 0;
    } else if (char === "]") {
      const repeat = countStack.pop();
      const prev = stringStack.pop();
      current = prev + current.repeat(repeat);
    } else {
      current += char;
    }
  }

  return current;
}

// Time: O(n * k)
// Space: O(n)
