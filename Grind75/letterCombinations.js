function letterCombinations(digits) {
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

  const res = [];
  const path = [];

  function backtrack(idx) {
    // if we've chosen one letter for each digit, record the combination
    if (idx === digits.length) {
      res.push(path.join(""));
      return;
    }

    const letters = map[digits[idx]];
    for (let ch of letters) {
      path.push(ch);
      backtrack(idx + 1);
      path.pop();
    }
  }

  backtrack(0);
  return res;
}
