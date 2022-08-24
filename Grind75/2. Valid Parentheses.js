// Valid Parentheses (easy)

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Notes: use a stack
// Time: O(n)
// Space: O(n)

const isValid = (s) => {
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = [];

  if (!s) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    let curr = s.charAt(i),
      top;
    if (map[curr]) {
      top = stack.length === 0 ? "#" : stack.pop();
      if (top !== map[curr]) return false;
    } else {
      stack.push(curr);
    }
  }
  return stack.length === 0;
};
