function combinationSum(candidates, target) {
  const result = [];

  function backtrack(start, current, remaining) {
    if (remaining === 0) {
      result.push([...current]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > remaining) continue;

      current.push(candidates[i]);
      backtrack(i, current, remaining - candidates[i]);
      current.pop();
    }
  }

  backtrack(0, [], result);
  return result;
}

// Time:  O(n^(t/m)) — n candidates, t=target, m=smallest candidate
// Space: O(t/m)     — max depth of call stack = target / smallest candidate
