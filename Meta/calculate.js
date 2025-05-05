function calculate(s) {
  const stack = [];
  let currentNumber = 0;
  let operation = "+";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // Build the current number from digit characters
    if (!isNaN(char) && char !== " ") {
      currentNumber = currentNumber * 10 + Number(char);
    }

    // Process the operation when an operator is found or at the end of the string
    if (
      char === "+" ||
      char === "-" ||
      char === "*" ||
      char === "/" ||
      i === s.length - 1
    ) {
      // Handle the previous operation
      if (operation === "+") {
        stack.push(currentNumber);
      } else if (operation === "-") {
        stack.push(-currentNumber);
      } else if (operation === "*") {
        stack.push(stack.pop() * currentNumber);
      } else if (operation === "/") {
        stack.push(Math.trunc(stack.pop() / currentNumber)); // Truncate towards zero
      }
      operation = char; // Update the operation for the next number
      currentNumber = 0; // Reset current number for the next operation
    }
  }

  // Sum all numbers in the stack to get the final result
  return stack.reduce((acc, num) => acc + num, 0);
}

// Time complexity: O(n) where n is the length of the input string
// Space complexity: O(n) for the stack
