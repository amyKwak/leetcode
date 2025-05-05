function calculate(s) {
  let stack = [];
  let currentNum = 0;
  let operator = "+";
  let n = s.length;

  for (let i = 0; i < n; i++) {
    let char = s[i];

    if (!isNaN(char) && char !== " ") {
      currentNum = currentNum * 10 + parseInt(char); // build the number
    }

    if ((isNaN(char) && char !== " ") || i === n - 1) {
      // if char is an operator or we're at the end
      if (operator === "+") {
        stack.push(currentNum);
      } else if (operator === "-") {
        stack.push(-currentNum);
      } else if (operator === "*") {
        stack.push(stack.pop() * currentNum);
      } else if (operator === "/") {
        stack.push(Math.trunc(stack.pop() / currentNum)); // truncates towards zero
      }
      operator = char;
      currentNum = 0;
    }
  }

  // Sum all the numbers in the stack to get the result
  return stack.reduce((sum, num) => sum + num, 0);
}
