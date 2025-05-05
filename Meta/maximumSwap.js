function maximumSwap(num) {
  const digits = [...String(num)]; // Convert num to an array of digits as strings
  const lastIndex = Array(10).fill(-1);

  // Record the last occurrence of each digit
  digits.forEach((digit, index) => {
    lastIndex[digit] = index;
  });

  // Try to find the first swap opportunity
  for (let i = 0; i < digits.length; i++) {
    for (let d = 9; d > digits[i]; d--) {
      if (lastIndex[d] > i) {
        // Swap the digits
        [digits[i], digits[lastIndex[d]]] = [digits[lastIndex[d]], digits[i]];
        return Number(digits.join("")); // Return the swapped number
      }
    }
  }

  return num; // Return the original number if no swap occurs
}

// Time Complexity: O(N), where N is the number of digits in the input number num.
// Space Complexity: O(N)
