from typing import List

def merge(intervals: List[List[int]]) -> List[List[int]]:
    intervals.sort(key=lambda x: x[0])

    merged: List[List[int]] = []
    for start, end in intervals:
        if not merged or merged[-1][1] < start:
            # No overlap: push as a new interval.
            merged.append([start, end])
        else:
            # Overlap: merge by updating the end of the last interval in `merged`.
            merged[-1][1] = max(merged[-1][1], end)

    return merged


# Time Complexity: O(n log n), where n = len(intervals), due to the sort step.
# Space Complexity: O(n) for the output list of merged intervals (auxiliary space is O(1)).
