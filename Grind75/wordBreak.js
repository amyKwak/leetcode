var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  const memo = new Map();

  const canBreak = (start) => {
    if (start === s.length) return true;
    if (memo.has(start)) return memo.get(start);

    for (let end = start + 1; end <= s.length; end++) {
      const word = s.slice(start, end);
      if (wordSet.has(word) && canBreak(end)) {
        memo.set(start, true);
        return true;
      }
    }

    memo.set(start, false);
    return false;
  };

  return canBreak(0);
};

// DP solution
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict); // Faster lookup
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true; // Empty string is always "breakable"

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break; // No need to check more j's
      }
    }
  }

  return dp[s.length];
};
