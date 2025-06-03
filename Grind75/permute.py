def permute(nums: List[int]) -> List[List[int]]:
    results = []
    n = len(nums)
    used = [False] * n 

    def backtrack(current_permutation):
        # If we've chose `n` numbers, record a copy of the current permutation.
        if len(current_permutation) == n:
            results.append(current_permutation.copy())
            return
        
        # Try each number that has not yet been used.
        for i in range(n):
            if used[i]:
                continue # Skip numbers already in the permutation

            # Choose nums[i]
            used[i] = True
            current_permutation.append(nums[i])

            # Recurse to build the next position
            backtrack(current_permutation)

            # Undo the choice for the next iteration (backtrack)
            current_permutation.pop()
            used[i] = False

    # Kick off backtracking with an empty permutation
    backtrack([])
    return results

# Time Complexity: O(n * n!), because there are n! permuations and building each one takes O(n) work.
# Space Complexity: O(n! * n) to store all permutations in `results`, plus O(n) auxiliary space for recursion and the `used` array.