function coinChange(coins, amount) {
  // dp[i] will be the fewest coins needed to make amount i
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // zero coins to make amount 0

  // For each sub‑amount from 1 to amount...
  for (let i = 1; i <= amount; i++) {
    // try every coin
    for (const coin of coins) {
      if (coin <= i && dp[i - coin] !== Infinity) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

// BFS solution
function coinChange(coins, amount) {
  if (amount === 0) return 0;

  // Sort descending to try larger coins first (optional optimization)
  coins.sort((a, b) => b - a);

  const visited = new Array(amount + 1).fill(false);
  const queue = [amount];
  visited[amount] = true;
  let steps = 0;

  while (queue.length) {
    steps++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const curr = queue.shift();
      for (const coin of coins) {
        const next = curr - coin;
        if (next === 0) {
          // found exact change in `steps` coins
          return steps;
        }
        // only enqueue positive, unvisited remainders
        if (next > 0 && !visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      }
    }
  }

  // never reached 0
  return -1;
}
