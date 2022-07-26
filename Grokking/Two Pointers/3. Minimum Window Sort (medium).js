// Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.

// Input: [1, 2, 5, 3, 7, 10, 9, 12]
// Output: 5
// Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted

function shortest_window_sort(arr) {
  let low = 0,
    high = arr.length - 1;

  while (low < arr.length - 1 && arr[low] <= arr[low + 1]) {
    low++;
  }
  if (low === arr.length - 1) {
    return 0;
  }
  while (high > 0 && arr[high] >= arr[high - 1]) {
    high--;
  }

  let subarrayMax = -Infinity,
    subarrayMin = Infinity;

  for (let k = low; k < high + 1; k++) {
    subarrayMax = Math.max(subarrayMax, arr[k]);
    subarrayMin = Math.min(subarrayMin, arr[k]);
  }

  while (low > 0 && arr[low - 1] > subarrayMin) {
    low--;
  }
  while (high < arr.length - 1 && arr[high + 1] < subarrayMax) {
    high++;
  }
  return high - low + 1;
}

// Time Complexity: O(N)
// Space Complexity: O(1)
