var isValid = function (s) {
  if (!s || s.length % 2 !== 0) return false;

  const stack = [];

  for (const char of s) {
    switch (char) {
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      case "(":
        stack.push(")");
        break;
      default:
        if (stack.pop() !== char) return false;
    }
  }
  return stack.length === 0;
};
