// 2. Valid Parentheses (easy)

// Notes: use a stack
// Time: O(n)
// Space: O(n)

const isValid = (s) => {
  const map = {
      ')' : '(',
      '}' : '{',
      ']' : '['
  };
  const stack = [];

  if (!s) {
      return false;
  }
  for (let i=0; i<s.length; i++) {
      let curr = s.charAt(i);
      let top;
      if (map[curr]) {
          top = (stack.length === 0) ? '#' : stack.pop();
          if (top !== map[curr])
              return false;
      } else {
          stack.push(curr)
      }
  }
  return stack.length === 0;
};