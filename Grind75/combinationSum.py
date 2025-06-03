def combinationSum(candidates: List[int], target: int) -> List[List[int]]:
    results = []
    candidates.sort() # Sort to enable early stopping when the running sum exceeds target.

    def backtrack(start, current_combination, current_sum):
        """
        Recursively build combinations starting from index `start`.
        - `current_combination` holds the numbers chosen so far.
        - `current_sum` is the sum of those numbers.
        """

        # If the running sum matches the target, record a copy of the current combination.
        if current_sum == target:
            results.append(current_combination.copy())
            return
        
        # If the running sum exceeds the target, no need to proceed along this path.
        if current_sum > target:
            return
        
        # Iterate through candidates starting at index `start`.
        for i in range(start, len(candidates)):
            num = candidates[i]
            # If adding this candidate would exceed the target, break out early.
            if current_sum + num > target:
                break

            # Choose the current number and recurse (allowing repeated use by passing i again).
            current_combination.append(num)
            backtrack(i, current_combination, current_sum + num)

            # Undo the choice for the next iteration.
            current_combination.pop()
    
    # Kick off the backtracking with an empty combination and sum of zero.
    backtrack(0, [], 0)
    return results

# Time Complexity: Exponential in the worse case, since the algorithm explores all possible combinations.
# Space Complexity: O(T / min(candidates)), due to recursion depth and temporary combination storage.
