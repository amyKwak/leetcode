function wordBreak(s, wordDict) {
  const words = new Set(wordDict);
  const memo = new Map();

  function backtrack(start) {
    if (start === s.length) return true;
    if (memo.has(start)) return memo.get(start);

    for (let end = start + 1; end <= s.length; end++) {
      if (words.has(s.slice(start, end)) && backtrack(end)) {
        memo.set(start, true);
        return true;
      }
    }

    memo.set(start, false);
    return false;
  }

  return backtrack(0);
}

// Time: O(n^2)
// Space: O(n)

console.log(
  wordBreak("aaaaaaaaaaaaaaaaaaaa", ["a", "aa", "aaa", "aaaa", "aaaaa"]),
);
