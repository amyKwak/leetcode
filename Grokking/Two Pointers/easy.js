//  Pair with Target Sum

// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Input: [1, 2, 3, 4, 6], target=6
// Output: [1, 3]
// Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

function pair_with_target_sum(arr, targetSum) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];

    if (currentSum === targetSum) {
      return [left, right];
    }

    if (targetSum > currentSum) {
      left--;
    } else {
      right++;
    }
  }
  return [-1, -1];
}

// Time Complexity: O(N)
// Space Complexity: O(1)

-----------------------------------------------------------------------------------------------------------------------

// Remove Duplicates

// Given an array of sorted numbers, remove all duplicate number instances from it in-place, such that each element appears only once. The relative order of the elements should be kept the same and you should not use any extra space so that that the solution have a space complexity of O(1).

// Move all the unique elements at the beginning of the array and after moving return the length of the subarray that has no duplicate in it.

function remove_duplicates(arr) {
  let nextNonDuplicate = 1, i = 1;


  while (i < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i];
      nextNonDuplicate++;
    }
    i++;
  }
  return nextNonDuplicate;
}

// Time Complexity: O(N)
// Space Complexity: O(1)

-----------------------------------------------------------------------------------------------------------------------

// Squaring a Sorted Array

// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

// Input: [-2, -1, 0, 2, 3]
// Output: [0, 1, 4, 4, 9]

function make_squares(arr) {
  const n = arr.length;
  squares = Array(n).fill(0);
  let highestSquareInx = n - 1, left = 0, right = n - 1;

  while (left <= right) {
    let leftSquare = arr[left]*2,
    rightSquare = arr[right]*2;
    if (leftSquare > rightSquare) {
      squares[highestSquareInx] = leftSquare;
      left++;
    } else {
      squares[highestSquareInx] = rightSquare;
      right--;
    }
    highestSquareInx--;
  }
  return squares;
}

// Time Complexity: O(N)
// Space Complexity: O(N)
