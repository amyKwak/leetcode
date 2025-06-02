def search(nums: list[int], target: int) -> int:
    left, right = 0, len(nums) - 1

    while left <= right:
        mid = (left + right) // 2

        # If we found the target at mid, return its index immediately.
        if nums[mid] == target:
            return mid
        
        # Determine which side (left->mid, or mid->right) is properly sorted.
        if nums[left] <= nums[mid]:
            # The left half [left..mid] is sorted in ascending order.
            if nums[left] <= target < nums[mid]:
                # Target lies in the sorted left half.
                right = mid - 1
            else:
                # Target must be in the other half.
                left = mid + 1
        
        else:
            # Otherwise, the right half [mid..right] must be sorted.
            if nums[mid] < target <= nums[right]:
                # Target lies in the sorted right half.
                left = mid + 1
            else:
                # Target must be in the other half.
                right = mid - 1
    
    # If we exit the loop, target was not found.
    return -1

# Time Complexity: O (log n), since each step halves the search interval.
# Space Complexity: O(1), using only a few pointers regardless of input size.
            