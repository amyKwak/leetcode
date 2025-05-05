function myAtoi(s) {
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  s = s.trimStart();

  let sign = 1;
  let i = 0;
  if (s[i] === "-" || s[i] === "+") {
    sign = s[i] === "-" ? -1 : 1;
    i++;
  }

  let num = 0;
  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    num = num * 10 + (s[i] - "0"); // Convert character to number
    i++;
  }

  num *= sign;

  if (num < INT_MIN) return INT_MIN;
  if (num > INT_MAX) return INT_MAX;

  return num;
}
