def uniquePaths(m: int, n: int) -> int:
    total_moves = m + n - 2
    k = min(m - 1, n - 1)
    result = 1

    # Compute C(total_moves, k) = ∏_{i=1..k} (total_moves − k + i) / i
    for i in range(1, k + 1):
        result = result * (total_moves - k + i) // i

    return result


# Time Complexity: O(min(m, n)), since we do k = min(m−1, n−1) multiplications/divisions.
# Space Complexity: O(1) extra space.
