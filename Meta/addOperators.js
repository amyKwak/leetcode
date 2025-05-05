function addOperators(num, target) {
  const results = [];

  // Helper function to perform the recursion
  function helper(index, currentExpression, currentValue) {
    // If we've processed the whole number string
    if (index === num.length) {
      if (currentValue === target) {
        results.push(currentExpression);
      }
      return;
    }

    // Try all possible numbers formed by adding digits
    for (let i = index; i < num.length; i++) {
      const currentStr = num.substring(index, i + 1); // Get the next number
      const currentNum = parseInt(currentStr); // Convert the number to an integer

      // Skip numbers with leading zeroes (like "05" or "012")
      if (currentStr.length > 1 && currentStr[0] === "0") continue;

      // Base case: For the first digit, just use it as the start of the expression
      if (index === 0) {
        helper(i + 1, currentStr, currentNum);
      } else {
        // Add a '+' operator before the current number
        helper(
          i + 1,
          currentExpression + "+" + currentStr,
          currentValue + currentNum
        );

        // Add a '-' operator before the current number
        helper(
          i + 1,
          currentExpression + "-" + currentStr,
          currentValue - currentNum
        );
      }
    }
  }

  // Start recursion from the first index
  helper(0, "", 0);
  return results;
}

const num = "123456789";
const target = 100;
const solutions = addOperators(num, target);
console.log(solutions);
