def coinChange(coins: List[int], amount: int) -> int:
    """
    DP approach: find the fewest number of coins needed to make up the given amount.
    
    dp[i] will hold the minimum coins needed to make sum = i.
    """
    # Use amount+1 as an "infinite" sentinel value (no solution can use more than amount coins of 1)
    INF = amount + 1
    
    # Initialize dp array:
    # dp[0] = 0 (zero coins needed for sum 0)
    # dp[1..amount] = INF (unknown yet, start as "infinite")
    dp = [0] + [INF] * amount

    # Build up dp from 1 to target amount
    for curr_sum in range(1, amount + 1):
        # Try every coin to see if it can contribute to curr_sum
        for coin in coins:
            if coin <= curr_sum:
                # If we use this coin, we need 1 coin + best for (curr_sum - coin)
                dp[curr_sum] = min(dp[curr_sum], dp[curr_sum - coin] + 1)
                # dp[curr_sum - coin] is already the fewest coins for that sub-sum

    # If dp[amount] is still INF, no combination made that sum
    return dp[amount] if dp[amount] != INF else -1


def coinChangeBFS(coins: List[int], amount: int) -> int:
    """
    BFS approach: treat each "remaining amount" as a node in a graph.
    Each edge subtracts a coin, and BFS levels equal number of coins used.
    """
    # Edge case: zero amount needs zero coins
    if amount == 0:
        return 0

    # Keep track of which remainders we've visited to avoid repeats
    visited = {amount}
    queue = deque([amount])
    level = 0  # number of coins used so far

    # Standard BFS loop
    while queue:
        level += 1
        # Process all nodes (remainders) at this BFS level
        for _ in range(len(queue)):
            remaining = queue.popleft()
            # Try subtracting each coin denomination
            for coin in coins:
                next_amount = remaining - coin
                if next_amount == 0:
                    # Found a path to exactly 0: return coins used (current level)
                    return level
                # If it's still positive and not seen before, enqueue it
                if next_amount > 0 and next_amount not in visited:
                    visited.add(next_amount)
                    queue.append(next_amount)
    # Exhausted all possibilities without hitting 0: no solution
    return -1


