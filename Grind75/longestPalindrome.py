def longestPalindrome(s: str) -> int:
    length = 0
    unpaired = set()

    for ch in s:
        if ch in unpaired:
            length += 2
            unpaired.remove(ch)
        else:
            unpaired.add(ch)
    
    return length + 1 if unpaired else 0


# Longest Palindromic Substring
def longestPalindrome(s: str) -> str:
    if not s:
        return ""

    start, end = 0, 0  # indices of the longest palindrome found

    def expand(left: int, right: int) -> (int, int):
        """
        Expand around the indices `left` and `right` as the center,
        returning the (inclusive) bounds of the longest palindrome found.
        """
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        # After the loop, left and right are one step beyond the palindrome
        return left + 1, right - 1

    for i in range(len(s)):
        # Odd-length palindrome (centered at i)
        l1, r1 = expand(i, i)
        if (r1 - l1) > (end - start):
            start, end = l1, r1

        # Even-length palindrome (centered between i and i+1)
        l2, r2 = expand(i, i + 1)
        if (r2 - l2) > (end - start):
            start, end = l2, r2

    return s[start:end + 1]


# Time Complexity: O(n^2), since for each of the n centers we may expand up to O(n) steps.
# Space Complexity: O(1) extra space (ignoring the output substring).
