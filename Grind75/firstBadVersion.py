class Solution:
    def firstBadVersion(self, n: int) -> int:
        left, right = 1, n

        while left < right:
            mid = (left + right) // 2
            if isBadVersion(mid):
                right = mid  # First bad could be mid or before
            else:
                left = mid + 1  # First bad is after mid

        return left
