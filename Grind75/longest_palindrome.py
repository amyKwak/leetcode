def longest_palindrome(s: str) -> int:
    length = 0
    unpaired = set()

    for ch in s:
        if ch in unpaired:
            length += 2
            unpaired.remove(ch)
        else:
            unpaired.add(ch)
    
    return length + 1 if unpaired else 0