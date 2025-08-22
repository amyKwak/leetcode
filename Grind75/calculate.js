// Evaluates a valid expression with +, -, parentheses, and spaces.
function calculate(s) {
  let res = 0; // current accumulated result for the "current frame"
  let sign = 1; // +1 or -1 for the next number
  let num = 0; // number currently being built from digits
  const stack = []; // stack of [prevRes, sign] frames (pushed as res, sign)

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch >= "0" && ch <= "9") {
      num = num * 10 + (ch.charCodeAt(0) - 48); // build multi-digit number
    } else if (ch === "+") {
      res += sign * num; // commit the previous number with its sign
      num = 0;
      sign = 1;
    } else if (ch === "-") {
      res += sign * num;
      num = 0;
      sign = -1;
    } else if (ch === "(") {
      // Push the current frame and start a new one
      stack.push(res);
      stack.push(sign);
      res = 0;
      sign = 1;
    } else if (ch === ")") {
      // Close current frame: finalize number, then merge with previous frame
      res += sign * num;
      num = 0;
      const prevSign = stack.pop();
      const prevRes = stack.pop();
      res = prevRes + prevSign * res;
    }
    // ignore spaces
  }

  // commit any trailing number
  res += sign * num;
  return res;
}
