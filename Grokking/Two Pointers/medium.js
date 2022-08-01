// Triplet Sum to Zero

// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

// Input: [-3, 0, 1, 2, -1, 1, -2]
// Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
// Explanation: There are four unique triplets whose sum is equal to zero.

function search_triplets(arr) {
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    search_pair(arr, -arr[i], i + 1, triplets);
  }
  return triplets;
}

function search_pair(arr, target_sum, left, triplets) {
  let right = arr.length - 1;
  while (left < right) {
    const current_sum = arr[left] + arr[right];
    if (current_sum === target_sum) {
      triplets.push([-target_sum, arr[left], arr[right]]);
      left++;
      right--;
      while (left < right && arr[left] === arr[left - 1]) {
        left++;
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right--;
      }
    } else if (target_sum > current_sum) {
      left++;
    } else {
      right--;
    }
  }
}

// Time Complexity: O(N^2) overall: sorting = O(NlogN), search_pair = O(N)
// Space Complexity: O(N) for sorting

// -----------------------------------------------------------------------------------------------------------------------

// Triplet Sum Close to Target

// Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

// Input: [-2, 0, 1, 2], target=2
// Output: 1
// Explanation: The triplet [-2, 1, 2] has the closest sum to the target.

function triplet_sum_close_to_target(arr, targetSum) {
  arr.sort((a, b) => a - b);
  let smallest_differece = Infinity;
  for (i = 0; i < arr.length - 2; i++) {
    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      const target_diff = targetSum - arr[i] - arr[left] - arr[right];
      if (target_diff === 0) {
        return targetSum;
      }

      if (
        Math.abs(target_diff) < Math.abs(smallest_difference) ||
        (Math.abs(target_diff) === Math.abs(smallest_difference) &&
          target_diff > smallest_difference)
      ) {
        smallest_difference = target_diff;
      }

      if (target_diff > 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return targetSum - smallest_difference;
}

// Time Complexity: O(N^2)
// Space Complexity: O(N) for sorting

// -----------------------------------------------------------------------------------------------------------------------

// Triplets with Smaller Sum Sum

// Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

// Input: [-1, 0, 2, 3], target=3
// Output: 2
// Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

function triplet_with_smaller_sum(arr, target) {
  arr.sort((a, b) => a - b);
  let count = 0;
  for (i = 0; i < arr.length - 2; i++) {
    count += search_pair(arr, target - arr[i], i);
  }
  return count;
}

function search_pair(arr, target_sum, first) {
  let count = 0;
  let left = first + 1,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] < target_sum) {
      count += right - left;
      left++;
    } else {
      right--;
    }
  }
  return count;
}

// Time Complexity: O(N^2)
// Space Complexity: O(N) required for sorting if we are not using an in-place sorting algorithm

//-----------------------------------------------------------------------------------------------------------------------

// Dutch National Flag Problem

// Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

// The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

function dutch_flag_sort(arr) {
  let low = 0,
    i = 0,
    high = arr.length - 1;

  while (i <= high) {
    if (arr[i] === 0) {
      [arr[i], arr[low]] = [arr[low], arr[i]];
      i++;
      low++;
    } else if (arr[i] === 2) {
      [arr[i], arr[high]] = [arr[high], arr[i]];
      high--;
    } else {
      i++;
    }
  }
}

// The brute force solution will be to use an in-place sorting algorith like Heapsort which will take O(N*logN). We can do better than that by using the Two Pointers approach while iterating through the array.

// Time Complexity: O(N)
// Space Complexity: O(1)
