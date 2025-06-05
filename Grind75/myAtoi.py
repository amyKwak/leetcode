def myAtoi(s: str) -> int:
    INT_MAX = 2**31 - 1
    INT_MIN = -2**31

    n = len(s)
    idx = 0

    # 1. Skip leading whitespace
    while idx < n and s[idx] == ' ':
        idx += 1

    # If we've reached the end, no number can be formed
    if idx >= n:
        return 0

    # 2. Check for optional sign
    sign = 1
    if s[idx] == '+':
        idx += 1
    elif s[idx] == '-':
        sign = -1
        idx += 1

    # 3. Skip leading zeros (still counts as “reading digits” if they appear)
    digits_read = False
    while idx < n and s[idx] == '0':
        digits_read = True
        idx += 1

    # 4. Read digits until a non-digit or end-of-string
    result = 0
    while idx < n and s[idx].isdigit():
        digits_read = True
        digit = ord(s[idx]) - ord('0')
        result = result * 10 + digit
        idx += 1

        # Early clamp check: if result > INT_MAX (absolute) + 1, we can break
        # (optional optimization to avoid growing result excessively)
        if result > INT_MAX + 1:
            break

    # If no digits at all (not even zeros), return 0
    if not digits_read:
        return 0

    result *= sign

    # 5. Clamp to 32-bit signed range
    if result < INT_MIN:
        return INT_MIN
    if result > INT_MAX:
        return INT_MAX
    return result


# Time Complexity: O(n), where n = len(s). We scan the string at most once.
# Space Complexity: O(1), using only a fixed number of integer variables.
