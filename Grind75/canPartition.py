from typing import List

def canPartition(nums: List[int]) -> bool:
    total = sum(nums)
    # If total is odd, we cannot split into two equal-sum subsets.
    if total % 2 != 0:
        return False

    target = total // 2
    # dp[s] will be True if there's a subset of `nums` that sums to `s`.
    dp = [False] * (target + 1)
    dp[0] = True  # Base case: sum of 0 is always reachable via the empty subset.

    for num in nums:
        # Traverse backwards so that we do not reuse `num` more than once.
        for s in range(target, num - 1, -1):
            if dp[s - num]:
                dp[s] = True

        # Early exit: if we've already reached the target sum, we can stop.
        if dp[target]:
            return True

    return dp[target]


# Time Complexity: O(n * (total/2)), where n = len(nums) and total = sum(nums).
# Space Complexity: O(total/2).
