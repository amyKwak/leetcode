def length_of_longest_substring(s: str) -> int:
    """
    Returns the length of the longest substring of `s`
    that contains no duplicate characters.

    Parameters
    ----------
    s : str
        The input string.

    Returns
    -------
    int
        Length of the longest substring without repeating characters.
    """
    last_seen: dict[str, int] = {}   # char → index *after* its last appearance
    max_len = 0                      # best result so far
    left = 0                         # left edge of the sliding window

    # Iterate with `right` as the window's right edge
    for right, char in enumerate(s):
        # If we've seen this char inside the current window,
        # move `left` just past its previous occurrence
        if char in last_seen and last_seen[char] > left:
            left = last_seen[char]

        # Record the next index after this character's position
        last_seen[char] = right + 1

        # Update the answer: current window length = right - left + 1
        max_len = max(max_len, right - left + 1)

    return max_len
