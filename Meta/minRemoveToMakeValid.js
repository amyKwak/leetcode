const minRemoveToMakeValid = (str) => {
  const chars = str.split("");
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "(") {
      stack.push(i);
    } else if (char === ")") {
      if (stack.length === 0) {
        chars[i] = "";
      } else {
        stack.pop();
      }
    }
  }

  for (let i = 0; i < stack.length; i++) {
    const char = stack[i];
    chars[char] = "";
  }

  return chars.join("");
};

// Example usage:
const input = "a)b(c)d";
console.log(minRemoveToMakeValid(input)); // Output: "ab(c)d"
