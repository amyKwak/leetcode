from typing import List

def wordBreak(s: str, wordDict: List[str]) -> bool:
    word_set = set(wordDict)          # For O(1) lookups
    n = len(s)
    # dp[i] will be True if s[:i] can be segmented using words in word_set
    dp = [False] * (n + 1)
    dp[0] = True  # Empty string is “segmented” by default

    # Build up dp from 1 to n
    for i in range(1, n + 1):
        for j in range(i):
            # If s[:j] can be segmented (dp[j] is True) and s[j:i] is in the dictionary,
            # then s[:i] can also be segmented.
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break

    return dp[n]


# Time Complexity: O(n^2 * k) in the general case (often described as O(n^3) if you count the substring cost),
#   where n = len(s) and k is the average length of a dictionary word.
#   - We have two nested loops (i from 1..n, j from 0..i), making O(n^2) iterations.
#   - Checking s[j:i] in a hash set takes O(k) to hash/compare that substring.
# Space Complexity: O(n + W), where
#   - O(n) is for the dp array of size n+1,
#   - O(W) is for storing all dictionary words in a hash set (W = total length of all words).


# BFS Solution
from collections import deque
from typing import List

def wordBreak(s: str, wordDict: List[str]) -> bool:
    word_set = set(wordDict)
    n = len(s)
    queue = deque([0])    # start from index 0
    visited = set()       # to avoid reprocessing the same index

    while queue:
        start = queue.popleft()
        if start == n:
            return True   # reached the end via valid segmentation
        if start in visited:
            continue      # already tried from this index

        visited.add(start)
        # Try every word in the dictionary at position `start`
        for w in word_set:
            end = start + len(w)
            if end <= n and s[start:end] == w:
                queue.append(end)

    return False


# Time Complexity: O(n * m * k),
#   where n = len(s), m = len(wordDict), and k = average length of words in wordDict.
#   • Each index 0..n−1 is enqueued at most once (due to `visited`).
#   • At each index, we try up to m words, each comparison costs O(k).
#
# Space Complexity: O(n + W),
#   where n = len(s) (for the queue and visited set) and W = total length of all words
#   (for storing word_set).

