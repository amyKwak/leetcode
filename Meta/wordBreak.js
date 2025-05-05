function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);
  const memo = new Map();

  function dfs(start) {
    if (start === s.length) return true;
    if (memo.has(start)) return memo.get(start);

    for (let end = start + 1; end <= s.length; end++) {
      if (wordSet.has(s.substring(start, end)) && dfs(end)) {
        memo.set(start, true);
        return true;
      }
    }

    memo.set(start, false);
    return false;
  }

  return dfs(0);
}

// Time Complexity: O(N^2), where N is the length of the input string s.
// Space Complexity: O(N), where N is the length of the input string s.
