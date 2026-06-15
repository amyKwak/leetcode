function myAtoi(s) {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  let i = 0;
  const n = s.length;

  // skip leading whitespace
  while (i < n && s[i] === " ") i++;

  if (i === n) return 0;

  // check sign
  let sign = 1;
  if (s[i] === "+" || s[i] === "-") {
    if (s[i] === "-") sign = -1;
    i++;
  }

  // read digits
  let result = 0;
  while (i < n && s[i] >= "0" && s[i] <= "9") {
    const digit = s[i].charCodeAt(0) - "0".charCodeAt(0);
    result = result * 10 + digit;

    // clamp early to avoid overflow issues
    if (sign === 1 && result > INT_MAX) return INT_MAX;
    if (sign === -1 && -result < INT_MIN) return INT_MIN;

    i++;
  }

  return sign * result;
}

// Time complexity: O(n) - single pass through the string, n is the length of s
// Space complexity: O(1) - only constant extra space used for pointers and accumulator
