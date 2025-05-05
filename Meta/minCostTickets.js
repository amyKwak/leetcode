function mincostTickets(days, costs) {
  const n = days.length;
  const memo = new Map(); // Cache to store results

  function dfs(i) {
    // Base case: If we've processed all travel days
    if (i >= n) return 0;

    // If already computed, return cached result
    if (memo.has(i)) return memo.get(i);

    // Option 1: Buy a 1-day pass
    const cost1 = costs[0] + dfs(i + 1);

    // Option 2: Buy a 7-day pass
    let j = i;
    while (j < n && days[j] < days[i] + 7) j++;
    const cost7 = costs[1] + dfs(j);

    // Option 3: Buy a 30-day pass
    let k = i;
    while (k < n && days[k] < days[i] + 30) k++;
    const cost30 = costs[2] + dfs(k);

    // Find the minimum cost
    const result = Math.min(cost1, cost7, cost30);

    // Cache the result for the current day
    memo.set(i, result);

    return result;
  }

  return dfs(0);
}
