from typing import List

def spiralOrder(matrix: List[List[int]]) -> List[int]:
    result: List[int] = []
    if not matrix or not matrix[0]:
        return result

    m, n = len(matrix), len(matrix[0])
    top, bottom = 0, m - 1
    left, right = 0, n - 1

    # Continue until all boundaries have been crossed
    while top <= bottom and left <= right:
        # 1. Traverse from left to right across the top row
        for col in range(left, right + 1):
            result.append(matrix[top][col])
        top += 1

        # 2. Traverse from top to bottom down the right column
        for row in range(top, bottom + 1):
            result.append(matrix[row][right])
        right -= 1

        # 3. If there's still a bottom row remaining, traverse from right to left
        if top <= bottom:
            for col in range(right, left - 1, -1):
                result.append(matrix[bottom][col])
            bottom -= 1

        # 4. If there's still a left column remaining, traverse from bottom to top
        if left <= right:
            for row in range(bottom, top - 1, -1):
                result.append(matrix[row][left])
            left += 1

    return result


# Time Complexity: O(m * n), since each element is visited exactly once.
# Space Complexity: O(1) extra space (excluding the output list).
