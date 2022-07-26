// Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.

// Input: [4, 1, 2, -1, 1, -3], target=1
// Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
// Explanation: Both the quadruplets add up to the target.

function search_quadruplets(arr, target) {
  arr.sort((a, b) => a - b);
  const quadruplets = [];
  for (let i = 0; i < arr.length - 3; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < arr.length - 2; j++) {
      if (j > i + 1 && arr[i] === arr[j - 1]) {
        continue;
      }
      search_pairs(arr, target, i, j, quadruplets);
    }
  }
  return quadruplets;
}

function search_pairs(arr, targetSum, first, second, quadruplets) {
  let left = second + 1,
    right = arr.length - 1;
  while (left < right) {
    const sum = arr[first] + arr[second] + arr[left] + arr[right];
    if (sum === targetSum) {
      quadruplets.push([arr[first], arr[second], arr[left], arr[right]]);
      left++;
      right--;
      while (left < right && arr[left] === arr[left - 1]) {
        left++;
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right--;
      }
    } else if (sum < targetSum) {
      left++;
    } else {
      right--;
    }
  }
}

// Time Complexity: Sorting the array will take O(NlogN). Overall time complexity is O(NlogN + N^3), which is asymptotically equivalent to O(N^3).
// Space Complexity: O(N) for sorting.
