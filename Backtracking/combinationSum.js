function combinationSum(candidates, target) {
  const result = [];

  function backtrack(start, current, remaining) {
    if (remaining === 0) {
      result.push([...current]);
      return;
    }
    if (remaining < 0) return;

    for (let i = start; i < candidates.length; i++) {
      current.push(candidates[i]);
      backtrack(i, current, remaining - candidates[i]);
      current.pop();
    }
  }

  backtrack(0, [], target);
  return result;
}

// Time Complexity:  O(n^(t/m)) — n candidates, t = target, m = smallest candidate
// Space Complexity: O(t/m) — maximum recursion depth is target / smallest candidate
