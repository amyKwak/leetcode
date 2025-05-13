def length_of_longest_substring(s: str) -> int:
    last_seen = {}
    start = 0
    max_length = 0

    for end in range(len(s)):
        if s[end] in last_seen and last_seen[s[end]] >= start:
            start = last_seen[s[end]] + 1
        
        last_seen[s[end]] = end
        max_length = max(max_length, end - start + 1)
    
    return max_length