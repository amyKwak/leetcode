function myAtoi(s) {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);
  let i = 0;
  let sign = 1;
  let result = 0;

  // Step 1: Skip leading whitespace
  while (i < s.length && s[i] === " ") i++;

  // Step 2: Determine sign
  if (i < s.length && (s[i] === "-" || s[i] === "+")) {
    sign = s[i] === "-" ? -1 : 1;
    i++;
  }

  // Step 3: Convert digits
  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    const digit = s[i].charCodeAt(0) - "0".charCodeAt(0);

    // Step 4: Check for overflow before it happens
    if (result > Math.floor((INT_MAX - digit) / 10)) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }

    result = result * 10 + digit;
    i++;
  }

  return sign * result;
}

// Time Complexity:  O(n) - single pass through the string
// Space Complexity: O(1) - only a fixed number of variables used
