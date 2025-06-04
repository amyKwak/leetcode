from typing import Dict, List
import bisect

class TimeMap:
    def __init__(self):
        # For each key, store:
        #   - a sorted list of timestamps
        #   - a parallel list of values
        self.timestamps: Dict[str, List[int]] = {}
        self.values:     Dict[str, List[str]] = {}

    def set(self, key: str, value: str, timestamp: int) -> None:
        """
        Store `value` under `key` at time `timestamp`.
        We assume timestamps for a given key arrive in strictly increasing order.
        """
        if key not in self.timestamps:
            self.timestamps[key] = []
            self.values[key]     = []
        # Just append—since timestamp is strictly increasing, lists stay sorted.
        self.timestamps[key].append(timestamp)
        self.values[key].append(value)

    def get(self, key: str, timestamp: int) -> str:
        """
        Return the value whose stored timestamp is the largest one <= `timestamp`.
        If none ≤ `timestamp`, return "".
        """
        if key not in self.timestamps:
            return ""
        ts_list = self.timestamps[key]
        i = bisect.bisect_right(ts_list, timestamp)
        if i == 0:
            # All stored timestamps are greater than query
            return ""
        # i-1 is the index of the largest timestamp ≤ query
        return self.values[key][i - 1]


# Time Complexity:
# - set: O(1) amortized (appending to two lists).
# - get: O(log n), where n is the number of timestamps stored for that key (due to binary search).

# Space Complexity:
# O(N), where N is the total number of (key, value, timestamp) entries stored across all keys.
