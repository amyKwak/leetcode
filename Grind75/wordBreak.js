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
function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);
  const n = s.length;
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
}

// Time complexity: O(n^2) - n is the length of s, for each i we check all j < i, substring is O(n)
// Space complexity: O(n) - dp array of size n+1, plus wordSet of size m (m = number of words)
