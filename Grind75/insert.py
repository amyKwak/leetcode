def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
    new_start, new_end = newInterval
    result = []

    for interval in intervals:
        start, end = interval
        
        # No overlap, current interval comes before new interval
        if new_end < start:
            result.append([new_start, new_end])
            new_start, new_end = start, end
        # No overlap, current interval comes after new interval
        elif new_start > end:
            result.append(interval)
        else:
            new_start = min(new_start, start)
            new_end = max(new_end, end)
    
    result.append([new_start, new_end])
    return result
