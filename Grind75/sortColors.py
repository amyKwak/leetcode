from typing import List

def sortColors(nums: List[int]) -> None:
    # low: boundary for 0s (everything left of low is 0)
    # mid: current index under examination
    # high: boundary for 2s (everything right of high is 2)
    low, mid, high = 0, 0, len(nums) - 1

    while mid <= high:
        if nums[mid] == 0:
            # Swap nums[mid] and nums[low], expand the 0-region
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1
            mid += 1
        elif nums[mid] == 1:
            # 1 is in the correct region—just move on
            mid += 1
        else:
            # nums[mid] == 2
            # Swap nums[mid] and nums[high], shrink the 2-region
            nums[mid], nums[high] = nums[high], nums[mid]
            high -= 1
            # Note: do NOT increment mid here, because the swapped-in element
            # at index mid needs to be examined in the next iteration.

