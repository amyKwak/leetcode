from typing import List

def subsets(nums: List[int]) -> List[List[int]]:
    results: List[List[int]] = []
    n = len(nums)

    def backtrack(start: int, current_subset: List[int]) -> None:
        """
        Build subsets by choosing whether to include each element starting at index `start`.
        """
        # Append a copy of the current subset to results.
        results.append(current_subset.copy())

        # Iterate through remaining elements to generate further subsets.
        for i in range(start, n):
            # Include nums[i] in the subset.
            current_subset.append(nums[i])
            backtrack(i + 1, current_subset)
            # Remove last element to backtrack.
            current_subset.pop()

    backtrack(0, [])
    return results


# Time Complexity: O(n * 2^n), where n = len(nums).
# Space Complexity: O(n * 2^n) to store all subsets, plus O(n) auxiliary for recursion.
