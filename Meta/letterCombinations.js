function letterCombinations(digits) {
  if (!digits.length) return []; // Return an empty array if no digits are provided

  const phoneMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const result = [];

  const backtrack = (index, path) => {
    if (index === digits.length) {
      result.push(path.join("")); // Join the current path and add to results
      return;
    }

    const digit = digits[index];
    const letters = phoneMap[digit];

    for (let letter of letters) {
      path.push(letter); // Choose the current letter
      backtrack(index + 1, path); // Move to the next digit
      path.pop(); // Backtrack to try the next letter
    }
  };

  backtrack(0, []);
  return result;
}

// Example usage:
const examples = [
  { input: "23", output: letterCombinations("23") },
  { input: "2", output: letterCombinations("2") },
  { input: "", output: letterCombinations("") },
  { input: "29", output: letterCombinations("29") },
];

// Displaying the examples
examples.forEach((example) => {
  console.log(`Input: "${example.input}" => Output:`, example.output);
});
