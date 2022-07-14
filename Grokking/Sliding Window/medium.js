// Longest Substring with maximum K Distinct Characters

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".

const longest_substring_with_k_distinct = function(str, k) {
  let start = 0; maxLength = 0, map = {};

  for (let i = 0; i < str.length; i++) {
    const rightChar = str[i];
    if(!(rightChar in map)) {
      map[rightChar] = 0;
    }
    map[rightChar]++;

    while(Object.keys(map).length > k) {
      const leftChar = str[start];
      map[leftChar]--;
      if(map[leftChar] === 0) {
        delete map[leftChar];
      }
      start++;
    }
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
};

// Time Complexity: O(n)
// Space Complexity: O(k)

----------------------------------------------------------------------------------------------------------------------

// Fruits into Baskets

// Input: Fruit=['A', 'B', 'C', 'A', 'C']
// Output: 3
// Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

function fruits_into_baskets(fruits) {
  let start = 0, maxLength = 0, map = {};

  // try to extend the range [windowStart, windowEnd]
  for (let i = 0; i < fruits.length; i++) {
    const rightFruit = fruits[i];
    if (!(rightFruit in map)) {
      map[rightFruit] = 0;
    }
    map[rightFruit]++;

    // shrink the sliding window, until we are left with '2' fruits in the fruit frequency dictionary
    while (Object.keys(map).length > 2) {
      const leftFruit = fruits[start];
      map[leftFruit]--;
      if (map[leftFruit] === 0) {
        delete map[leftFruit];
      }
      start++; // shrink the window
    }

    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
}

// Time Complexity: O(n)
// Space Complexity: O(1)

// Similar Problems:

// Problem 1: Longest Substring with at most 2 distinct characters
// Given a string, find the length of the longest substring in it with at most two distinct characters.
// Solution: This problem is exactly similar to our parent problem.

