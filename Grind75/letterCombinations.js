var letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const result = [];
  const path = [];

  const backtrack = (i) => {
    if (i === digits.length) {
      result.push(path.join(""));
      return;
    }

    const letters = map[digits[i]];
    for (let ch of letters) {
      path.push(ch);
      backtrack(i + 1);
      path.pop();
    }
  };

  backtrack(0);
  return result;
};

// time: O(4^N)
// space: O(4^N)
