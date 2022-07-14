// Maximum Sum Subarray of Size K

// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].

const max_sub_array_of_size_k = function(k, arr) {
  let max = 0, sum = 0, start = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k - 1) {
      max = Math.max(max, sum);
      sum -= arr[start];
      start++;
    }
  }
  return max;
};

// Time Complexity: O(n)
// Space Complexity: O(1)

----------------------------------------------------------------------------------------------------------------------

// Smallest Subarray With a Greater Sum

// Given an array of positive integers and a number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].

const smallest_subarray_sum = function(s, arr) {
  let minLength = Infinity, start = 0, sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    while (sum >= s) {
      minLength = Math.min(minLength, i - start + 1);
      sum -= arr[start];
      start++;
    }
  }

  if (minLength === Infinity) {
    return 0;
  }
  return minLength;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
