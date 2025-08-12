function myAtoi(s) {
  // Step 1: Trim leading whitespaces
  s = s.trim();

  if (s.length === 0) return 0;

  // Step 2: Handle optional sign
  let i = 0,
    sign = 1;
  if (s[i] === "-" || s[i] === "+") {
    sign = s[i] === "-" ? -1 : 1;
    i++;
  }

  // Step 3: Convert digits using Number()
  let result = 0;
  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    result = result * 10 + Number(s[i]);
    i++;
  }

  // Step 4: Apply sign
  result *= sign;

  // Step 5: Clamp to 32-bit signed integer range
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  if (result < INT_MIN) return INT_MIN;
  if (result > INT_MAX) return INT_MAX;

  return result;
}
