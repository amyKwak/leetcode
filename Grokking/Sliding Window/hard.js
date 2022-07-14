// Longest Substring with Distinct Characters

// Given a string, find the length of the longest substring, which has all distinct characters.

// Input: String="aabccbb"
// Output: 3
// Explanation: The longest substring with distinct characters is "abc".

const non_repeat_substring = function(str) {
  let start = 0, maxLength = 0, map = {};

  for (let i = 0; i < str.length; i++) {
    const rightChar = str[i];

    if (rightChar in map) {
      start = Math.max(start, map[rightChar] + 1);
    }
    map[rightChar] = i;

    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
};

// Time Complexity: O(n)
// Space Complexity: O(k)

----------------------------------------------------------------------------------------------------------------------

// Longest Substring with Same Letters after Replacement

// Given a string with lowercase letters only, if you are allowed to replace no more than k letters with any letter, find the length of the longest substring having the same letters after replacement.

// Input: String="aabccbb", k=2
// Output: 5
// Explanation: Replace the two 'c' with 'b' to have the longest repeating substring "bbbbb".

function length_of_longest_substring(str, k) {
  let windowStart = 0,
    maxLength = 0,
    maxRepeatLetterCount = 0,
    frequencyMap = {};

  // Try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in frequencyMap)) {
      frequencyMap[rightChar] = 0;
    }
    frequencyMap[rightChar] += 1;

    // we don't need to place the maxRepeatLetterCount under the below 'if', see the
    // explanation in the 'Solution' section above.
    maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[rightChar]);

    // Current window size is from windowStart to windowEnd, overall we have a letter which is
    // repeating 'maxRepeatLetterCount' times, this means we can have a window which has one letter
    // repeating 'maxRepeatLetterCount' times and the remaining letters we should replace.
    // if the remaining letters are more than 'k', it is the time to shrink the window as we
    // are not allowed to replace more than 'k' letters
    if ((windowEnd - windowStart + 1 - maxRepeatLetterCount) > k) {
      leftChar = str[windowStart];
      frequencyMap[leftChar] -= 1;
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

// Time Complexity: O(n)
// Space Complexity: O(1)

----------------------------------------------------------------------------------------------------------------------

// Longest Subarray with Ones after Replacement

// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

// Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
// Output: 6
// Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.

const length_of_longest_substring = function(arr, k) {
  let start = 0, maxLength = 0, count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
    }
    if ((i - start + 1 - count) > k) {
      if (arr[start] === 1) {
        count--;
      }
      start++;
    }
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
};

// Time Complexity: O(n)
// Space Complexity: O(1)